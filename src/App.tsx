import React from 'react';
import Home from './components/home'
import "./index.css";
import {Route, Routes} from 'react-router-dom';
import PrivateRoute from "./utils/router/privateRoute";
import AuthRootComponent from "./components/auth";
import {useMode, ColorModeContext} from "./theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import LayoutComponent from "./components/layout";
import Lxc from "./components/lxc";

function App() {
  return (
              <LayoutComponent>
              <div className="App">
                  <Routes>
                      <Route element={<PrivateRoute/>}>
                          <Route path='/' element={<Home/>}/>
                          <Route path='/lxc' element={<Lxc/>}/>
                      </Route>
                      <Route path='login' element={<AuthRootComponent/>}/>
                  </Routes>
              </div>
          </LayoutComponent>
  );
}

export default App;
