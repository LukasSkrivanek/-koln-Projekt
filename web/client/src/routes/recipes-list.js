import '../App.css';

// Bricks
import RecipeCard from '../bricks/recipe-card';

// Obrázky
import Card_placeholder from '../img/card_placeholder.png'

let name = [
    "Nejnovější recepty",
    "Nejoblíbenější recepty"
]

const RecipesList = (props) => {
    return (
        <div className="recipeList">
            <h2> <b> {name[props.type]} </b> </h2>

            <div className="card-group">
                {<RecipeCard recipe={0} />}
                {<RecipeCard recipe={1} />}
                {<RecipeCard recipe={2} />}
            </div>

        </div>
    )
}

export default RecipesList;