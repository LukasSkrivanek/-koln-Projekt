const path = require("path");
const { getEnabledCategories } = require("trace_events");
const { use } = require("../../controller/user-controller");
const Ajv = require("ajv").default;
const UsersDao = require("../../dao/users-dao");
const ajv = new Ajv({ coerceTypes: true });
require("ajv-keywords")(ajv);
let dao = new UsersDao();

let schema = {
    "type": "object",
    "properties": {
        "id": { "type": "number" },
        "username": { "type": "string" },
        "email": { "type": "string" },
        "firstName": { "type": "string" },
        "lastName": { "type": "string" },
        "password": { "type": "string" },
        "role": { "type": "number" }
    },
    "anyRequired": ["username", "email", "firstName", "lastName", "password", "role"],
    "required": ["id"]
};

/**
 * Upravit uživatele, TODO autentizace
 * @param {*} req 
 * @param {*} res 
 */
async function UpdateAbl(req, res) {
    const body = req.query.id ? req.query : req.body;
    const valid = ajv.validate(schema, body);
    
    if (valid) {
        
        const user = await dao.UpdateUser(body.id, body.username, body.email, body.firstName, body.lastName, body.password, body.role);
        
        res.status(200).send(user);
        
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