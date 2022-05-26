import '../App.css';
import { useEffect, useState } from 'react';

let units = []
let ingredients = []

const IngredientInputRow = (props) => {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState("");
    const [unit, setUnit] = useState(1);
    const [unitName, setUnitName] = useState("");
    const [ingredient, setIngredient] = useState(1);

    useEffect(() => {
        if (units.length < 1) {
            for (let i = 0; i < props.units.length; i++) {
                units.push(props.units[i]);
            }
        }

        if (ingredients.length < 1) {
            for (let i = 0; i < props.ingredients.length; i++) {
                ingredients.push(props.ingredients[i]);
            }
        }

        setUnit(units[0].id_mu);
        setUnitName(units[0].name)
        setIngredient(ingredients[0].id_in);
        setName(ingredients[0].name);
    }, [])

    useEffect(() => {
        let ing = {
            ingredient: ingredient,
            name: name,
            unit: unit,
            unitName: unitName,
            number: Number(number)
        };

        let index = props.index;

        props.parentCall(ing, index);
    }, [number, unit, ingredient])

    function handleUnitsOptions(i) {
        setUnit(units[i].id_mu);
        setUnitName(units[i].name)
    }

    function handleIngredientOptions(i) {
        setIngredient(ingredients[i].id_in);
        setName(ingredients[i].name);
    }

    return (
        <div className="row">
            <div className="col">
                <label> Počet: </label>
                <div className="input-group mb-3">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="např. 30"
                        min={1}
                        aria-describedby="basic-addon2"
                        onChange={(e) => setNumber(e.target.value)}></input>
                </div>
            </div>
            <div className="col">
                <label> Jednotka: </label>
                <div className="input-group mb-3">
                    <select className="form-control" onChange={(e) => handleUnitsOptions(e.target.value)}>
                        {units.map((x, i) => {
                            return (
                                <option key={x + i} value={i}> {x.name} </option>
                            );
                        })}
                    </select>
                </div>
            </div>
            <div className="col">
                <label> Daná ingredience: </label>
                <div className="input-group mb-3">
                    <select className="form-control"
                        onChange={(e) => { handleIngredientOptions(e.target.value) }}>
                        {ingredients.map((x, i) => {
                            return (
                                <option key={x.name} value={i}> {x.name} </option>
                            );
                        })}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default IngredientInputRow;