const db = require('../db')

async function main () {
    await db.query('INSERT INTO menus(title, cafe_id) Values("coffee", 1)')
    await db.query('INSERT INTO menus(title, cafe_id) Values("cake", "1")')
    await db.query('INSERT INTO menus(title, cafe_id) Values("tea", "2")')
    await db.query('INSERT INTO menus(title, cafe_id) Values("pastries", "3")')
    console.log("***menus added***")
}

main()