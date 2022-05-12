const path = require("path");
const { getEnabledCategories } = require("trace_events");
const { use } = require("../../controller/user-controller");
const Ajv = require("ajv").default;
const UsersDao = require("../../dao/users-dao");
const ajv = new Ajv({ coerceTypes: true });
require("ajv-keywords")(ajv);
let dao = new UsersDao();

//app.use(express.json());
//app.use(cors());

let schema = {
    "type": "object",
    "properties": {
        "id": { "type": "number" },
    },
    "required": ["id"]
};
/**
 * Získat uživatele podle ID, TODO autentizace
 * @param {*} req 
 * @param {*} res 
 */
async function GetAbl(req, res) {
    const body = req.query.id ? req.query : req.body;
    const valid = ajv.validate(schema, body);
    if (valid) {
        try {
            //res.status(200).send(req.query.id);
            const user = await dao.GetUser(body.id);
            //
            res.status(200).send(user);
        } catch (error) {
            res.status(400).send(
                { errorMessage: "Nečekaná chyba."}
            );
        }
    }
    else {
        res.status(400).send({
            errorMessage: "Nepodařilo se splnit požadavek.",
            params: req.body,
            reason: ajv.errors
        })
    }
}

module.exports = GetAbl;