const mysql = require('mysql');

// Create a connection pool for ny kind of query
const pool = mysql.createPool({
    connectionLimit: 10,
    password: process.env.DB_PASS,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
});

let translateDb = {};

translateDb.getAllRecords = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM dic', (err, results) =>  {
            if(err) {
                return reject(err);
            }
            return resolve(results)
        });
    });
};

translateDb.getLangRecords = (lang) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM dic where lang = ?', [lang], (err, results) =>  {
            if(err) {
                return reject(err);
            }
            return resolve(results)
        });
    });
};

translateDb.getTranslation = (lang, key) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM dic WHERE `key` = ? and lang = ?', [key, lang], (err, results) =>  {
            if(err) {
                return reject(err);
            }
            return resolve(results[0])
        });
    });
};

translateDb.setTranslation = (lang, key, value) => {
    return new Promise((resolve, reject) => {
       pool.query('REPLACE INTO dic (lang, `key`, value) VALUES (?, ?, ?)', [lang, key, value], (err, results) =>  {
            if(err) {
                return reject(err);
            }
            return resolve(results)
        }); 
    });
};

translateDb.delTranslation = (lang, key) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE FROM dic WHERE lang = ? AND `key` = ?', [lang, key], (err, results) =>  {
            if(err) {
                return reject(err);
            }
            return resolve(results)
        });
    });
};

module.exports = translateDb;