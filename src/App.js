import React,{useState} from "react";
import { Provider } from "react-redux";
import { TranslatorProvider } from "react-translate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import configureStore from './Redux/Store/Store';
import { Cookies } from "react-cookie";
import { AuthContext } from "./Components/Context/Auth";

/* ------------------------------- Import Page ------------------------------ */
import Home from "./Page/Home/Home"
function App() {
  const cookies = new Cookies();
  const [user, setUser] = useState(cookies.get("language") || "en");
  console.log(user);
  const store = configureStore();
  return (
    <Provider store={store}>
      <AuthContext.Provider
        value={{ user, setUser }}
      >
        <TranslatorProvider
          translations={require(`./Assets/Language/${user}.json`)}
        >
          <BrowserRouter>
            <Routes>
              <Route
                exact path="/"
                element={<Home />}
              />
            </Routes>
          </BrowserRouter>
        </TranslatorProvider>
      </AuthContext.Provider>
    </Provider>
  );
}

export default App
