const path = require("path");
const Ajv = require("ajv").default;
const RecipesDao = require("../../dao/recipes-dao");

let dao = new RecipesDao();

let schema = {
    "type": "object",
    "properties": {
        "title": { "type": "string" },
        "description": { "type": "string" },
        "process": { "type": "string" },
        "image": { "type": "string" },
        "portions": { "type": "number" },
        "estimatedTime": { "type": "number" },
        "estimatedPrice": { "type": "number" },
        "category": { "type": "number" },
        "author": { "type": "number" },
    },
    "required": ["title", "description", "process", "image", "portions", "estimatedTime", "estimatedPrice", "category", "author"]
};

async function CreateWithIngredientsAbl(req, res) { 
    try {
        const ajv = new Ajv();
        const valid = ajv.validate(schema, req.body);
        
        if (valid == true) {
            let recipe = req.body;
            recipe = await dao.CreateRecipeWithIngredients(recipe);
            res.json(recipe);
        } else {
            res.status(400).send({
                errorMessage: "Vytvoření receptu se nezdařilo",
                params: req.body,
                reason: ajv.errors
            })
        }
    } catch (e) {
        if (e.message.includes("Recept s tímto id ")) {
            res.status(400).send({ errorMessage: e.message, params: req.body })
        }

        res.status(500).send(e)
    }
}

module.exports = CreateWithIngredientsAbl;