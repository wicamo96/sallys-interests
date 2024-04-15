const {
    totalTrailMiles, shortestTrail, longTrail,
    cheapTrails, expensiveTrails, gimmeTheTrailDeets,
} = require("./functions.js")

const { database } = require("./data.js")

const { trailBreak } = require("./art.js")

const trailInfo = () => {
    const trailTotal = totalTrailMiles(database.trails)
    console.log(`We service ${trailTotal} miles of wilderness trails across the US`)

    const shortTrail = shortestTrail(database.trails)
    console.log(`The shortest trail is ${shortTrail} kilometers`)

    const longest = longTrail(database.trails)
    console.log(`The longest trail is ${longest} kilometers`)

    console.log('')

    const cheapestTrails = cheapTrails(database.trails)
    const expensivistTrails = expensiveTrails(database.trails)

    console.log('')

    trailBreak()
    const trailDetails = gimmeTheTrailDeets(database.trails)
}

module.exports = { trailInfo }