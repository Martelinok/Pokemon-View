import React from "react";
/* ---------------------------- Import Components --------------------------- */
/* ------------------------------ Import Styles ----------------------------- */
import "./PokemonCard.css";
function PokemonCard({ params }) {
	return (
		<React.Fragment>
			<div className="PokemonCard_Container">
				<div className="PokemonCard_Top"></div>
				<div className="PokemonCard_Mid">
					<img
						src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
						alt="Avatar"
						className="PokemonCard_Image"
					/>
					<h1 className="PokemonCard_Mid_H1">Name 20hp</h1>
					<p className="PokemonCard_Mid_P">20 exp</p>
				</div>
				<div className="PokemonCard_Bottom">
					<div className="PokemonCard_Bottom_Info">
						<h3 className="PokemonCard_Bottom_Info_H3">56K</h3>
						<p className="PokemonCard_Bottom_Info_P">Ataque</p>
					</div>
					<div className="PokemonCard_Bottom_Info">
						<h3 className="PokemonCard_Bottom_Info_H3">56K</h3>
						<p className="PokemonCard_Bottom_Info_P">Ataque</p>
					</div>
					<div className="PokemonCard_Bottom_Info">
						<h3 className="PokemonCard_Bottom_Info_H3">56K</h3>
						<p className="PokemonCard_Bottom_Info_P">Ataque</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}
export default PokemonCard;