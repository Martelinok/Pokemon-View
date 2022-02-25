import { createStore } from "redux";
import rootReducer from '../Reucers/rootReducers';
import { loadState, saveState } from "../localStorage/localStorage";
import { throttle } from "lodash";
import { composeWithDevTools } from "redux-devtools-extension";


const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(rootReducer, persistedState, composeWithDevTools());
  store.subscribe(
    throttle(() => {
      saveState({
        // stateReducer: store.getState().stateReducer,
      });
    }),
    1000
  );
  return store;
};

export default configureStore;
