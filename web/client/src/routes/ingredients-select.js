import '../App.css';
import Axios from 'axios'
import { useEffect, useState } from 'react';

// Ikony
import { BsPlusLg } from "react-icons/bs";
import { ImCross } from "react-icons/im";

// Bricks
import IngredientInputRow from '../bricks/ingredient-input-row';


// Proměnné
let ing
let unit
let ingredients = [];

const IngredientsList = (props) => {
    const [render, setRender] = useState(false);
    const [inputList, setInputList] = useState([{}]);

    useEffect(() => {
        getData();
    }, [])

    const changeIngredient = (ingredient, index) =>{
        ingredients[index] = ingredient;

        props.callParent(ingredients);
    }

    const changeIngredientLength = (length) => {
        props.callParent2(length);
    }

    async function getData() {
        ing = await Axios.get("http://localhost:4000/ingredients/list", {})
        ing = ing.data

        unit = await Axios.get("http://localhost:4000/measure_units/list", {})
        unit = unit.data
        
        handleAddClick()
        handleRemoveClick(1)
        setRender(true)
    }

    // Zpracování smazání ingredience
    const handleRemoveClick = index => {
        const list = [...inputList];

        list.splice(index, 1);

        setInputList(list);
        changeIngredientLength(inputList.length - 1);
    };

    // Zpracování přidání ingredience
    const handleAddClick = () => {
        setInputList([...inputList, {}]); 
        changeIngredientLength(inputList.length + 1);
    };

    return (
        <div>
            {render ? inputList.map((x, i) => {
                return (
                    <div className="box" key={x}>
                        <IngredientInputRow key={x} ingredients={ing} units={unit} index={i} parentCall={changeIngredient} />
                        <div className="btn-box" key={x + "s"}>
                            {inputList.length !== 1 && <button key={x + "y"}
                                className="mr10 btn btn-danger btn-ing-remove"
                                onClick={() => handleRemoveClick(i)}> <ImCross /> </button>}
                            {inputList.length - 1 === i && <button className='btn btn-dark' onClick={handleAddClick} key={x + "x"}> <BsPlusLg /> </button>}
                        </div>
                    </div>
                );
            }) :
                <a> <b> LOADING </b> </a>}

        </div>
    )
}

export default IngredientsList;