const INITIALSTATE = {
    Loading: false,
    navegationOptions:"Home",
    Pokemons:[]
};
// eslint-disable-next-line import/no-anonymous-default-export
export default function(state= INITIALSTATE, action) {
    const { type, payload } = action;

    switch(type) {
        case 'SET_LOADING':
            return { ...state, loader: payload }
        case 'SET_NAVEGATION_OPTIONS':
            return { ...state, navegationOptions: payload }
        case 'SET_POKEMONS':
            return { ...state, Pokemons: payload }
        default:
            return state
    }
}