import '../App.css';
import Axios from 'axios'

import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

// Obrázky
import Image_not_found from '../img/image_not_found.jpg'
import Food_basic from '../img/food_basic.png'

// Ikony
import { BiTimeFive, BiCookie, BiCategory } from "react-icons/bi";
import { FaMoneyBill, FaUserAlt } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";

let recipe, user, categoryInfo, ingredientsInfo;
let basePortions, basePrice;

const RecipesBody = (props) => {
    const navigate = useNavigate();

    const [title, setTitle] = useState("LOADING");
    const [image, setImage] = useState("LOADING");
    const [description, setDescription] = useState("LOADING");
    const [id_u, setId_u] = useState("LOADING");
    const [firstName, setFirstName] = useState("LOADING");
    const [username, setUsername] = useState("LOADING");
    const [lastName, setLastName] = useState("LOADING");
    const [portions, setPortions] = useState("LOADING");
    const [category, setCategory] = useState("LOADING");
    const [process, setProcess] = useState("LOADING");
    const [estimatedTime, setEstimatedTime] = useState("LOADING");
    const [estimatedPrice, setEstimatedPrice] = useState("LOADING");

    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    function setIng(p) {
        let temp = `<ul class="list-group">`;

        for (let i = 0; i < ingredientsInfo.length; i++) {
            temp = temp + (`<li class="list-group-item"> ${ingredientsInfo[i].ing_name} - ${ingredientsInfo[i].number * (p / basePortions)} ${ingredientsInfo[i].unit_name} </li>`);
        }

        temp = temp + (`</ul>`)

        setEstimatedPrice(basePrice * (p / basePortions));
        setIngredients(temp);
    }

    async function getData() {
        // Recept
        let response = await Axios.get("http://localhost:4000/recipes/get", {
            params: {
                id: props.id
            }
        });

        recipe = response.data[0];

        // Autor
        response = await Axios.get("http://localhost:4000/user/detail", {
            params: {
                id: recipe.author
            }
        });

        user = response.data[0];

        // Kategorie
        response = await Axios.get("http://localhost:4000/categories/get", {
            params: {
                id: recipe.category
            }
        });

        categoryInfo = response.data[0];

        // Ingredience
        response = await Axios.get("http://localhost:4000/ingredients/getOfRecipe", {
            params: {
                id: props.id
            }
        });

        ingredientsInfo = response.data;

        setData();
    }

    function setData() {
        // Recept
        setTitle(recipe.title);
        setImage(recipe.image);
        setDescription(recipe.description);
        setProcess(recipe.process);
        setEstimatedPrice(recipe.estimatedPrice);
        setEstimatedTime(recipe.estimatedTime);
        setPortions(recipe.portions);
        basePortions = recipe.portions;
        basePrice = recipe.estimatedPrice;
        // Autor
        setId_u(user.id_u);
        setFirstName(user.firstName);
        setUsername(user.username);
        setLastName(user.lastName);
        // Kategorie
        setCategory(categoryInfo.name);
        // Ingredience
        setIng(recipe.portions);
    }

    const minusPortion = () => {
        if (portions - 1 > 0) {
            setPortions(portions - 1);
            setIng(portions - 1);
        }
    }

    const plusPortion = () => {
        if (portions + 1 < 201) {
            setPortions(portions + 1);
            setIng(portions + 1);
        }
    }

    async function deleteRecipe() {
        let response = await Axios.post("http://localhost:4000/recipes/delete", {
            id: recipe.id_re
        });

        navigate("/");
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-9 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h2> <b> {title} </b>  </h2>
                            <div className='row'>
                                <p className="col-sm-12 col-md-12 col-lg-5 mx-auto recipe-body-description"> {description} </p>
                                <img
                                    className="rounded recipe-body-img col-sm-12 col-md-12 col-lg-5 mx-auto"
                                    src={image != "" ? image : Food_basic}
                                    alt="Card image cap"
                                    onError={(e) => { e.target.onerror = null; e.target.src = Image_not_found }}></img>
                            </div>

                            <div className='recipe-body-divider'></div>
                            <div className='row'>
                                <div className="col-sm-12 col-md-12 col-lg-5 mx-auto">
                                    <h3 className='recipe-body-subtitle'> Ingredience </h3>
                                    <div dangerouslySetInnerHTML={{ __html: ingredients }}></div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-5 mx-auto">
                                    <h3 className='recipe-body-subtitle'> Důležité informace </h3>
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <FaUserAlt /> Vytvořeno: <a className='card-link' href={"profile?id=" + id_u}> {firstName} "{username}" {lastName} </a>
                                        </li>
                                        <li className="list-group-item">
                                            <BiCookie /> Porce:
                                            <button type="button" className="btn btn-link" onClick={minusPortion}><AiOutlineMinus /></button>
                                            {portions}
                                            <button type="button" className="btn btn-link" onClick={plusPortion}><AiOutlinePlus /></button>
                                        </li>
                                        <li className="list-group-item"> <BiTimeFive /> Předpokládaná doba přípravy: {estimatedTime} min </li>
                                        <li className="list-group-item"> <FaMoneyBill /> Odhadovaná cena: {estimatedPrice} Kč </li>
                                        <li className="list-group-item"> <BiCategory /> Kategorie: {category} </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='recipe-body-divider'></div>
                            <div className='row'>
                                <h3 className='recipe-body-subtitle'> Postup </h3>
                                <p> {process} </p>
                            </div>

                            <div className='recipe-body-divider'></div>
                            <button type="button" class="btn btn-danger" onClick={deleteRecipe}> <BsTrashFill /> Smazat recept </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipesBody;