const INITIALSTATE = {
    Language: 'en',
    loader: false,
    navegationOptions:"Home"
};
// eslint-disable-next-line import/no-anonymous-default-export
export default function(state= INITIALSTATE, action) {
    const { type, payload } = action;

    switch(type) {
        case 'SET_LANGUAGE':
            return { ...state, Language: payload }
        case 'SET_LOADER':
            return { ...state, loader: payload }
        case 'SET_NAVEGATION_OPTIONS':
            return { ...state, navegationOptions: payload }
        case 'RESET_STATE_REDUCER':
            return INITIALSTATE
        default:
            return state
    }
}