import React,{ useState, useEffect} from "react";
import { connect } from "react-redux";
import { useTranslate } from 'react-translate';
import { GetPokemonData } from "../../Functions/BuildData"
import { Cookies } from 'react-cookie';
/* ---------------------------- Import Components --------------------------- */
import NavBar from "../../Components/NavBar/NavBar";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import InputSearch from "../../Components/InputSearch/InputSearch";
import Modal  from "../../Components/Modal/Modal";
import Loader from "../../Components/Loader/Loader";

/* ------------------------------ Import Style ----------------------------- */
import "./Favorites.css";
/**
 * This is a componet to show the NavBar
 * @author [Kevin Martello Mayorga Cleveland]
 * @version 1.0.0
 * @param  {Function} dispatch - Is the function to dispatch the action to the reducer
 * @param  {Array} FavoritesPokemon - Is the array of the favorites pokemon
 * @param  {Array} Pokemons - Is the array of pokemon
 * @param  {String} InputSearchValue - The value of the input search
 */
function Favorites({ dispatch, FavoritesPokemon, Pokemons, InputSearchValue }) {
  const t = useTranslate("Global");
  let cookies = new Cookies();

  const [modal, setModal] = useState(false);
  const [pokemonId, setPokemonId] = useState(0);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    if (Pokemons.length === 0) {
      FetchPokemonsData()
    }
    dispatch({ type: 'SET_INPUT_SEARCH_VALUE', payload: "" })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const FetchPokemonsData = async () => {
    let data
    try {
      setLoading(true)
      // dispatch({ type: "SET_LOADING", payload: true })
      data = await GetPokemonData()
    } catch (error) {
      console.log("error", error)
    } finally {
      dispatch({ type: "SET_POKEMONS", payload: data })
      dispatch({ type: 'SET_INPUT_SEARCH_VALUE', payload: "" })
      dispatch({ type: 'SET_FAVORITES_POKEMONS', payload: cookies.get("user").favorites })
      // dispatch({ type: "SET_LOADING", payload: false })
      setLoading(false)
    }
  };
  const filterData = (data) => {
    return data.name.toLowerCase().includes(InputSearchValue.toLowerCase())
  }

  if (Loading) {
    return <Loader />;
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