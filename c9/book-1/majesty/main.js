/*
    Define a function with a single parameter. When the function
    is invoked, an argument is required.
*/
const { database } = require("./data.js")
const { payTribute, createQueen, hailTheQueen, checkQueen } = require("./functions.js")

createQueen(1, "Trinity Terry")
createQueen(2, "Sydney Noh")
createQueen(3, "Christina Ashworth")
createQueen(4, "Aja Washington")

payTribute(1, "gold", 1)
payTribute(2, "silver", 2)
payTribute(3, "bronze", 3)



for (const queen of database.queens) {
    const hailMessage = hailTheQueen(queen.name)
    console.log(hailMessage)
}

for (const queen of database.queens) {
    const message = database.tributeChest.find(singleTribute => singleTribute.queenId === queen.id)
    if (message === undefined) {
        return
    }
    console.log(`${queen.name} has tribute ${message.description}`)
}

// for (const queen of database.queens) {
//     const tribute = database.tributeChest.find(queen.id)
//     console.log(`${queen.name} has tribute ${tribute.description}`) 
// }

// for (const queen of database.queens) {
//     for (const tribute of database.tributeChest) {
//         if (queen.id === tribute.queenId) {
//             console.log(`${queen.name} has tribute ${tribute.description}`)
//         }
//     }
// }