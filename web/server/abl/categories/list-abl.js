const path = require("path");
const Ajv = require("ajv").default;
const CategoriesDao = require("../../dao/categories-dao");
const ajv = new Ajv({ coerceTypes: true });
require("ajv-keywords")(ajv);
let dao = new CategoriesDao();

async function ListAbl(req, res) {
    const body = req.query.id ? req.query : req.body;

    try {
        const recipes = await dao.ListCategories();

        res.status(200).send(recipes);
    } catch (error) {
        res.status(400).send(
            { errorMessage: "Nečekaná chyba." }
        );
    }
}

module.exports = ListAbl;