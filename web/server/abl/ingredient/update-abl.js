const path = require("path");
const Ajv = require("ajv").default;
const IngredientsDao = require("../../dao/ingredients-dao");
const ajv = new Ajv({ coerceTypes: true });
require("ajv-keywords")(ajv);
let dao = new IngredientsDao();

let schema = {
    "type": "object",
    "properties": {
        "id_in": {"type": "number"},
        "name": { "type": "string" },
    },
    "required": ["id_in", "name"]
};

async function UpdateAbl(req, res) {
    const body = req.query.title ? req.query : req.body;
    const valid = ajv.validate(schema, body);
    
    if (valid) {
        
        const recipe = await dao.UpdateIngredient(body);
        
        res.status(200).send(recipe);
    }
    else {
        
        res.status(400).send({
            errorMessage: "Nepodařilo se splnit požadavek.",
            params: body,
            reason: ajv.errors
        })
        
    }
}

    module.exports = UpdateAbl;