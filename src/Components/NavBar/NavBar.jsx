import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Cookies } from 'react-cookie';
import { useAuth } from "../Context/Auth";
import { useTranslate } from 'react-translate';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
/* ---------------------------- Import Componetns --------------------------- */
import SvgIcon from "../../Assets/Images/SvgIcon";
import Logo from "../../Assets/Images/Pokemon-Logo.png";
/* ------------------------------ Import Styles ----------------------------- */
import "./NavBar.css";
/**
 * This is a componet to show the NavBar
 * @author [Kevin Martello Mayorga Cleveland]
 * @version 1.0.0
 * @param  {Function} dispatch - Is the function to dispatch the action to the reducer
 * @param  {String} navegationOptions The value of the navegationOptions
 */
function NavBar({ dispatch, navegationOptions }) {
  const [sideBar, setSideBar] = useState(false);
  const { user, setUser } = useAuth();
  const history = useNavigate();
  const location = useLocation();
  let t = useTranslate("NavBar");
  let cookies = new Cookies();

  useEffect(() => {
    dispatch({ type: "SET_NAVEGATION_OPTIONS", payload: location.pathname.split("/")[1]});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickOption = (option) => {
    dispatch({ type: "SET_NAVEGATION_OPTIONS", payload: option });
    setSideBar(false);
    history(`/${option}`);
  };

  const changelaanguage = (language) => {
    cookies.remove('language');
    cookies.set('language', language)
    setUser(language)
  };

  return (
    <React.Fragment>
      <div className="NavBar_Container">
        <div className="NavBar_Content">
          <div className={`SideNavbar_Content ${sideBar}`}>
            <div className="SideNavbar_Menu" onClick={() => setSideBar(false)}>
              <SvgIcon name="BackArrow" fill='#FFCB05' />
            </div>
            <div className="SideNavbar_Options">
              <p className={`SideNavbar_Options_Text ${navegationOptions === "Home" ? true : false}`} onClick={() => onClickOption('Home')}>{t("Home")}</p>
              <p className={`SideNavbar_Options_Text ${navegationOptions === "Favorites" ? true : false}`} onClick={() => onClickOption('Favorites')}>{t("Favorites")}</p>
              <p className={`SideNavbar_Options_Text ${navegationOptions === "Profile" ? true : false}`} onClick={() => onClickOption('Profile')}>{t("Profile")}</p>
            </div>
          </div>
          <div className={`SideNavbar_Skin ${sideBar}`} onClick={() => setSideBar(false)}></div>
          <div className="NavBar_Menu_Content">
            <div className={`NavBar_Menu_Image ${sideBar}`} onClick={() => setSideBar(!sideBar)}>
              <SvgIcon name="Menu" fill='#FFCB05' />
            </div>
          </div>
          <div className="NavBar_Logo_Content">
            <img className="NavBar_Logo_Image" src={Logo} alt="Logo" />
          </div>
          <div className="Navbar_Options_Content">
            <p className={`NavBar_Options_Text ${navegationOptions === "Home" ? true : false}`} onClick={() => onClickOption('Home')}>{t("Home")}</p>
            <p className={`NavBar_Options_Text ${navegationOptions === "Favorites" ? true : false}`} onClick={() => onClickOption('Favorites')}>{t("Favorites")}</p>
            <p className={`NavBar_Options_Text ${navegationOptions === "Profile" ? true : false}`} onClick={() => onClickOption('Profile')}>{t("Profile")}</p>
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
  navegationOptions: state.stateReducer.navegationOptions,
});
export default connect(mapStateToProps)(NavBar);