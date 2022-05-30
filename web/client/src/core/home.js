import '../App.css';

import { Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Cookies from 'universal-cookie';

import RecipesList from '../routes/recipes-list';
import Fab from '@mui/material/Fab';
import { LayoutContext } from '../context/layoutContext';

const Home = () => {
    const cookies = new Cookies();
    const navigate = useNavigate();
    let { state, changeState } = useContext(LayoutContext);

    const Redirect = (link) => {
        navigate(link)
    }

    return (
        <>
            <div className='new-line'></div>
            
            <div className='recipe-div'>
                {<RecipesList type={0}/>}
                <button type="button" className="btn btn-secondary btn-lg btn-dark" onClick={() => Redirect("recipe/new")}> Více nejnovějších receptů </button>
            </div>
            
            <div className='recipe-div'>
                {<RecipesList type={1} />}
                <button type="button" className="btn btn-secondary btn-lg btn-dark" onClick={() => Redirect("#")}> Více nejoblíbenějších receptů </button>
            </div>
    
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