import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { GetPokemonData } from "../../Functions/BuildData"
import { useTranslate } from 'react-translate';
import { Cookies } from 'react-cookie';
/* ---------------------------- Import Componets ---------------------------- */
import NavBar from "../../Components/NavBar/NavBar";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import Loader from "../../Components/Loader/Loader";
import InputSearch from "../../Components/InputSearch/InputSearch";
import Modal from "../../Components/Modal/Modal";
/* ------------------------------ Import Style ------------------------------ */
import "./Home.css";
function Home({ dispatch, Loading, Pokemons, InputSearchValue }) {
  const t = useTranslate("Global");
  let cookies = new Cookies();
  const [modal, setModal] = useState(false);
  const [pokemonId, setPokemonId] = useState(0);
  useEffect(() => {
    FetchPokemonsData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const FetchPokemonsData = async () => {
    let data
    try {
      dispatch({ type: "SET_LOADING", payload: true })
      data = await GetPokemonData()
    } catch (error) {
      console.log("error", error)
    } finally {
      dispatch({ type: "SET_POKEMONS", payload: data })
      dispatch({ type: 'SET_INPUT_SEARCH_VALUE', payload: "" })
      dispatch({ type: 'SET_FAVORITES_POKEMONS', payload: cookies.get("user").favorites })
      dispatch({ type: "SET_LOADING", payload: false })
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
      <div className="Home_Container">
        <div className="Home_Content">
          <div className="Home_Input_Content">
            <div className="Home_Input_Style">
              <InputSearch
                placeholder={t("SearchPokemon")}
                value={InputSearchValue}
                setValue={(e) => dispatch({ type: 'SET_INPUT_SEARCH_VALUE', payload: e })}
                disabled={false}
              />
            </div>
          </div>
          <div className="Home_PokemonCard_Content">
            {Pokemons.length > 0 &&
              Pokemons.filter(data => filterData(data)).length > 0 ?
              Pokemons.filter(data => filterData(data)).map((Pokemon) => {
                return <PokemonCard PokemonInfo={Pokemon} key={Pokemon.id} setId={(e)=> {setPokemonId(e);setModal(true)}}/>
              })
              :
              <div className="Home_PokemonCard_Empty">
                <h1 className="Home_PokemonCard_Empty_Text">{t("NoFound")}</h1>
              </div>
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  );

}
const mapStateToProps = (state) => ({
  Loading: state.stateReducer.Loading,
  Pokemons: state.stateReducer.Pokemons,
  InputSearchValue: state.stateReducer.InputSearchValue,

});
export default connect(mapStateToProps)(Home);