const db = require('../db')

async function main () {
    await db.query('INSERT INTO cafes(name, location) Values("starbucks", "Manchester")')
    console.log("***cafes added***")
}

main()