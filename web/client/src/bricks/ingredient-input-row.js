import '../App.css';
import { useEffect, useState } from 'react';

let units = []
let ingredients = []

const IngredientInputRow = (props) => {
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
    }, [])

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
                        aria-describedby="basic-addon2"></input>
                </div>
            </div>
            <div className="col">
                <label> Jednotka: </label>
                <div className="input-group mb-3">
                    <select className="form-control">
                        {units.map((x, i) => {
                            return (
                                <option key={x + i} value={x.id_mu}> {x.name} </option>
                            );
                        })}
                    </select>
                </div>
            </div>
            <div className="col">
                <label> Daná ingredience: </label>
                <div className="input-group mb-3">
                    <select className="form-control">
                    {ingredients.map((x, i) => {
                            return (
                                <option key={x + i} value={x.id_in}> {x.name} </option>
                            );
                        })} 
                    </select>
                </div>
            </div>
        </div>
    )
}

export default IngredientInputRow;