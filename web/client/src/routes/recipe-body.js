import '../App.css';

import { useState } from 'react';

// Obrázky
import Image_not_found from '../img/image_not_found.jpg'
import Food_basic from '../img/food_basic.png'

// Ikony
import { BiTimeFive, BiCookie } from "react-icons/bi";
import { FaMoneyBill, FaUserAlt } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const RecipesBody = (props) => {
    const [portions, setPortions] = useState(props.recipe.portions)

    const minusPortion = () => {
        if(portions - 1 > 0) {
            setPortions(portions - 1)
        } 
    }

    const plusPortion = () => {
        if(portions + 1 < 11) {
            setPortions(portions + 1)
        } 
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-9 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h2> <b> {props.recipe.title} </b>  </h2>
                            <div className='row'>
                                <p className="col-sm-12 col-md-12 col-lg-5 mx-auto recipe-body-description"> {props.recipe.description} </p>
                                <img
                                    className="rounded recipe-body-img col-sm-12 col-md-12 col-lg-5 mx-auto"
                                    src={props.recipe.image != "" ? props.recipe.image : Food_basic}
                                    alt="Card image cap"
                                    onError={(e) => { e.target.onerror = null; e.target.src = Image_not_found }}></img>
                            </div>

                            <div className='recipe-body-divider'></div>
                            <div className='row'>
                                <div className="col-sm-12 col-md-12 col-lg-5 mx-auto">
                                    <h3 className='recipe-body-subtitle'> Ingredience </h3>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-5 mx-auto">
                                    <h3 className='recipe-body-subtitle'> Důležité informace </h3>
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <FaUserAlt /> Vytvořeno: <a className='card-link' href={"profile?id=" + props.user.id_u}> {props.user.firstName} "{props.user.username}" {props.user.lastName} </a>
                                        </li>
                                        <li className="list-group-item"> 
                                        <BiCookie /> Porce: 
                                        <button type="button" className="btn btn-link" onClick={minusPortion}><AiOutlineMinus /></button> 
                                        {portions} 
                                        <button type="button" className="btn btn-link" onClick={plusPortion}><AiOutlinePlus /></button>
                                        </li>
                                        <li className="list-group-item"> <BiTimeFive /> Předpokládaná doba přípravy: {props.recipe.estimatedTime} min </li>
                                        <li className="list-group-item"> <FaMoneyBill /> Odhadovaná cena: {props.recipe.estimatedPrice} Kč </li>
                                        <li className="list-group-item"> Kategorie: {props.recipe.category} </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='recipe-body-divider'></div>
                            <div className='row'>
                                <h3 className='recipe-body-subtitle'> Postup </h3>
                                <p> {props.recipe.process} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipesBody;