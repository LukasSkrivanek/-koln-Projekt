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

class MeasureUnitsDao {
    async ListMeasureUnits() {
        const connectionSync = this._connectDBSync();

        let sql = `SELECT * FROM measure_units`;

        return JSON.stringify(connectionSync.query(sql));
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

module.exports = MeasureUnitsDao;