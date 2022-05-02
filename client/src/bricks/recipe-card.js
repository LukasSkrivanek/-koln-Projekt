import '../App.css';

// Obrázky
import Card_placeholder from '../img/card_placeholder.png'
import Image_not_found from '../img/image_not_found.jpg'
import Food_basic from '../img/food_basic.png'

// Ikony
import { BiTimeFive } from "react-icons/bi";
import { FaMoneyBill, FaUserAlt } from "react-icons/fa";


const RecipeCard = (props) => {
    return (
        <div className="card">
            <img 
            className="card-img-top card-img" 
            src={props.recipe.image != "" ? props.recipe.image : Food_basic} 
            alt="Card image cap"
            onError={(e)=>{e.target.onerror = null; e.target.src=Image_not_found}}></img>
            <div className="card-body">
                <h5 className="card-title"> {props.recipe.title} </h5>
                <p className="card-text"> {props.recipe.description} </p>
                <div className='card-block'>
                    <span> <BiTimeFive /> {props.recipe.estimatedTime} mins </span>
                    <span> <FaMoneyBill /> {props.recipe.estimatedPrice} Kč </span>
                </div>
                <div className='card-user'>
                    <a href={"#"}> <FaUserAlt /> {props.user.firstName} "{props.user.username}" {props.user.lastName} </a>
                </div>
            </div>
            <div className="card-footer">
                <small className="text-muted"> Naposledy aktualizováno: {props.recipe.createdAt} </small>
            </div>
        </div>
    )
}

export default RecipeCard;