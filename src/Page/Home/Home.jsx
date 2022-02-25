import React from "react";
/* ---------------------------- Import Componets ---------------------------- */
import NavBar from "../../Components/NavBar/NavBar";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
/* ------------------------------ Import Style ------------------------------ */
import "./Home.css";
function Home(params) {
  return (
    <React.Fragment>
      <NavBar/>
      <div className="Home_Container">
        <div className="Home_Content">
          <div className="Home_PokemonCard_Content">
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );

}
export default Home;