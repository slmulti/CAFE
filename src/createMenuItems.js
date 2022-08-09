const db = require('../db')

async function main(){
    await db.query('CREATE TABLE menuItems (id INTEGER PRIMARY KEY, name TEXT, menu_id INTEGER REFERENCES menus(id))')
    console.log("***MenuItems CREATED***")
}

main()