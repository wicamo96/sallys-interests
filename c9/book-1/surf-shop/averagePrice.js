const { inventory } = require("./data.js")

const { calculateAveragePrice } = require("./functions.js")

const averagePrice = calculateAveragePrice(inventory)

console.log(averagePrice)

