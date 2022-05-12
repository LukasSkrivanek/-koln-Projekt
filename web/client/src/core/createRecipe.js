import '../App.css';

import { Outlet } from "react-router-dom";
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

const CreateRecipe = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [process, setProcess] = useState('');
    const [portions, setPortions] = useState(1);
    const [category, setCategory] = useState(categories[0].name);
    const [time, setTime] = useState(0);
    const [price, setPrice] = useState(0)

    const [errMsg, setErrMsg] = useState('');
    const [descriptionLength, setDescriptionLength] = useState(0);
    const [link, setLink] = useState('');
    const [imgLink, setImgLink] = useState('')

    let categoriesOptions = "";

    useEffect(() => {
        setDescriptionLength(description.length);
    }, [description])

    const catOptions = () => {
        for (let i = 0; i < categories.length; i++) {
            categoriesOptions += "<option value='" + categories[i].name + "'>" + categories[i].name + "</option>"
        }

        return categoriesOptions
    }

    const sendRecipe = () => {
        let data = {
            title: title,
            description: description,
            process: process,
            portions: portions,
            category: category,
            estimatedTime: time,
            estimatedPrice: price,
            image: link
        }

        console.log(data)
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
                                    <Editor
                                        initialValue=""
                                        placeholder="Sem napište postup svého receptu"
                                        maxLength={3000}
                                        onEditorChange={(e) => setProcess(e)}
                                        init={{
                                            height: 500,
                                            menubar: false,
                                            plugins: [
                                                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                                'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
                                            ],
                                            toolbar: 'undo redo | blocks | ' +
                                                'bold italic forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                                'removeformat | help',
                                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                        }}
                                    />
                                    <small className="form-text text-muted"> Maximální délka postupu je 3000 znaků. </small>
                                </div>

                                <div className='new-line'></div>
                                <div className="row addRecipe-ing-div">
                                    <h3> Ingredience: </h3>
                                    <div className='new-line'></div>
                                    <IngredientsList />
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
                                            value={portions} min="0" max="10" step="1"
                                            onChange={(e) => setPortions(e.target.value)}></input>
                                    </div>
                                    <div className="col">
                                        <label> Kategorie: </label>
                                        <select className="form-control" dangerouslySetInnerHTML={{ __html: catOptions() }} onChange={(e) => setCategory(e.target.value)}></select>
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
                                <div className="form-group addRecipe-btn-div">
                                    <Button
                                        variant="contained"
                                        onClick={sendRecipe}
                                    >
                                        Přidat recept </Button>
                                    <div className='new-line'></div>

                                    <span className={errMsg ? "help-block red" : "help-block hidden"}> {errMsg} </span>
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