import React from "react";
import { connect } from "react-redux";
import { useTranslate } from 'react-translate';

/* ---------------------------- Import Components --------------------------- */
import SvgIcon from "../../Assets/Images/SvgIcon";
/* ------------------------------ Import Styles ----------------------------- */
import "./PokemonCard.css";
/**
 * This is a componet to show the NavBar
 * @author [Kevin Martello Mayorga Cleveland]
 * @version 1.0.0
 * @param  {Object} PokemonInfo - Is the object with the information of the pokemon
 * @param  {Array} FavoritesPokemon - Is the array with the favorites pokemon
 * @param  {Function} dispatch - Is the function to dispatch the action to the reducer

 */
function PokemonCard({ PokemonInfo, FavoritesPokemon, dispatch }) {
  let t = useTranslate("PokemonWidgetCard");
  const setFavorites = (id)=>{
    let data = Array.from(FavoritesPokemon);
    let newData=[]
    if(data.includes(id)){
      data.forEach((item)=>{
        if(item !== id){
          newData.push(item)
        }
      })
      dispatch({ type: "SET_FAVORITES_POKEMONS", payload: newData })

    } else{
      data.push(id)
      dispatch({ type: "SET_FAVORITES_POKEMONS", payload: data })
    }
  }
  return (
    <React.Fragment>
      <div className="PokemonCard_Container" onClick={() => alert("General")}>
        <div className="PokemonCard_Top"></div>
        <div className="PokemonCard_Mid">
          <img
            src={PokemonInfo.image}
            alt="Avatar"
            className="PokemonCard_Image"
          />
          <div className="PokemonCard_Mid_Image" onClick={(e) => {e.stopPropagation(); setFavorites(PokemonInfo.id)}}>
            <SvgIcon
              name="Star"
              fill={FavoritesPokemon.includes(PokemonInfo.id) ? "#FFD700" : "#FFFFFF"}
              stroke="#000000"
            />
          </div>
          <h1 className="PokemonCard_Mid_H1">{`${PokemonInfo.name} ${PokemonInfo.hp} Hp`}</h1>
          <p className="PokemonCard_Mid_P">{`${PokemonInfo.exp} Exp `}</p>
        </div>
        <div className="PokemonCard_Bottom">
          <div className="PokemonCard_Bottom_Info">
            <h3 className="PokemonCard_Bottom_Info_H3">{`${PokemonInfo.ataque}K`}</h3>
            <p className="PokemonCard_Bottom_Info_P">{t("Attack")}</p>
          </div>
          <div className="PokemonCard_Bottom_Info">
            <h3 className="PokemonCard_Bottom_Info_H3">{`${PokemonInfo.defensa}K`}</h3>
            <p className="PokemonCard_Bottom_Info_P">{t("Defending")}</p>
          </div>
          <div className="PokemonCard_Bottom_Info">
            <h3 className="PokemonCard_Bottom_Info_H3">{`${PokemonInfo.especial}K`}</h3>
            <p className="PokemonCard_Bottom_Info_P">{t("Special")}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
const mapStateToProps = (state) => ({
  FavoritesPokemon: state.stateReducer.FavoritesPokemon,

});
export default connect(mapStateToProps)(PokemonCard);