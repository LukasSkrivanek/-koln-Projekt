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

let connection;
class UsersDao {

    static sqlResult = [false, ""];;
    async CreateUser(user) {
        await this._connectDB();

        let pass = crypto.createHash('md5').update(user.password).digest("hex");

        var sql = `INSERT INTO users VALUES (NULL, '${user.username}', '${user.email}', '${user.firstName}', '${user.lastName}', '${pass}', CURRENT_TIMESTAMP, 3)`;

        connection.query(sql, function (err, result) {
            if (err) {
                throw err;
            }

            return user;

        });
    }

    async GetUser(id) {
        const connectionSync = this._connectDBSync();
        const syncResult = connectionSync.query(`SELECT * FROM users WHERE id_u = ${id}`)
        return JSON.stringify(syncResult);
    }

    async ListUsers() {
        const connectionSync = this._connectDBSync();

        const syncResult = connectionSync.query(`SELECT * FROM users`)

        return JSON.stringify(syncResult);
    }

    /**
     * Smazat uživatele pomocí id, sql: DELETE FROM users WHERE id_u=${id}
     * @param {Number} id Id uživatele ke smazaní
     */
    async DeleteUser(id) {
        const connectionSync = this._connectDBSync();
        const syncResult = connectionSync.query(`DELETE FROM users WHERE id_u=${id}`);
        return this.GetUser(id);
    }

    /**
     * Aktualizovat data uživatele, sql: UPDATE user SET ....
     * @param {Number} id Id uživatele k updatu 
     * @param {String} username Nastavit jméno, když null nebo undefined tak je ignorováno 
     * @param {String} email Nastavit email, když null nebo undefined tak je ignorováno
     * @param {String} firstName Nastavit křestní jméno, když null nebo undefined tak je ignorováno
     * @param {String} lastName Nastavit příjmení, když null nebo undefined tak je ignorováno
     * @param {String} password //TODO NEFUNGUJE poslat standartní cestou
     * @param {Number} role Nastaví roli, když null nebo undefined tak je ignorováno
     * @returns Výsledek dotazu na uživatele s WHERE id_u=x
     */
    async UpdateUser(id, username = null, email = null, firstName = null, lastName = null, password = null, role = null) {
        try {
            const connectionSync = this._connectDBSync();
            let sql = 'UPDATE users SET';
            if (username != null && username != undefined) {
                sql += " `username` = '" + username + "',";

            }
            if (email != null && username != undefined) {
                sql += " `email` = '" + email + "',";

            }
            if (firstName != null && firstName != undefined) {
                sql += " `firstName` = '" + firstName + "',";

            }
            if (lastName != null && lastName != undefined) {
                sql += " `lastName` = '" + lastName + "',";

            }
            if (password != null && password != undefined) {
                //TODO Hash hesla
                //sql += " `email` = '" + email + "'";
            }
            if (role != null && role != undefined) {
                sql += " `role` = " + role + ",";

            }
            sql = sql.substring(0, sql.length - 1);
            sql += " WHERE `id_u`=" + id + "";

            const syncResult = connectionSync.query(sql);
            return this.GetUser(id);
        }
        catch (e) {
            return { message: "Chyba při odesílání update. \n" + e.message }
        }
    }

    async LoginUser(user) {
        await this._connectDB();

        //let pass = crypto.createHash('md5').update(user.password).digest("hex");
        let pass = user.password

        let sql = `SELECT * FROM users WHERE username = '${user.username}' AND password = '${pass}'`;
        return JSON.stringify(connection.query(sql));
    }

    async _connectDB() {
        connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'cookbook'
        });

        connection.connect(function (err) {
            if (err) {
                return console.error('error: ' + err.message);
            }

            console.log('Connected to the MySQL server.');
            return connection;
        });
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

module.exports = UsersDao;