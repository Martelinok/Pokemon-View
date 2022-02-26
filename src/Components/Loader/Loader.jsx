import React from "react";
/* ---------------------------- Import Components --------------------------- */
import LoderIcon from "../../Assets/Images/Loader.gif";
/* ------------------------------ Import Style ------------------------------ */
import "./Loader.css";
/**
 * This is a componet to show the loader
 * @author [Kevin Martello Mayorga Cleveland]
 * @version 1.0.0
 */
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