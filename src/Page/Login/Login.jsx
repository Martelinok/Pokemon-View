import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Components/Context/Auth";
import { connect } from "react-redux";
import { Cookies } from 'react-cookie';
import { useTranslate } from 'react-translate';
import { fetch } from "../../Functions/DbService";
import { decrypt } from "../../Functions/Encript"

/* ---------------------------- Import Components --------------------------- */
import Logo from "../../Assets/Images/Pokemon-Logo.png";
// import Google from "../../Assets/Images/google-icon.png";
import SvgIcon from "../../Assets/Images/SvgIcon";
/* ------------------------------ Import Style ------------------------------ */
import "./Login.css";
function Login({ dispatch }) {

  const { user, setUser } = useAuth();
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let t = useTranslate("Login");
  let cookies = new Cookies();

  const changelaanguage = (language) => {
    dispatch({ type: "SET_LANGUAGE", payload: language });
    cookies.remove('language');
    cookies.set('language', language)
    setUser(language)
  };

  const handleLogin = async () => {
    let response
    let validatePassword = false
    try {
      response = await fetch(email);
      if (response.data.length > 0) {
        validatePassword = await decrypt(password, response.data[0].password)
      }
    } catch (error) {
      console.log(error);
    } finally {
      if (response.data.length > 0 && validatePassword) {
        cookies.set('user', {
          id: response.data[0].id,
          name: response.data[0].name,
          email: response.data[0].email,
          favorites: response.data[0].favorites,
        }, { path: '/' });
        cookies.set('token', true, { path: '/' });
        dispatch({ type: "SET_FAVORITES_POKEMONS", payload: response.data[0].favorites });
        history("/Home");
      } else {
        alert(t("LoginError"))
      }
    }
  };

  return (
    <React.Fragment>
      <div className="Login_Header">
        <img src={Logo} alt="Logo" className="Login_Header_Image" />
        <div className="Login_Language_Image" onClick={() => changelaanguage(user === "en" ? "es" : "en")}>
          <SvgIcon name={user} />
        </div>
      </div>
      <div className="Login_Container">
        <div className="Login_Content">
          <h2 className="Login_Content_H2">{t("Login")}</h2>
          <form action="" className="Login_Content_Form">
            <input
              type="email"
              className="Login_Content_Form_Input"
              placeholder={t("Email")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="Login_Content_Form_Input"
              placeholder={t("Password")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => { if (e.key === "Enter") handleLogin() }}
            />
            <div className="Login_Content_Form_Button" onClick={() => handleLogin()}>{t("Go")}</div>
            {/* <div className="Login_Content_Form_Forget">
              <a href="/">{t("ForgotPassword")}</a>
            </div> */}
          </form>
          {/* <div className="Logo_Container_SocialMedia">
            <div>
              <img src={Google} alt="Logo" /> {t("Google")}
            </div>
          </div> */}
          <p className="Login_Container_Register">{t("NotAccount")}</p>
          <p className="Login_Register_P" onClick={() => history("/SingUp")}>{t("Register")}</p>
        </div>
      </div>
    </React.Fragment>
  );
}
export default connect()(Login);