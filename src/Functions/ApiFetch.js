import axios from 'axios'

export const FetchPokemons = () => {
  const url = `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0`
  return axios({
    method: 'GET',
    url
  })
}

export const FetchPokemonsInfo = (url) => {
  return axios({
    method: 'GET',
    url
  })
}