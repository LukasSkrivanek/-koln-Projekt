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

class CategoriesDao {
    async ListCategories() {
        const connectionSync = this._connectDBSync();

        let sql = `SELECT * FROM categories`;

        return JSON.stringify(connectionSync.query(sql));
    }

    async GetCategory(id) {
        const connectionSync = this._connectDBSync();
        const syncResult = connectionSync.query(`SELECT * FROM categories WHERE id_ca = ${id}`)
        return JSON.stringify(syncResult);
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

module.exports = CategoriesDao;