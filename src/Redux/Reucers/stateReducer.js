const INITIALSTATE = {
    Loading: false,
    navegationOptions:"Home",
    Pokemons:[],
    FavoritesPokemon:[],
};
// eslint-disable-next-line import/no-anonymous-default-export
export default function(state= INITIALSTATE, action) {
    const { type, payload } = action;

    switch(type) {
        case 'SET_LOADING':
            return { ...state, Loading: payload }
        case 'SET_NAVEGATION_OPTIONS':
            return { ...state, navegationOptions: payload }
        case 'SET_POKEMONS':
            return { ...state, Pokemons: payload }
        case 'SET_FAVORITES_POKEMONS':
            return { ...state, FavoritesPokemon: payload }
        default:
            return state
    }
}