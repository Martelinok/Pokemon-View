import { FetchPokemons, FetchPokemonsInfo } from "./ApiFetch";

export const GetPokemonData = async () => {
    let pokemons
    let pokemonsInfo
    try {
        pokemons = await FetchPokemons()
        console.log('pokemons', pokemons);
        pokemonsInfo = await Promise.all(pokemons.data.results.map(async (pokemon) => {
            const PokeInfo = await FetchPokemonsInfo(pokemon.url)
            return {
                ...pokemon, 
                info: PokeInfo, 
                id: PokeInfo.data.id,
                image: PokeInfo.data.sprites.other.dream_world.front_default,
                hp: PokeInfo.data.stats[0].base_stat,
                exp: PokeInfo.data.base_experience,
                ataque: PokeInfo.data.stats[1].base_stat,
                defensa: PokeInfo.data.stats[2].base_stat,
                especial: PokeInfo.data.stats[3].base_stat,
            
            }
        }))
        console.log('pokemonsInfo', pokemonsInfo);
    } catch (error) {
        console.log(error)
    } finally {
        return pokemonsInfo
    }
}