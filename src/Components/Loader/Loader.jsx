import React from "react";
/* ---------------------------- Import Components --------------------------- */
import LoderIcon from "../../Assets/Images/Loader.gif";
/* ------------------------------ Import Style ------------------------------ */
import "./Loader.css";
function Loader({ params }) {
  return (
    <React.Fragment>
      <div className="Loader_Container">
        <div className="Loader_Image_Content">
          <img src={LoderIcon} alt="Loader" className="Loader_Image" />
        </div>
      </div>
    </React.Fragment>
  )
}
export default Loader;