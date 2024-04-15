const {
    totalRiverKilometers, shortestRiver, longestRiver,
     expensiveRiver,  
    gimmeTheRiverDeets,  cheapRiver
 } = require("./functions.js")

 const { database } = require("./data.js")

 const { riverBreak } = require("./art.js")

const riverInfo = () => {
    const riverTotal = totalRiverKilometers(database.rivers)
    console.log(`We offer expert guidance on ${riverTotal} kilometers of scenic rivers across the US`)

    const shortRiver = shortestRiver(database.rivers)
    console.log(`The shortest river tour is ${shortRiver} kilometers`)

    const longRiver = longestRiver(database.rivers)
    console.log(`The longest river tour is ${longRiver} kilometers`)

    console.log('')

    const cheapestRivers = cheapRiver(database.rivers)
    const expensivistRivers = expensiveRiver(database.rivers)

    console.log('')
    riverBreak()
    const riverDetails = gimmeTheRiverDeets(database.rivers)
}

module.exports = { riverInfo }