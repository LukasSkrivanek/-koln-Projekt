const crypto = require("crypto");
const mysql = require('mysql');
const express = require("express");
const cors = require("cors");
const { resolve } = require("path");
const { rejects } = require("assert");
const app = express();
const mysqlSync = require('sync-mysql');

app.use(express.json());
app.use(cors());

class RecipesDao {
    async CreateRecipe(recipe) {
        const connectionSync = this._connectDBSync();
        
        let sql = `INSERT INTO recipes VALUES 
        (NULL, 
            '${recipe.title}', 
            '${recipe.description}', 
            '${recipe.process}', 
            '${recipe.image}', 
            ${recipe.portions}, 
            ${recipe.estimatedTime},
            ${recipe.estimatedPrice}, 
            CURRENT_TIMESTAMP,
            ${recipe.category},
            ${recipe.author})`;

        return connectionSync.query(sql);
    }

    async CreateRecipeWithIngredients(recipe) {
        const connectionSync = this._connectDBSync();

        let id = "";
        let sql = `INSERT INTO recipes VALUES 
        (NULL, 
            '${recipe.title}', 
            '${recipe.description}', 
            '${recipe.process}', 
            '${recipe.image}', 
            ${recipe.portions}, 
            ${recipe.estimatedTime},
            ${recipe.estimatedPrice}, 
            CURRENT_TIMESTAMP,
            ${recipe.category},
            ${recipe.author})`;

        try {
            let response = connectionSync.query(sql)
            let ingredients = recipe.ingredients;
            id = response.insertId;

            for (let i = 0; i < ingredients.length; i++) {
                sql = `INSERT INTO rec_ing VALUES (
                ${id},
                ${ingredients[i].ingredient},
                '${ingredients[i].name}',
                ${ingredients[i].number},
                ${ingredients[i].unit},
                '${ingredients[i].unitName}'
            )`;

                connectionSync.query(sql);
            }

            return recipe;
        } catch (error) {
            if (id == "") {
                throw new Error("An error occurred while adding ingredients");
            }

            throw new Error("An error occurred while creating the recipe");
        }
    }

    async GetRecipe(id) {
        const connectionSync = this._connectDBSync();

        let sql = `SELECT * FROM recipes WHERE id_re = ${id}`;

        return JSON.stringify(connectionSync.query(sql));
    }

    async ListRecipes() {
        const connectionSync = this._connectDBSync();

        let sql = `SELECT * FROM recipes`;

        return JSON.stringify(connectionSync.query(sql));
    }

    async ListRecipesWithUsers(limit) {
        const connectionSync = this._connectDBSync();

        let sql = `SELECT * FROM recipes r JOIN users u WHERE r.author = u.id_u GROUP BY r.id_re DESC`;

        return JSON.stringify(connectionSync.query(sql));
    }

    async DeleteRecipe(id) {
        const connectionSync = this._connectDBSync();

        connectionSync.query(`DELETE FROM rec_ing WHERE id_re=${id}`);
        connectionSync.query(`DELETE FROM recipes WHERE id_re=${id}`);

        return id;
    }

    async UpdateUser(recipe) {
        try {
            const connectionSync = this._connectDBSync();

            let sql = `UPDATE recipes SET 
            title = '${recipe.title}', 
            description = '${recipe.description}', 
            process = '${recipe.process}', 
            image = '${recipe.image}', 
            portions = ${recipe.portions}, 
            estimatedTime = ${recipe.estimatedTime},
            estimatedPrice = ${recipe.estimatedPrice},
            category = ${recipe.category}
            WHERE id_re = ${recipe.id_re}`;

            const syncResult = connectionSync.query(sql);

            return syncResult;
        }
        catch (e) {
            return { message: "Chyba při odesílání update. \n" + e.message }
        }
    }

    _addIngredients(id, ingredients, recipe) {

    }

    _connectDBSync() {
        var connectionSync = new mysqlSync(
            {
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'cookbook'
            }
        )

        return connectionSync;
    }
}

module.exports = RecipesDao;