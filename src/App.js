import React,{useState} from "react";
import { Provider } from "react-redux";
import { TranslatorProvider } from "react-translate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import configureStore from './Redux/Store/Store';
import { Cookies } from "react-cookie";
import { AuthContext } from "./Components/Context/Auth";
/* ------------------------------- Import Page ------------------------------ */
import Home from "./Page/Home/Home"
import Favorites from "./Page/Favorites/Favorites";
import Profile from "./Page/Profile/Profile";
import Login from "./Page/Login/Login";


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
                element={<Login />}
              />
              <Route
                exact path="/Home"
                element={<Home />}
              />
              <Route
                exact path="/favorites"
                element={<Favorites />}
              />
              <Route
                exact path="/profile"
                element={<Profile />}
              />
            </Routes>
          </BrowserRouter>
        </TranslatorProvider>
      </AuthContext.Provider>
    </Provider>
  );
}

export default App
