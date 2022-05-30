import '../App.css';
import Axios from 'axios'
import { useEffect, useState } from 'react';

// Obrázky
import Card_placeholder from '../img/card_placeholder.png'
import Image_not_found from '../img/image_not_found.jpg'
import Food_basic from '../img/food_basic.png'

// Ikony
import { BiTimeFive } from "react-icons/bi";
import { FaMoneyBill, FaUserAlt } from "react-icons/fa";


const RecipeCard = (props) => {
    const [image, setImg] = useState("")
    const [id_re, setId_re] = useState()
    const [title, setTitle] = useState("NO DATA")
    const [description, setDescription] = useState("NO DATA")
    const [estimatedTime, setEstimatedTime] = useState("NO DATA")
    const [estimatedPrice, setEstimatedPrice] = useState("NO DATA")
    const [id_u, setId_u] = useState()
    const [firstName, setFirstName] = useState("NO DATA")
    const [username, setUserName] = useState("NO DATA")
    const [lastName, setLastName] = useState("NO DATA")
    const [createdAt, setCreatedAt] = useState("NO DATA")

    let recipe = {}

    useEffect(() => {
        getData();
      }, [])

    async function getData() {
        const response = await Axios.get("http://localhost:4000/recipes/listWithUsers", {});
        
        recipe = response.data[props.recipe];

        setImg(recipe.image);
        setId_re(recipe.id_re);
        setTitle(recipe.title);
        setDescription(recipe.description);
        setEstimatedTime(recipe.estimatedTime);
        setEstimatedPrice(recipe.estimatedPrice);
        setId_u(recipe.id_u);
        setFirstName(recipe.firstName);
        setUserName(recipe.username);
        setLastName(recipe.lastName);
        setCreatedAt(recipe.createdAt);
    }

    return (
        <div className="card">
            <img 
            className="card-img-top card-img" 
            src={image != "" ? image : Food_basic} 
            alt="Card image cap"
            onError={(e)=>{e.target.onerror = null; e.target.src=Image_not_found}}></img>
            <div className="card-body">
                <h5 className="card-title"> <a href={"../recipe?id=" + id_re} className="card-link"> {title} </a> </h5>
                <p className="card-text"> {description} </p>
                <div className='card-block'>
                    <span> <BiTimeFive /> {estimatedTime} min </span>
                    <span> <FaMoneyBill /> {estimatedPrice} Kč </span>
                </div>
                <div className='card-user'>
                    <a href={"profile?id=" + id_u}> <FaUserAlt /> {firstName} "{username}" {lastName} </a>
                </div>
            </div>
            <div className="card-footer">
                <small className="text-muted"> Naposledy aktualizováno: {createdAt} </small>
            </div>
        </div>
    )
}

export default RecipeCard;