import '../App.css';
import { useEffect, useState } from 'react';
import Select, { AriaOnFocus } from 'react-select';

let units = []
let ingredients = []

const IngredientInputRow = (props) => {
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const [unit, setUnit] = useState("");
    const [unitName, setUnitName] = useState("");
    const [ingredient, setIngredient] = useState("");

    useEffect(() => {
        if (units.length < 1) {
            for (let i = 0; i < props.units.length; i++) {
                units.push({
                    value: props.units[i].id_mu,
                    label: props.units[i].name
                });
            }
        }

        if (ingredients.length < 1) {
            for (let i = 0; i < props.ingredients.length; i++) {
                ingredients.push({
                    value: props.ingredients[i].id_in,
                    label: props.ingredients[i].name
                });
            }
        }
    }, [])

    useEffect(() => {
        if(name == "" || unitName == "" || ingredient == "" || unit == "" || number == "") {
            return
        }

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

    function handleUnitsOptions(selected) {
        setUnit(selected.value);
        setUnitName(selected.label)
    }

    function handleIngredientOptions(selected) {
        setIngredient(selected.value);
        setName(selected.label);
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
                        min={0.1}
                        aria-describedby="basic-addon2"
                        onChange={(e) => setNumber(e.target.value)}></input>
                </div>
            </div>
            <div className="col">
                <label> Jednotka: </label>
                <Select
                    aria-labelledby="aria-label"
                    inputId="aria-example-input"
                    name="aria-live-color"
                    placeholder="Vyberte jednotku.."
                    onChange={handleUnitsOptions}
                    options={units}
                />
            </div>
            <div className="col">
                <label> Daná ingredience: </label>
                <Select
                    aria-labelledby="aria-label"
                    inputId="aria-example-input"
                    name="aria-live-color"
                    placeholder="Vyberte ingredienci.."
                    onChange={handleIngredientOptions}
                    options={ingredients}
                />
            </div>
        </div>
    )
}

export default IngredientInputRow;