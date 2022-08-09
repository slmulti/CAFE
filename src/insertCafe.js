const db = require('../db')

async function main () {
    await db.query('INSERT INTO cafes(name, location) Values("starbucksno", "London")')
    console.log("***cafes added***")
}

main()