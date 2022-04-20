const path = require("path");
const UserDao = require("../../dao/users-dao");

let schema = {
    "type": "object",
    "properties": {
        "username": { "type": "string" },
        "password": { "type": "string" },
    },
    "required": ["username", "password"]
};

async function LoginAbl(req, res) { // Dokončit ověření pro existující email
    try {
        const ajv = new Ajv();
        const valid = ajv.validate(schema, req.body);

        if (valid) {
            let user = req.body;
            user = await dao.CreateUser(user);
            res.json(user);
        } else {
            res.status(400).send({
                errorMessage: "Ověření údajů se nezdařilo",
                params: req.body,
                reason: ajv.errors
            })
        }
    } catch (e) {
        if (e.message.includes("Uživatel s tímto id ")) {
            res.status(400).send({ errorMessage: e.message, params: req.body })
        }
        res.status(500).send(e)
    }
}


module.exports = LoginAbl;