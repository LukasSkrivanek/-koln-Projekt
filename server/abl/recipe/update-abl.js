const path = require("path");
const Ajv = require("ajv").default;
const RecipesDao = require("../../dao/recipes-dao");
const ajv = new Ajv({ coerceTypes: true });
require("ajv-keywords")(ajv);
let dao = new RecipesDao();

let schema = {
    "type": "object",
    "properties": {
        "id_re": { "type": "number" },
        "title": { "type": "string" },
        "description": { "type": "string" },
        "process": { "type": "string" },
        "image": { "type": "string" },
        "portions": { "type": "number" },
        "estimatedTime": { "type": "number" },
        "estimatedPrice": { "type": "number" },
        "category": { "type": "number" },
    },
    "required": ["id_re", "title", "description", "process", "image", "portions", "estimatedTime", "estimatedPrice", "category"]
};

async function UpdateAbl(req, res) {
    const body = req.query.title ? req.query : req.body;
    const valid = ajv.validate(schema, body);
    
    if (valid) {
        
        const recipe = await dao.UpdateUser(body);
        
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