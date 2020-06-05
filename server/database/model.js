const { Pool } = require('pg');
const pool = new Pool({ 
  user: 'vibhlsfp',
  host: 'ruby.db.elephantsql.com',
  database: 'vibhlsfp',
  password: 'uB-uP5KolLtnxsXBHOwcsx_IaugnLqxS',
  port: 5432,
 });

const queryString = "CREATE TABLE IF NOT EXISTS Users (firstname VARCHAR NOT NULL, lastname VARCHAR NOT NULL, username VARCHAR NOT NULL, email VARCHAR NOT NULL, password VARCHAR NOT NULL)";

pool.query(queryString, (err, result) => {
  if(err) {
    console.log('error creating table : ', err)
  } else {
    console.log('You have successfully created the database')
  }
})

module.exports = pool; 

