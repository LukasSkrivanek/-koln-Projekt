import './App.css';
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cookies from 'universal-cookie';
import { LayoutContext } from './context/layoutContext';

import Layout from './core/layout';
import Home from './core/home';
import Register from './core/register';
import LogIn from './core/login';
import Profile from './core/profile';
import Recipe from './core/recipe';

import NewRecipes from './core/newRecipes';

import CreateRecipe from './core/createRecipe';
import Missing from './core/missing';

function App() {
  const cookies = new Cookies();
  const { state, changeState } = 0;

  cookies.set('login', 1, { path: '/' });
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

  return (
    <BrowserRouter>
      <LayoutContext.Provider value={{ state, changeState }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="login" element={<LogIn />}></Route>
            <Route path="profile" element={<Profile />}></Route>
            <Route path="recipe" element={<Recipe />}></Route>

            <Route path="recipe/">
              <Route index element={<Recipe />} />
              <Route path="create" element={<CreateRecipe />}></Route>
              <Route path="new" element={<NewRecipes />}></Route>
            </Route>

            <Route path="*" element={<Missing />}></Route>
          </Route>
        </Routes>
      </LayoutContext.Provider>
    </BrowserRouter>
  );
}

export default App;
