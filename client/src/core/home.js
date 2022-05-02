import '../App.css';

import { Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Cookies from 'universal-cookie';

import RecipesList from '../routes/recipes-list';
import Fab from '@mui/material/Fab';
import { LayoutContext } from '../context/layoutContext';

let recipes = [
    {
        id_re: 1,
        title: "Recept 1",
        description: "Tohle je recept 1",
        process: "Prostě musíte ten recept uvařit",
        image: "https://wallpapersmug.com/download/1920x1080/ddcbbf/food-pizza-baking.jpg",
        portions: 2,
        estimatedTime: 15,
        estimatedPrice: 300,
        createdAt: "2022-05-01 21:01:45",
        category: 1,
        author: 1
    },
    {
        id_re: 2,
        title: "Recept 2",
        description: "Tohle je recept 2",
        process: "Prostě musíte ten recept uvařit",
        image: "",
        portions: 2,
        estimatedTime: 30,
        estimatedPrice: 900,
        createdAt: "2022-05-10 21:01:45",
        category: 3,
        author: 2
    }
]

let users = [
    {
        id_u: 1,
        username: "ond",
        email: "ondrakoritak@seznam.cz",
        firstName: "Ondřej",
        lastName: "Koriťák",
        password: "123",
        createdAt: "2022-04-21 10:53:19",
        role: 4
    },
    {
        id_u: 2,
        username: "awd",
        email: "ondrakoritak@seznam.cz",
        firstName: "Ond",
        lastName: "MN",
        password: "123",
        createdAt: "2022-04-21 10:53:19",
        role: 1
    },
    {
        id_u: 3,
        username: "dede",
        email: "ondrakoritak@seznam.cz",
        firstName: "Matěj",
        lastName: "Novotný",
        password: "123",
        createdAt: "2022-04-21 10:53:19",
        role: 2
    }
]

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

    const Fun = () => {
        cookies.set('login', 1, { path: '/' });
        console.log(state)

        state++;
        console.log(state)
    }

    return (
        <>
            <div> <h1> Home </h1> </div>

            <div className='recipe-div'>
                {<RecipesList type={0} recipe={recipes} user={users} category={categories} />}
                <button type="button" className="btn btn-secondary btn-lg btn-dark" onClick={() => Redirect("#")}> Více nejnovějších receptů </button>
            </div>

            <div className='recipe-div'>
                {<RecipesList type={1} recipe={recipes} user={users} category={categories} />}
                <button type="button" className="btn btn-secondary btn-lg btn-dark" onClick={() => Redirect("#")}> Více nejoblíbenějších receptů </button>
            </div>

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