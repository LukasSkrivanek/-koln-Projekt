const path = require("path");
const Ajv = require("ajv").default;
const IngredientsDao = require("../../dao/ingredients-dao");
const ajv = new Ajv({ coerceTypes: true });
require("ajv-keywords")(ajv);
let dao = new IngredientsDao();

let schema = {
    "type": "object",
    "properties": {
        "id": { "type": "number" },
    },
    "required": ["id"]
};

async function DeleteAbl(req, res) {
    const body = req.query.id ? req.query : req.body;
    const valid = ajv.validate(schema, body);

    if (valid) {
        const result = await dao.DeleteIngredient(body.id);
    
        res.status(200).send(JSON.stringify(body.id));
    }
    else {
        res.status(400).send({
            errorMessage: "Nepodařilo se splnit požadavek.",
            params: req.body,
            reason: ajv.errors
        });
    }
}

module.exports = DeleteAbl;