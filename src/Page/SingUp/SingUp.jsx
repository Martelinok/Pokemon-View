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
import "./SingUp.css";
function SingUp({ dispatch }) {
  const { user, setUser } = useAuth();
  const history = useNavigate();
  let t = useTranslate("SingUp");
  let cookies = new Cookies();
  const changelaanguage = (language) => {
    dispatch({ type: "SET_LANGUAGE", payload: language });
    cookies.remove('language');
    cookies.set('language', language)
    setUser(language)
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
            <input type="text" className="SingUp_Content_Form_Input" placeholder={t("Name")} />
            <input type="email" className="SingUp_Content_Form_Input" placeholder={t("Email")} />
            <input type="text" className="SingUp_Content_Form_Input" placeholder={t("Password")} />
            <button className="SingUp_Content_Form_Button" onClick={() => history("/")}>{t("Register")}</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
export default connect()(SingUp);