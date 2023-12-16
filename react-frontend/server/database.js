const {Pool} = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "hello123",
    host:"localhost",
    port: 5432,
    database: "chatbot_builder"
});

/*const createTblQry = `CREATE TABLE users (
    id serial PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(200) UNIQUE NOT NULL,
    phoneNumber VARCHAR(15) UNIQUE NOT NULL,
    password VARCHAR(200) UNIQUE NOT NULL,
    confirm_password VARCHAR(200) NOT NULL
);`*/

module.exports = pool;