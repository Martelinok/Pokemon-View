import React from "react";
/* ---------------------------- Import Componets ---------------------------- */
import NavBar from "../../Components/NavBar/NavBar";
/* ------------------------------ Import Style ------------------------------ */
import "./Home.css";
function Home(params) {
  return (
    <React.Fragment>
      <NavBar/>
      <div className="Home_Container">
        <div className="Home_Content">
        </div>
      </div>
    </React.Fragment>
  );

}
export default Home;