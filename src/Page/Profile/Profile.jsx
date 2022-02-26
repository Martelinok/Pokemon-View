import React from "react";
import { useTranslate } from 'react-translate';
/* ---------------------------- Import Components --------------------------- */
import NavBar from "../../Components/NavBar/NavBar";
/* ------------------------------ Import Style ----------------------------- */
import "./Profile.css";

function Profile(params) {
  const t = useTranslate("Profile");

  return (
    <React.Fragment>
      <NavBar />
      <div className="Profile_Container">
        <div className="Profile_Content">
          <div className="Profile_Image_Content">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
            alt="" 
            className="Profile_Image_Content_Style" 
            />
          </div>
          <div className="Profile_Input_Container">
            <div className="Profile_Input_Content">
              <p className="Profile_Input_Content_P">{t("Name")}</p>
              <input className="Profile_Input_Content_Input" type="text" placeholder=""/>
            </div>
            <div className="Profile_Input_Content">
              <p className="Profile_Input_Content_P" >{t("Email")}</p>
              <input className="Profile_Input_Content_Input" type="text" placeholder=""/>
            </div>
            <div className="Profile_Input_Content">
              <p className="Profile_Input_Content_P">{t("Password")}</p>
              <input className="Profile_Input_Content_Input" type="text" placeholder=""/>
            </div>
          </div>
          <div className="Profile_Button_Conent">
            <button className="Profile_Button_Conent_Button">{t("Logout")}</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Profile;