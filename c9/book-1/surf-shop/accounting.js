const { inventory } = require("./data.js")

const { convertDataForAccounting } = require("./functions.js")

for (const product of inventory) {
    const modifiedData = convertDataForAccounting(product)
    console.log(modifiedData)
}

console.log("\n------------------------\n")