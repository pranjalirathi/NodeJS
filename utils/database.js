//will connnect to the SQL databases
const mysql = require('mysql2');

//craeting a pool of connections which will work whenevr we have a query to run
//each quuery needs its conetcion
//once a query is done teh connection will be handed back into the pool and it is available to a new query

const pool = mysql.createPool({
    host : 'localhost',
    user: 
})
