const db = require('../db')

async function main(){
    await db.query('CREATE TABLE cafes (id INTEGER PRIMARY KEY, name TEXT, location TEXT) ')
    console.log("***CAFE TABLE CREATED***")
}

main()