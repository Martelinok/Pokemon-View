import React,{useState} from "react";
import { useTranslate } from 'react-translate';
import { Cookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import { update } from "../../Functions/DbService";
/* ---------------------------- Import Components --------------------------- */
import NavBar from "../../Components/NavBar/NavBar";
/* ------------------------------ Import Style ----------------------------- */
import "./Profile.css";
/**
 * This is a componet to show the NavBar
 * @author [Kevin Martello Mayorga Cleveland]
 * @version 1.0.0
 */
function Profile({params}) {
  const t = useTranslate("Profile");
  let cookies = new Cookies();
  const history = useNavigate();
  const [name, setName] = useState(cookies.get('user').name);
  const [email, setEmail] = useState(cookies.get('user').email);
  // const [password, setPassword] = useState(cookies.get('user').password);

  const handleLogOut = () => {
    cookies.remove('user');
    cookies.remove('token');
    history('/');
  }

  const updateName = async () => {
    console.log('Se ejecuto updateName');
    try {
      await update(cookies.get('user').id, {name: name });
    } catch (error) {
      console.log("error", error);
    }finally{
      let user = cookies.get('user');
      cookies.set('user',{
        ...user, name: name
      })
    }
  }
  const updateEmail = async () => {
    console.log('Se ejecuto updateName');
    try {
      await update(cookies.get('user').id, {email: email });
    } catch (error) {
      console.log("error", error);
    }finally{
      let user = cookies.get('user');
      cookies.set('user',{
        ...user, email: email
      })
    }
  }

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
              <input 
              className="Profile_Input_Content_Input" 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={()=> updateName()}
              />
            </div>
            <div className="Profile_Input_Content">
              <p className="Profile_Input_Content_P" >{t("Email")}</p>
              <input className="Profile_Input_Content_Input" 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={()=> updateEmail()}
              />
            </div>
            {/* <div className="Profile_Input_Content">
              <p className="Profile_Input_Content_P">{t("Password")}</p>
              <input 
              className="Profile_Input_Content_Input" 
              type="text" 
              value={password}
              />
            </div> */}
          </div>
          <div className="Profile_Button_Conent">
            <button className="Profile_Button_Conent_Button" onClick={() => handleLogOut()}>{t("Logout")}</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Profile;