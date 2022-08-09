const db = require('../db')

async function main () {
    await db.query('DROP TABLE menus')
}

main()