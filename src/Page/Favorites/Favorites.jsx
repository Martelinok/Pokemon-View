import React from "react";
import { connect } from "react-redux";
import { useTranslate } from 'react-translate';

/* ---------------------------- Import Components --------------------------- */
import NavBar from "../../Components/NavBar/NavBar";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import InputSearch from "../../Components/InputSearch/InputSearch";

/* ------------------------------ Import Style ----------------------------- */
import "./Favorites.css";
function Favorites({ dispatch, FavoritesPokemon, Pokemons, InputSearchValue }) {
  const t = useTranslate("Global");

  const filterData = (data) => {
    return data.name.toLowerCase().includes(InputSearchValue.toLowerCase())
  }

  return (
    <React.Fragment>
      <NavBar />
      <div className="Favorites_Container">
        <div className="Favorites_Content">
          <div className="Favorites_Input_Content">
            <div className="Favorites_Input_Style">
              <InputSearch
                placeholder={t("SearchPokemon")}
                value={InputSearchValue}
                setValue={(e) => dispatch({ type: 'SET_INPUT_SEARCH_VALUE', payload: e })}
                disabled={false}
              />
            </div>
          </div>
          <div className="Favorites_PokemonCard_Content">
            {FavoritesPokemon.length > 0 ?
              Pokemons.filter(item => FavoritesPokemon.includes(item.id) && filterData(item)).length > 0 ?
                Pokemons.filter(item => FavoritesPokemon.includes(item.id) && filterData(item)).map((Pokemon) => {
                  return (
                    <PokemonCard PokemonInfo={Pokemon} key={Pokemon.id} />
                  )
                }
                )
                :
                <div className="Favorites_PokemonCard_Empty">
                  <h1 className="Favorites_PokemonCard_Empty_Text">{t("NoFound")}</h1>
                </div>
              :
              <div className="Favorites_PokemonCard_Empty">
                <h1 className="Favorites_PokemonCard_Empty_Text">{t("NoFavorites")}</h1>
              </div>
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
const mapStateToProps = (state) => ({
  Loading: state.stateReducer.Loading,
  Pokemons: state.stateReducer.Pokemons,
  FavoritesPokemon: state.stateReducer.FavoritesPokemon,
  InputSearchValue: state.stateReducer.InputSearchValue,

});
export default connect(mapStateToProps)(Favorites);