import '../App.css';
import Axios from 'axios'

import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Editor } from '@tinymce/tinymce-react';
import Button from '@mui/material/Button';

// Routes
import IngredientsList from '../routes/ingredients-select';

// Obrázky
import Image_not_found from '../img/image_not_found.jpg'
import Food_basic from '../img/food_basic.png'

// Ikony
import { BiTimeFive } from "react-icons/bi";
import { FaMoneyBill } from "react-icons/fa";

let ingredients = [];
let ingredientsLength = 1;

const CreateRecipe = () => {
    const navigate = useNavigate();

    const [categories, setCategories2] = useState([{ id_ca: 0, name: "LOADING" }]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [process, setProcess] = useState('');
    const [portions, setPortions] = useState(1);
    const [category, setCategory] = useState(categories[0].name);
    const [time, setTime] = useState(0);
    const [price, setPrice] = useState(0);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [descriptionLength, setDescriptionLength] = useState(0);
    const [processLength, setProcessLength] = useState(0);
    const [link, setLink] = useState('');
    const [imgLink, setImgLink] = useState('');

    useEffect(() => {
        getCategories();
        setDescriptionLength(description.length);
    }, [description])

    useEffect(() => {
        setProcessLength(process.length);
    }, [process])

    useEffect(() => {
        if(success) {

        }
    }, [success])

    const saveIngredients = (ing) => {
        ingredients = ing;
    }

    const saveInputLength = (length) => {
        ingredientsLength = length
    }

    async function getCategories() {
        let response = await Axios.get("http://localhost:4000/categories/list", {})

        setCategories2(response.data);
        setCategory(response.data[0].id_ca);
    }

    const sendRecipe = (e) => {
        e.preventDefault();

        let ing = []

        for (let i = 0; i < ingredientsLength; i++) {
            ing.push(ingredients[i]);
        }

        if (title == "" || description == "" || process == "" || time == 0 || ingredients.length <= 1) {
            setErrMsg("Nebyli vyplněny všechny údaje nebo není dostatek vyplněných ingrediencí");
            return;
        }

        try {
            const response = Axios.post('http://localhost:4000/recipes/createWithIngredients', {
                title: title,
                description: description,
                process: process,
                portions: Number(portions),
                category: Number(category),
                estimatedTime: Number(time),
                estimatedPrice: Number(price),
                image: link,
                author: 1,
                ingredients: ing
            });

            setSuccess(true);
        } catch (error) {
            setErrMsg(error);
        }
    }

    const restartImg = () => {
        setImgLink("")
        setLink("")
    }

    const tryImg = () => {
        setImgLink(link)
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-9 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body" id="reg">
                                <h2> Vytvořit recept </h2>
                                <div className='new-line'></div>
                                <div className="form-group">
                                    <label> Název receptu: </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        placeholder="Název receptu"
                                        maxLength={60}
                                        onChange={(e) => setTitle(e.target.value)}></input>
                                </div>

                                <div className='new-line'></div>
                                <div className="form-group">
                                    <label> Popis receptu: </label>
                                    <textarea className="form-control" id="description" rows="5" maxLength={500} onChange={(e) => setDescription(e.target.value)}></textarea>
                                    <small className="form-text text-muted"> Maximální délka popisu je 500 znaků. Aktuální délka popisu je: {descriptionLength} </small>
                                </div>

                                <div className='new-line'></div>
                                <div className="form-group">
                                    <label> Postup receptu: </label>
                                    <textarea
                                        className="form-control"
                                        rows="15"
                                        placeholder="Sem napište postup svého receptu"
                                        maxLength={4000}
                                        onChange={(e) => setProcess(e.target.value)}>
                                    </textarea>
                                    <small className="form-text text-muted"> Maximální délka postupu je 4000 znaků. Aktuální délka je: {processLength} </small>
                                </div>

                                <div className='new-line'></div>
                                <div className="row addRecipe-ing-div">
                                    <h3> Ingredience: </h3>
                                    <div className='new-line'></div>
                                    <IngredientsList callParent={saveIngredients} callParent2={saveInputLength} />
                                </div>
                                <div className='new-line'></div>

                                <div className='new-line'></div>
                                <div className="row">
                                    <div className="col">
                                        <label> Počet porcí: </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="např. 30"
                                            aria-describedby="basic-addon2"
                                            value={portions} min="0" max="200" step="1"
                                            onChange={(e) => setPortions(e.target.value)}></input>
                                    </div>
                                    <div className="col">
                                        <label> Kategorie: </label>
                                        <select className="form-control" onChange={(e) => setCategory(e.target.value)}>
                                            {categories.map((x, i) => {
                                                return (
                                                    <option value={categories[i].id_ca} key={i} > {categories[i].name} </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>

                                <div className='new-line'></div>
                                <div className="row">
                                    <div className="col">
                                        <label> Předpokládaná doba přípravy: </label>
                                        <div className="input-group mb-3">
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="např. 30"
                                                aria-describedby="basic-addon2"
                                                onChange={(e) => setTime(e.target.value)}></input>
                                            <div className="input-group-append">
                                                <span className="input-group-text"> <b> MIN </b> <BiTimeFive className='icon' /> </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <label> Odhadovaná cena: </label>
                                        <div className="input-group mb-3">
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="např. 500"
                                                aria-describedby="basic-addon2"
                                                onChange={(e) => setPrice(e.target.value)}></input>
                                            <div className="input-group-append">
                                                <span className="input-group-text"> <b> KČ </b> <FaMoneyBill className='icon' /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='new-line'></div>
                                <div>
                                    <div className="row col-sm-12 col-md-12 col-lg-6 mx-auto addRecipe-left">
                                        <label> Odkaz k obrázku: </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={link}
                                            placeholder="https://www.google.com"
                                            onChange={(e) => setLink(e.target.value)}
                                            required ></input>
                                        <div className='new-line'></div>
                                        <input
                                            className="btn btn-primary addRecipe-btn col-sm-11 col-md-11 col-lg-5 btn-success"
                                            type="button"
                                            value="Zkusit"
                                            onClick={tryImg}></input>
                                        <input
                                            className="btn btn-primary addRecipe-btn col-sm-11 col-md-11 col-lg-5 btn-danger"
                                            type="button"
                                            value="Restartovat"
                                            onClick={restartImg}></input>
                                    </div>
                                    <div className="row col-sm-12 col-md-12 col-lg-6 mx-auto addRecipe-right">
                                        <label> Ukázka náhledu: </label>
                                        <img
                                            src={!imgLink ? Food_basic : imgLink}
                                            className="rounded float-right addRecipe-img"
                                            alt="Obrázek nebyl nalezen"
                                            onError={(e) => { e.target.onerror = null; e.target.src = Image_not_found }}></img>
                                    </div>
                                </div>

                                <div className='new-line'></div>
                                <div className='new-line'></div>
                                <div className="form-group addRecipe-btn-div">
                                    <Button
                                        variant="contained"
                                        onClick={sendRecipe}
                                        disabled={success ? 'disabled' : ''}
                                    >
                                        Přidat recept </Button>
                                    <div className='new-line'></div>

                                    <span className={errMsg ? "help-block red" : "help-block hidden"}> {errMsg} </span>
                                    <span className={success ? "help-block green" : "help-block hidden"}> Recept byl vytvořen </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
};

export default CreateRecipe;