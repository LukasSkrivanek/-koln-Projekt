import '../App.css';

import { Outlet, Link } from "react-router-dom";

import NewRecipesList from '../routes/newRecipes-list';
import Fab from '@mui/material/Fab';

const Home = () => {
    return (
        <>
            <div> <h1> Home </h1> </div>
            {<NewRecipesList />}
            <div className='fatDiv'></div>
            <div className="addRecipeButton">
                <Fab color="primary" aria-label="add">
                    <span className="plusIcon"> + </span>
                </Fab>
                <Outlet />
            </div>
        </>
    )
};

export default Home;