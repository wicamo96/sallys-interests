const inventory = [
    { id: 1, description: "9 ft longboard surfboard", price: 499.99, type: "surfboard" },
    { id: 2, description: "5 ft shortboard surfboard", price: 399.99, type: "surfboard" },
    { id: 3, description: "Full wetsuit with hood and boots", price: 199.99, type: "clothing" },
    { id: 4, description: "Surfboard leash", price: 29.99, type: "gear" },
    { id: 5, description: "Surf wax", price: 9.99, type: "gear" },
    { id: 6, description: "Surfboard fins", price: 39.99, type: "gear" },
    { id: 7, description: "Rashguard shirt", price: 49.99, type: "clothing" },
    { id: 8, description: "Surfboard rack for car", price: 99.99, type: "gear" },
    { id: 9, description: "Beach towel", price: 24.99, type: "clothing" },
    { id: 10, description: "Surfboard repair kit", price: 19.99, type: "gear" }
]

const isSurfboard = (item) => {
    let returnValue = false

    if (item.type === "surfboard") {
        returnValue = true
    }

    return returnValue
}

const isBargain = (inventoryItem) => {
    let returnValue = false

    if (inventoryItem.price < 50.00) {
        returnValue = true
    }

    return returnValue
}

const isClothing = (item) => {
    let returnValue = false

    if (item.type === "clothing") {
        returnValue = true
    }

    return returnValue
}

const isGear = (gear) => {
    let returnValue = false

    if (gear.type === "gear" && gear.price > 50.00) {
        returnValue = true
    }

    return returnValue
}

for (const surfProduct of inventory) {
    let message = ""

    if (isClothing(surfProduct)) {
        message = `${surfProduct.description} is a clothing product`
    }

    if (isBargain(surfProduct)) {
        message = `${surfProduct.description} is currently on sale`
    }

    if (isSurfboard(surfProduct)) {
        message = `${surfProduct.description} is a surfboard`
    }

    if (isGear(surfProduct)) {
        message = `${surfProduct.description} is a surfing gear product`
    }

    if (message !== "") {
        console.log(message)
    }
}

