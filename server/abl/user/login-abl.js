const path = require("path");
const Ajv = require("ajv").default;
const UsersDao = require("../../dao/users-dao");
let dao = new UsersDao();

let schema = {
    "type": "object",
    "properties": {
        "username": { "type": "string" },
        "password": { "type": "string" },
    },
    "required": ["username", "password"]
};

async function LoginAbl(req, res) {
    try {
        const ajv = new Ajv();
        const body = req.query.id ? req.query : req.body;
        const valid = ajv.validate(schema, body);

        if (valid) {
            const user = await dao.LoginUser(body);
            console.log(user);
            if (!user) {
                res.status(400).send({
                    errorMessage: "Ověření údajů se nezdařilo. Chyba sítě",
                    params: req.body,
                    reason: ajv.errors
                })
            }
            
            res.json(user);
        } else {
            res.status(400).send({
                errorMessage: "Ověření údajů se nezdařilo",
                params: body,
                reason: ajv.errors
            })
        }
    } catch (e) {
        if (e.message.includes("Uživatel s tímto id neexistuje ")) {
            res.status(400).send({ errorMessage: e.message, params: req.body })
        }
        //res.status(500).send(e)
    }
}

module.exports = LoginAbl;