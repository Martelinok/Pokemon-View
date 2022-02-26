import React from "react";
import { useTranslate } from 'react-translate';
/* ---------------------------- import Components --------------------------- */
import SvgIcon from "../../Assets/Images/SvgIcon";
/* ------------------------------ Import Style ------------------------------ */
import "./Modal.css";
/**
 * This is a modal component
 * @author [Kevin Martello Mayorga Cleveland]
 * @version 1.0.0
 */
function Modal({ data, setModal }) {
  let t = useTranslate("Modal");

  return (
    <React.Fragment>
      <div className="Modal_Container" onClick={() =>setModal(false)}>
        <div className="Modal_Content">
          <div className="Modal_Header">
            <div className="Modal_Header_Image" onClick={() =>setModal(false)}>
              <SvgIcon name="Close" fill="#011837" />
            </div>
          </div>
          <div className="Modal_Mid">
            <div className="Modal_Mid_Image_Content">
              <div className="Modal_Mid_Image_Left">
                <img
                  src={data.imageBack}
                  alt=""
                  className="Modal_Mid_Image"
                />
              </div>
              <div className="Modal_Mid_Image_Center">
                <img
                  src={data.image2}
                  alt=""
                  className="Modal_Mid_Image"
                />
              </div>
              <div className="Modal_Mid_Image_Right">
                <img
                  src={data.imageFont}
                  alt=""
                  className="Modal_Mid_Image"
                />
              </div>
            </div>
            <div className="Modal_Mid_Name">
              <h1 className="Modal_Mid_Name_H1">{data.name}</h1>
              <p className="Modal_Mid_Name_P">{`58 Hp`}</p>
            </div>
            <div className="Modal_Mid_Specs">
              <div className="Modal_Mid_Specs_Group">
                <div className="Modal_Mid_Specs_Content">
                  <h1 className="Modal_Mid_Specs_Content_H1">{`${data.ataque} k`}</h1>
                  <p className="Modal_Mid_Specs_Content_p">{t("Attack")}</p>
                </div>
                <div className="Modal_Mid_Specs_Content">
                  <h1 className="Modal_Mid_Specs_Content_H1">{`${data.defensa} k`}</h1>
                  <p className="Modal_Mid_Specs_Content_p">{t("Defending")}</p>
                </div>
                <div className="Modal_Mid_Specs_Content">
                  <h1 className="Modal_Mid_Specs_Content_H1">{`${data.especial} k`}</h1>
                  <p className="Modal_Mid_Specs_Content_p">{t("EspecialAttack")}</p>
                </div>
              </div>
              <div className="Modal_Mid_Specs_Group">
                <div className="Modal_Mid_Specs_Content">
                  <h1 className="Modal_Mid_Specs_Content_H1">{`${data.specialDefense} k`}</h1>
                  <p className="Modal_Mid_Specs_Content_p">{t("SpecialDefending")}</p>
                </div>
                <div className="Modal_Mid_Specs_Content">
                  <h1 className="Modal_Mid_Specs_Content_H1">{`${data.speed} k`}</h1>
                  <p className="Modal_Mid_Specs_Content_p">{t("Speed")}</p>
                </div>
                <div className="Modal_Mid_Specs_Content">
                  <h1 className="Modal_Mid_Specs_Content_H1">{`${data.weight} k`}</h1>
                  <p className="Modal_Mid_Specs_Content_p">{t("Weight")}</p>
                </div>
              </div>
            </div>
            <div className="Modal_Mid_Exp">
              <p className="Modal_Mid_Exp_P">{t("Exp")}</p>
              <h1 className="Modal_Mid_Exp_H1">{`${data.exp} k`}</h1>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Modal;
