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
    },
    "required": ["id"]
};

/**
 * Smaže uživatele, TODO authentizace aby nemohl mazat každý
 * @param {*} req 
 * @param {*} res 
 */
async function DeleteUser(req, res) {
    const body = req.query.id ? req.query : req.body;
    const valid = ajv.validate(schema, body);
    if (valid) {
        const user = await dao.DeleteUser(body.id);
        res.status(200).send(user);
    }
    else {
        res.status(400).send({
            errorMessage: "Nepodařilo se splnit požadavek.",
            params: req.body,
            reason: ajv.errors
        });
    }
}

module.exports = DeleteUser;