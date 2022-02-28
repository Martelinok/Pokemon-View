import React, { useState, useEffect, useRef } from "react";
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
/**
 * This is a componet to show the NavBar
 * @author [Kevin Martello Mayorga Cleveland]
 * @version 1.0.0
 * @param  {Function} dispatch - Is the function to dispatch the action to the reducer
 * @param  {Array} Pokemons - Is the array of pokemon
 * @param  {String} InputSearchValue - The value of the input search
 */
function Home({ dispatch, Pokemons, InputSearchValue }) {
  const t = useTranslate("Global");
  let cookies = new Cookies();
  const scrollRef = useRef();

  const [modal, setModal] = useState(false);
  const [pokemonId, setPokemonId] = useState(0);
  const [Loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    FetchPokemonsData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const FetchPokemonsData = async () => {
    let data
    try {
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

  const filterPokemon = () => {
    if (InputSearchValue.length === 0) {
      return Pokemons.slice(currentPage, currentPage + 20)
    } else {
      return Pokemons.filter(item => item.name.toLowerCase().includes(InputSearchValue.toLowerCase()))
    }
  }
  const nextPage = () => {
    if (Pokemons.filter(item => item.name.toLowerCase().includes(InputSearchValue.toLowerCase())).length > currentPage + 20) {
      setCurrentPage(currentPage + 20)
    } else {
    }
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  }
  const backPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 20)
    }
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  }
  const filterData = (data) => {
    return data.name.toLowerCase().includes(InputSearchValue.toLowerCase())
  }
  if (Loading) {
    return <Loader />;
  }

  return (
    <React.Fragment>
      <NavBar />
      {modal &&
        <Modal data={Pokemons.filter(item => item.id === pokemonId)[0]}
          setModal={setModal}
        />
      }
      <div className="Home_Container" ref={scrollRef} >
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
              filterPokemon().map((Pokemon) => {
                return <PokemonCard PokemonInfo={Pokemon} key={Pokemon.id} setId={(e) => { setPokemonId(e); setModal(true) }} />
              })
              :
              <div className="Home_PokemonCard_Empty">
                <h1 className="Home_PokemonCard_Empty_Text">{t("NoFound")}</h1>
              </div>
            }
          </div>
          <div className="Home_Pages_Container">
            <div className="Home_Pages_Content">
              <div className="Home_Pages_Button_Contet">
                <button className={`Home_Pages_Button_Styles ${currentPage === 0 ? true : false}`} onClick={() => backPage()}>{t("Previous")}</button>
              </div>
              <div className="Home_Pages_Button_Contet">
                <button className={`Home_Pages_Button_Styles ${currentPage + 20 >= Pokemons.length ? true : false}`} onClick={() => nextPage()}>{t("Next")}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );

}
const mapStateToProps = (state) => ({
  Pokemons: state.stateReducer.Pokemons,
  InputSearchValue: state.stateReducer.InputSearchValue,

});
export default connect(mapStateToProps)(Home);