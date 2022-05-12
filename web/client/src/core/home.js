import '../App.css';

import { Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Cookies from 'universal-cookie';

import RecipesList from '../routes/recipes-list';
import Fab from '@mui/material/Fab';
import { LayoutContext } from '../context/layoutContext';



let categories = [
    {
        id_ca: 1,
        name: "Snídaně"
    },
    {
        id_ca: 2,
        name: "Obědy"
    },
    {
        id_ca: 3,
        name: "Večeře"
    }
]

const Home = () => {
    const cookies = new Cookies();
    const navigate = useNavigate();
    let { state, changeState } = useContext(LayoutContext);

    const Redirect = (link) => {
        navigate(link)
    }

    return (
        <>{
            <div className='recipe-div'>
                {<RecipesList type={0} />}
                <button type="button" className="btn btn-secondary btn-lg btn-dark" onClick={() => Redirect("#")}> Více nejnovějších receptů </button>
            </div>
            /*
            <div className='recipe-div'>
                {<RecipesList type={1} recipe={recipes} />}
                <button type="button" className="btn btn-secondary btn-lg btn-dark" onClick={() => Redirect("#")}> Více nejoblíbenějších receptů </button>
    </div> */}

            <div className='fatDiv'></div>
            <div className="addRecipeButton">
                <Fab color="primary" aria-label="add" onClick={() => Redirect("recipe/create")}>
                    <span className="plusIcon"> + </span>
                </Fab>
                <Outlet />
            </div>
        </>
    )
};

export default Home;