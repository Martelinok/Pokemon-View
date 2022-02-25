import React, { useState, useEffect } from "react";
import { FetchPokemonsInfo } from "../../Functions/ApiFetch"
import { useTranslate } from 'react-translate';

/* ---------------------------- Import Components --------------------------- */
// import PokeBall from "../../Assets/Images/PokeBall.gif"
/* ------------------------------ Import Styles ----------------------------- */
import "./PokemonCard.css";
function PokemonCard({ PokemonInfo }) {
  let t = useTranslate("PokemonWidgetCard");
  const [PokemonData, setPokemonData] = useState({});
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    FetchPokemonData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const FetchPokemonData = async () => {
    setLoading(true)
    let info
    try {
      info = await FetchPokemonsInfo(PokemonInfo.url)
    } catch (error) {

    } finally {
      setPokemonData({
        name: info.name,
        image: info.data.sprites.other.dream_world.front_default,
        hp: info.data.stats[0].base_stat,
        exp: info.data.base_experience,
        ataque: info.data.stats[1].base_stat,
        defensa: info.data.stats[2].base_stat,
        especial: info.data.stats[3].base_stat,
      })
      setLoading(false)
    }
  }
  if (Loading) {
    return(null)
  }
  return (
    <React.Fragment>
      <div className="PokemonCard_Container">
        <div className="PokemonCard_Top"></div>
        <div className="PokemonCard_Mid">
          <img
            src={ PokemonData.image }
            alt="Avatar"
            className="PokemonCard_Image"
          />
          <h1 className="PokemonCard_Mid_H1">{`${PokemonInfo.name} ${PokemonData.hp} Hp`}</h1>
          <p className="PokemonCard_Mid_P">{`${PokemonData.exp} Exp `}</p>
        </div>
        <div className="PokemonCard_Bottom">
          <div className="PokemonCard_Bottom_Info">
            <h3 className="PokemonCard_Bottom_Info_H3">{`${PokemonData.ataque}K`}</h3>
            <p className="PokemonCard_Bottom_Info_P">{t("Attack")}</p>
          </div>
          <div className="PokemonCard_Bottom_Info">
            <h3 className="PokemonCard_Bottom_Info_H3">{`${PokemonData.defensa}K`}</h3>
            <p className="PokemonCard_Bottom_Info_P">{t("Defending")}</p>
          </div>
          <div className="PokemonCard_Bottom_Info">
            <h3 className="PokemonCard_Bottom_Info_H3">{`${PokemonData.especial}K`}</h3>
            <p className="PokemonCard_Bottom_Info_P">{t("Special")}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default PokemonCard;