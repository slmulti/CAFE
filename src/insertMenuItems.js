const db = require('../db')

async function main () {
    await db.query('INSERT INTO menuitems(name, menu_id) Values("croisaant", 4)')
    console.log("***menu items added***")
}

main()