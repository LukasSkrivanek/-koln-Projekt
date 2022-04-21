import './App.css';
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cookies from 'universal-cookie';
//import LayoutContext from './context/layoutContext';

import Layout from './core/layout';
import Home from './core/home';
import Register from './core/register';
import LogIn from './core/login';

function App() {
  const cookies = new Cookies();
  const { location, setLocation } = useState(this);

  cookies.set('login', 0, { path: '/' });
  cookies.set('id', '0', { path: '/' });
  cookies.set('username', '', { path: '/' });
  cookies.set('role', 0, { path: '/' });
  /*
  const [recipeList, setRecipeList] = useState();
  
  useEffect(() => {
    fetch('/book/get')
    .then(response => response.json())
    .then(data => setRecipeList(data))
  }, [])*/

  //<LayoutContext.Provider value={{ location, setLocation }}></LayoutContext.Provider>

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="login" element={<LogIn />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
