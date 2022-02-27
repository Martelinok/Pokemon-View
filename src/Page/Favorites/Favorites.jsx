import React,{ useState, useEffect} from "react";
import { connect } from "react-redux";
import { useTranslate } from 'react-translate';

/* ---------------------------- Import Components --------------------------- */
import NavBar from "../../Components/NavBar/NavBar";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import InputSearch from "../../Components/InputSearch/InputSearch";
import Modal  from "../../Components/Modal/Modal";

/* ------------------------------ Import Style ----------------------------- */
import "./Favorites.css";
function Favorites({ dispatch, FavoritesPokemon, Pokemons, InputSearchValue }) {
  const t = useTranslate("Global");
  const [modal, setModal] = useState(false);
  const [pokemonId, setPokemonId] = useState(0);
  useEffect(() => {
    dispatch({ type: 'SET_INPUT_SEARCH_VALUE', payload: "" })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const filterData = (data) => {
    return data.name.toLowerCase().includes(InputSearchValue.toLowerCase())
  }

  return (
    <React.Fragment>
      <NavBar />
      { modal &&
        <Modal data ={Pokemons.filter(item=> item.id === pokemonId)[0]}
        setModal={setModal}
        />
      }
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
                    <PokemonCard PokemonInfo={Pokemon} key={Pokemon.id} setId={(e)=> {setPokemonId(e);setModal(true)}} />
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
  Pokemons: state.stateReducer.Pokemons,
  FavoritesPokemon: state.stateReducer.FavoritesPokemon,
  InputSearchValue: state.stateReducer.InputSearchValue,

});
export default connect(mapStateToProps)(Favorites);