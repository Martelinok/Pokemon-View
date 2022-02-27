import React, { useState } from "react";
import { Provider } from "react-redux";
import { TranslatorProvider } from "react-translate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import configureStore from './Redux/Store/Store';
import { Cookies } from "react-cookie";
import { AuthContext } from "./Components/Context/Auth";
import PrivateRoute from "./Components/Context/PrivateRoute";
import PublicRoute from "./Components/Context/PublicRoute";
/* ------------------------------- Import Page ------------------------------ */
import Home from "./Page/Home/Home"
import Favorites from "./Page/Favorites/Favorites";
import Profile from "./Page/Profile/Profile";
import Login from "./Page/Login/Login";
import SingUp from "./Page/SingUp/SingUp";

const store = configureStore();

function App() {
  const cookies = new Cookies();
  const [user, setUser] = useState(cookies.get("language") || "en");
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
              <Route exact path='/' element={<PublicRoute />}>
                <Route exact path='/' element={<Login />} />
              </Route> <Route exact path='/SingUp' element={<PublicRoute />}>
                <Route exact path='/SingUp' element={<SingUp />} />
              </Route>
              <Route exact path='/Home' element={<PrivateRoute />}>
                <Route exact path='/Home' element={<Home />} />
              </Route>
              <Route exact path='/Favorites' element={<PrivateRoute />}>
                <Route exact path='/Favorites' element={<Favorites />} />
              </Route>
              <Route exact path='/Profile' element={<PrivateRoute />}>
                <Route exact path='/Profile' element={<Profile />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TranslatorProvider>
      </AuthContext.Provider>
    </Provider>
  );
}

export default App
