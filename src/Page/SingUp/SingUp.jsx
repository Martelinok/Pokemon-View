import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Components/Context/Auth";
import { connect } from "react-redux";
import { Cookies } from 'react-cookie';
import { useTranslate } from 'react-translate';
import { create, fetch } from "../../Functions/DbService";
import { decrypt } from "../../Functions/Encript"

/* ---------------------------- Import Components --------------------------- */
import Logo from "../../Assets/Images/Pokemon-Logo.png";
import SvgIcon from "../../Assets/Images/SvgIcon";
import Loader from "../../Components/Loader/Loader";
/* ------------------------------ Import Style ------------------------------ */
import "./SingUp.css";
function SingUp({ dispatch }) {

  const { user, setUser } = useAuth();
  const history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setPasswordConfirm] = useState("");
  const [Loading, setLoading] = useState(false);
  let t = useTranslate("SingUp");
  let cookies = new Cookies();


  const changelaanguage = (language) => {
    dispatch({ type: "SET_LANGUAGE", payload: language });
    cookies.remove('language');
    cookies.set('language', language)
    setUser(language)
  }

  const createUser = async () => {
    let response
    // eslint-disable-next-line no-useless-escape
    let validation = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (name.length > 0 && email.length > 0 && validation.test(email) && password.length > 0 && ConfirmPassword.length > 0 && password === ConfirmPassword && email === confirmEmail) {
      try {
        response = await create({ name: name, email: email, password: password, favorites: [] });
      } catch (error) {
        console.log(error);
      } finally {
        if (response) {
          alert(t("RegisterErrorMessage"))
          setName("");
          setEmail("");
          setConfirmEmail("");
          setPassword("");
          setPasswordConfirm("");
        } else {
          setLoading(true);
          setTimeout(() => {
            handleLogin()
          }, 1500);
        }
      }
    } else if (name.length === 0) {
      alert(t("NameRequired"))
    } else if (email.length === 0 || !validation.test(email)) {
      alert(t("EmailRequired"))
    } else if (password !== ConfirmPassword) {
      alert(t("PasswordNotMatch"))
    } else if (email !== confirmEmail) {
      alert(t("EmailNotMatch"))
    }
  };

  const handleLogin = async () => {
    let responseUser
    let validatePassword = false
    try {
      responseUser = await fetch(email);
      console.log("responseUser", responseUser);
      if (responseUser.data.length > 0) {
        validatePassword = await decrypt(password, responseUser.data[0].password)
      }
    } catch (error) {
      console.log(error);
    } finally {
      if (responseUser.data.length > 0 && validatePassword) {
        cookies.set('user', {
          id: responseUser.data[0].id,
          name: responseUser.data[0].name,
          email: responseUser.data[0].email,
          favorites: responseUser.data[0].favorites,
        }, { path: '/' });
        cookies.set('token', true, { path: '/' });
        dispatch({ type: "SET_FAVORITES_POKEMONS", payload: responseUser.data[0].favorites });
        setLoading(false)
        history("/Home");
      } else {
        alert(t("LoginError"))
      }
    }
  };
  if (Loading) {
    return <Loader />;
  }
  return (
    <React.Fragment>
      <div className="SingUp_Header">
        <img src={Logo} alt="Logo" className="SingUp_Header_Image" />
        <div className="SingUp_Language_Image" onClick={() => changelaanguage(user === "en" ? "es" : "en")}>
          <SvgIcon name={user} />
        </div>
      </div>
      <div className="SingUp_Container">
        <div className="SingUp_Content">
          <h2 className="SingUp_Content_H2">{t("SingUp")}</h2>
          <form action="" className="SingUp_Content_Form">
            <input
              type="text"
              className="SingUp_Content_Form_Input"
              placeholder={t("Name")}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="New_Email"
              className="SingUp_Content_Form_Input"
              placeholder={t("Email")}
              value={email}
              onChange={(e) => setEmail(e.target.value.toLocaleLowerCase())}
            />
            <input
              type="email"
              name="New_Email"
              className="SingUp_Content_Form_Input"
              placeholder={t("ConfirmEmail")}
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value.toLocaleLowerCase())}
            />
            <input
              type="password"
              name="New_Password"
              className="SingUp_Content_Form_Input"
              placeholder={t("Password")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              name="New_Password2"
              className="SingUp_Content_Form_Input"
              placeholder={t("ConfirmPassword")}
              value={ConfirmPassword}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              onKeyPress={(e) => { if (e.key === "Enter") createUser() }}
            />
            <div className="SingUp_Content_Form_Button" onClick={() => createUser()}>{t("Register")}</div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
export default connect()(SingUp);