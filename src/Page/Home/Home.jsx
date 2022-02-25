import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FetchPokemons } from "../../Functions/ApiFetch"
/* ---------------------------- Import Componets ---------------------------- */
import NavBar from "../../Components/NavBar/NavBar";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import Loader from "../../Components/Loader/Loader";
/* ------------------------------ Import Style ------------------------------ */
import "./Home.css";
function Home({ dispatch, Loading, Pokemons }) {

  useEffect(() => {
    FetchPokemonsData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const FetchPokemonsData = async () => {
    let data
    try {
      dispatch({ type: "SET_LOADING", payload: true })
      data = await FetchPokemons()
    } catch (error) {
      console.log("error", error)
    } finally {
      dispatch({ type: "SET_POKEMONS", payload: data.data.results })
      dispatch({ type: "SET_LOADING", payload: false })
    }
  }
  if (Loading) {
    return <Loader />;
  }

  return (
    <React.Fragment>
      <NavBar />
      <div className="Home_Container">
        <div className="Home_Content">
          <div className="Home_PokemonCard_Content">
            {Pokemons.length > 0  &&
              Pokemons.map((Pokemon, index) => {
                return <PokemonCard PokemonInfo={Pokemon} key={index} />
              })
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

});
export default connect(mapStateToProps)(Home);