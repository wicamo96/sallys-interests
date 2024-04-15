const { 
    database
} = require("./data.js")

const payTribute = (id, description, queenId) => {
    const tributeObject = {
        id: id,
        description: description,
        queenId: queenId
    }
    database.tributeChest.push(tributeObject)
}



const createQueen = (id, name) => {
    const queenObject = {
        id: id,
        name: name
    }

    database.queens.push(queenObject)
}

const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}

const checkQueen = (id) => {
    return database.tributeChest.queenId === id;
}

module.exports = { 
    payTribute, createQueen, hailTheQueen, checkQueen
}