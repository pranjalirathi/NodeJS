//will connnect to the SQL databases
const mysql = require('mysql2');

//craeting a pool of connections which will work whenevr we have a query to run
//each quuery needs its conetcion
//once a query is done teh connection will be handed back into the pool and it is available to a new query
//passing some information about the databse object
const pool = mysql.createPool({
    host : 'localhost',
    user: 'root',
    database: 'node-first-app',
    password: 'root'
})

///exporting in the form of promises to handle asyncrnous code instaed of callbacks

module.exports = pool.promise();
