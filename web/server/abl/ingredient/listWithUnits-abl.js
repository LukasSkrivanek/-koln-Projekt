const path = require("path");
const Ajv = require("ajv").default;
const IngredientsDao = require("../../dao/ingredients-dao");
const ajv = new Ajv({ coerceTypes: true });
require("ajv-keywords")(ajv);
let dao = new IngredientsDao();

async function ListWithUnits(req, res) {
    try {
        const ingredients = await dao.ListIngredientsWithUnits();

        res.status(200).send(ingredients);
    } catch (error) {
        res.status(400).send(
            { errorMessage: "Nečekaná chyba." }
        );
    }
}

module.exports = ListWithUnits;