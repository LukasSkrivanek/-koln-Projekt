import './App.css';
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Unregistered_Layout from './core/unreg_layout';
import Home from './core/home';
import Register from './core/register';
import LogIn from './core/login';

function App() {
  /*
  const [recipeList, setRecipeList] = useState();
  
  useEffect(() => {
    fetch('/book/get')
    .then(response => response.json())
    .then(data => setRecipeList(data))
  }, [])*/

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Unregistered_Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />}></Route>
          <Route path="login" element={<LogIn />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
