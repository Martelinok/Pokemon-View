import React, { useState } from "react";
import { connect } from "react-redux";
import { Cookies } from 'react-cookie';
import { useAuth } from "../Context/Auth";
import { useTranslate } from 'react-translate';
/* ---------------------------- Import Componetns --------------------------- */
import SvgIcon from "../../Assets/Images/SvgIcon";
import Logo from "../../Assets/Images/Pokemon-Logo.png";
/* ------------------------------ Import Styles ----------------------------- */
import "./NavBar.css";

function NavBar({ image, Home, Favorites, Profile, dispatch }) {
  const [navigation, setNavigation] = useState('Home');
  const [sideBar, setSideBar] = useState(false);
  const {user, setUser} = useAuth();
  let t = useTranslate("NavBar");
  let cookies = new Cookies();

  const onClickOption = (option) => {
    setNavigation(option);
    dispatch({ type: "SET_NAVEGATION_OPTIONS", payload: option });
    setSideBar(false);
  }
  const changelaanguage = (language) => {
    dispatch({ type: "SET_LANGUAGE", payload: language });
    cookies.remove('user')
    cookies.set('language', language)
    setUser(language)
  }
  return (
    <React.Fragment>
      <div className="NavBar_Container">
        <div className="NavBar_Content">
          <div className={`SideNavbar_Content ${sideBar}`}>
            <div className="SideNavbar_Menu" onClick={() => setSideBar(false)}>
              <SvgIcon name="BackArrow" fill='#FFCB05' />
            </div>
            <div className="SideNavbar_Options">
              <p className={`SideNavbar_Options_Text ${navigation === "Home" ? true : false}`} onClick={() => onClickOption('Home')}>{t("Home")}</p>
              <p className={`SideNavbar_Options_Text ${navigation === "AboutMe" ? true : false}`} onClick={() => onClickOption('AboutMe')}>{t("Favorites")}</p>
              <p className={`SideNavbar_Options_Text ${navigation === "Contact" ? true : false}`} onClick={() => onClickOption('Contact')}>{t("Profile")}</p>
            </div>
          </div>
          <div className={`SideNavbar_Skin ${sideBar}`} onClick={() => setSideBar(false)}></div>
          <div className="NavBar_Menu_Content">
            <div className={`NavBar_Menu_Image ${sideBar}`} onClick={() => setSideBar(!sideBar)}>
              <SvgIcon name="Menu" fill='#FFCB05' />
            </div>
          </div>
          <div className="NavBar_Logo_Content">
            <img className="NavBar_Logo_Image" src={Logo} alt="Logo"/>
          </div>
          <div className="Navbar_Options_Content">
            <p className={`NavBar_Options_Text ${navigation === "Home" ? true : false}`} onClick={() => onClickOption('Home')}>{t("Home")}</p>
            <p className={`NavBar_Options_Text ${navigation === "AboutMe" ? true : false}`} onClick={() => onClickOption('AboutMe')}>{t("Favorites")}</p>
            <p className={`NavBar_Options_Text ${navigation === "Contact" ? true : false}`} onClick={() => onClickOption('Contact')}>{t("Profile")}</p>
          </div>
          <div className="NavBar_Language_Content">
            <div className="NavBar_Language_Image" onClick={() => changelaanguage(user === "en" ? "es" : "en")}>
              <SvgIcon name={user} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
const mapStateToProps = (state) => ({
  Language: state.stateReducer.Language,
});
export default connect(mapStateToProps)(NavBar);