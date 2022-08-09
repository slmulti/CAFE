const db = require('../db')

// async function main(){
//     //show all cafe names
//     const [data, meta] = await db.query('SELECT name FROM cafes')
//     console.log(data)
// }

// main()

// async function main(){
//     //show all cafe and their menus
//     const [data, meta] = await db.query('SELECT cafes.name, menus.title FROM cafes JOIN menus ON cafes.id = menus.id')
//     console.log(data)
// }

// main()

// async function main(){
//     //show all cafe and their menus
//     const [data, meta] = await db.query('SELECT * FROM menus')
//     console.log(data)
// }

// main()

async function main(){
    //show all cafe and their menus
    const [data, meta] = await db.query('SELECT menus.title FROM menus')
    console.log(data)
}

main()

