const path = require("path");
const Ajv = require("ajv").default;
const UsersDao = require("../../dao/users-dao");
const ajv = new Ajv({ coerceTypes: true });
require("ajv-keywords")(ajv);
let dao = new UsersDao();

async function ListAbl(req, res) {
    const body = req.query.id ? req.query : req.body;

    try {
        const users = await dao.ListUsers();

        res.status(200).send(users);
    } catch (error) {
        res.status(400).send(
            { errorMessage: "Nečekaná chyba." }
        );
    }
}

module.exports = ListAbl;