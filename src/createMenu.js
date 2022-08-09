const db = require('../db')

async function main(){
    await db.query('CREATE TABLE menus (id INTEGER PRIMARY KEY, title TEXT, cafe_id INTEGER REFERENCES cafes(id)) ')
    console.log("***MENUS CREATED***")
}

main()