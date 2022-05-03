const path = require("path");
const Ajv = require("ajv").default;
const IngredientsDao = require("../../dao/ingredients-dao");

let dao = new IngredientsDao();

let schema = {
    "type": "object",
    "properties": {
        "name": { "type": "string" },
    },
    "required": ["name"]
};

async function CreateAbl(req, res) { 
    try {
        const ajv = new Ajv();
        const valid = ajv.validate(schema, req.body);
        
        if (valid == true) {
            let ingredient = req.body;
            
            ingredient = await dao.CreateIngredient(ingredient.name);
            
            res.json(ingredient);
        } else {
            res.status(400).send({
                errorMessage: "Vytvoření ingredience se nezdařilo",
                params: req.body,
                reason: ajv.errors
            })
        }
    } catch (e) {
        if (e.message.includes("Ingredience s tímto id ")) {
            res.status(400).send({ errorMessage: e.message, params: req.body })
        }

        res.status(500).send(e)
    }
}

module.exports = CreateAbl;