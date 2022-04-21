import '../App.css';

import { Outlet } from "react-router-dom";
import { useContext } from "react";
import Cookies from 'universal-cookie';

import NewRecipesList from '../routes/newRecipes-list';
import Fab from '@mui/material/Fab';
//import layoutContext from '../context/layoutContext';


const Home = () => {
    const cookies = new Cookies();
    //const {location, setLocation} = useContext(layoutContext);

    const Fun = () => {
        cookies.set('login', 1, { path: '/' });
        console.log(cookies.get('login'))
        //location.forceUpdate();
    }
    return (
        <>
            <div> <h1> Home </h1> </div>
            {<NewRecipesList />}
            <div className='fatDiv'></div>
            <div className="addRecipeButton">
                {cookies.get('login') > 0 ? <Fab color="primary" aria-label="add" onClick={Fun}>
                    <span className="plusIcon"> + </span>
                </Fab> : <a></a>}
                <Outlet />
            </div>
        </>
    )
};

export default Home;