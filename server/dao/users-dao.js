const crypto = require("crypto");
const mysql = require('mysql');
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

let connection;

class UsersDao {

    async CreateUser(user) {
        await this._connectDB();

        const pass = crypto.createHash('md5').update(user.password).digest("hex");
        
        var sql = `INSERT INTO users VALUES (NULL, '${user.username}', '${user.email}', '${user.firstName}', '${user.lastName}', '${pass}', CURRENT_TIMESTAMP, 3)`;

        connection.query(sql, function (err, result) {
            if (err) {
                throw err;
            }

            return user;

        });
    }

    async GetUser(id) {
        await this._connectDB();

        let sql = `SELECT * FROM users WHERE id_u = ${id}`;

        connection.query(sql, function (err, result, fields) {
            if (err) throw err;

            return result;
        });
    }

    async LoginUser(user) {
        await this._connectDB();

        //let pass = crypto.createHash('md5').update(user.password).digest("hex");
        let pass = user.password

        let sql = `SELECT * FROM users WHERE username = '${user.username}' AND password = '${pass}'`;
        
        connection.query(sql, function (err, result) {
            console.log(result)
            if (err) {
                throw err;
            }

            if (result.length > 0) {
                return result;
            } else {
                return { message: "Špatné uživatelské jméno nebo heslo" }
            }
        });
    }

    async _connectDB() {
        connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'cookbook'
        });

        connection.connect(function(err) {
            if (err) {
              return console.error('error: ' + err.message);
            }
          
            console.log('Connected to the MySQL server.');
            return connection;
          });
    }
}

module.exports = UsersDao;