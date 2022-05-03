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
    async CreateIngredient(name) {
        const connectionSync = this._connectDBSync();

        let sql = `INSERT INTO ingredients VALUES (NULL, '${name}')`;

        return connectionSync.query(sql);
    }

    async GetIngredient(id) {
        const connectionSync = this._connectDBSync();

        let sql = `SELECT * FROM ingredients WHERE id_in = ${id}`;

        return JSON.stringify(connectionSync.query(sql));
    }

    async ListIngredients() {
        const connectionSync = this._connectDBSync();

        let sql = `SELECT * FROM ingredients`;

        return JSON.stringify(connectionSync.query(sql));
    }

    async DeleteIngredient(id) {
        const connectionSync = this._connectDBSync();

        const syncResult = connectionSync.query(`DELETE FROM ingredients WHERE id_in=${id}`);

        return id;
    }

    async UpdateIngredient(ingredient) {
        try {
            const connectionSync = this._connectDBSync();
            
            let sql = `UPDATE ingredients SET name = '${ingredient.name}' WHERE id_in = ${ingredient.id_in}`;
            
            const syncResult = connectionSync.query(sql);
            
            return syncResult;
        }
        catch (e) {
            return { message: "Chyba při odesílání update. \n" + e.message }
        }
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