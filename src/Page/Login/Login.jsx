import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Components/Context/Auth";
import { connect } from "react-redux";
import { Cookies } from 'react-cookie';
import { useTranslate } from 'react-translate';
/* ---------------------------- Import Components --------------------------- */
import Logo from "../../Assets/Images/Pokemon-Logo.png";
import Google from "../../Assets/Images/google-icon.png";
import SvgIcon from "../../Assets/Images/SvgIcon";
/* ------------------------------ Import Style ------------------------------ */
import "./Login.css";
function Login({ dispatch }) {
  const { user, setUser } = useAuth();
  const history = useNavigate();
  let t = useTranslate("Login");
  let cookies = new Cookies();
  const changelaanguage = (language) => {
    dispatch({ type: "SET_LANGUAGE", payload: language });
    cookies.remove('language');
    cookies.set('language', language)
    setUser(language)
  }
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
            <input type="text" className="Login_Content_Form_Input" placeholder={t("Email")} />
            <input type="text" className="Login_Content_Form_Input" placeholder={t("Password")} />
            <button className="Login_Content_Form_Button" onClick={() => history("/Home")}>{t("Go")}</button>
            {/* <div className="Login_Content_Form_Forget">
              <a href="/">{t("ForgotPassword")}</a>
            </div> */}
          </form>
          <div className="Logo_Container_SocialMedia">
            <div>
              <img src={Google} alt="Logo" /> {t("Google")}
            </div>
          </div>
          <p className="Login_Container_Register">{t("NotAccount")}<a href="/SingUp">{t("Register")}</a></p>
        </div>
      </div>
    </React.Fragment>
  );
}
export default connect()(Login);