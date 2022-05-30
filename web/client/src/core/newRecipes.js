import '../App.css';
import Axios from 'axios';

import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { create } from '@mui/material/styles/createTransitions';

// Bricks
import RecipeCard from '../bricks/recipe-card';

// Ikony
import Fab from '@mui/material/Fab';

let recipes = "";

const NewRecipes = () => {
    const navigate = useNavigate();

    const [render, setRender] = useState(false);

    useEffect(() => {
        getData();
    }, [])

    const Redirect = (link) => {
        navigate(link)
    }

    async function getData() {
        let response = await Axios.get("http://localhost:4000/recipes/list");
        recipes = response.data;

        setRender(true);
    }

    return (
        <>
        <div className='new-line'></div>
            <h1 className='web-title-h1'> Nejnovější recepty </h1>

            <div className="addRecipeButton">
                <Fab color="primary" aria-label="add" onClick={() => Redirect("../create")}>
                    <span className="plusIcon"> + </span>
                </Fab>
                <Outlet />
            </div>

            {render ? recipes.map((x, i) => {
                return (
                    <div>
                        {i % 3 == 0 ?
                            <div className="recipeList" >
                                <div className="card-group">
                                    {i < recipes.length ? <RecipeCard key={i + x} recipe={i} /> : <div className="card"></div>}
                                    {i + 1 < recipes.length ? <RecipeCard key={i + x} recipe={i + 1} /> : <div className="card"></div>}
                                    {i + 2 < recipes.length ? <RecipeCard key={i + x} recipe={i + 2} /> : <div className="card"></div>}
                                </div>
                            </div>
                            :
                            <div></div>
                        }
                    </div>
                );
            }) :
                <a> <b> LOADING </b> </a>}
            <Outlet />
        </>
    )
};

export default NewRecipes;