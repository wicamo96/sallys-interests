// Get the sum of all trail miles
const totalTrailMiles = (trails) => {
    let total = 0
    for (const trail of trails) {
        total = trail.length
    }

    return total
}

// Get the shortest of all trails
const shortestTrail = (trailArray) => {
    let shortest = trailArray[0].length
    for (const trail of trailArray) {
        if(trail.length <= shortest) {
            shortest = trail.length
        }
    }

    return shortest
}

// Get the longest of all trails
const longTrail = (allTrails) => {
    let longest = 0
    for (const trail of allTrails) {
        if(trail.length > longest) {
            longest = trail.length
        }
    }

    return longest
}

// Get the total river miles 
const totalRiverKilometers = (rivers) => {
    let total = 0
    for (const river of rivers) {
        total += river.length
    }
    return total
}

// Get the shortest river distance
const shortestRiver = (rivers) => {
    let shortest = rivers[0].length
    for (const river of rivers) {
        if (river.length < shortest) {
            shortest = river.length
        }
    }
    return shortest
}

// Get the longest river distance
const longestRiver = (rivers) => {
    let longest = 0
    for (const river of rivers) {
        if (river.length > longest) {
            longest = river.length
        }
    }
    return longest
}

// Console log the least expensive trails
const cheapTrails = (trails) => {
    console.log('The least expensive trails are')
    let cheapestTrails = trails.filter(trail => trail.price === "$")
    console.log(cheapestTrails.trailName)
    // for (const trail of trails) {
    //     if (trail.price === "$") {
    //         console.log(`       ${trail.trailName}`)
    //     }
    // }
}

// Console log the most expensive trails
const expensiveTrails = (trails) => {
    console.log('The most expensive trails are')
    for (const trail of trails) {
        if (trail.price === "$$$$" || trail.price === "$$$$$") {
            console.log(`       ${trail.trailName}`)
        }
    }
}

// Console log the trail details
const gimmeTheTrailDeets = (trails) => {
    for (const trail of trails) {
        console.log(`${trail.trailName} starts at [${trail.latitude}, ${trail.longitude}] and is ${trail.length} kilometers long.`)
        console.log(`The highlighted plant for the trip is ${trail.plantHighlight}`)
        console.log('')
    }
}

// Console log the cheapest river tours
const cheapRiver = (rivers) => {
    console.log('The least expensive river tours are')
    for (const river of rivers) {
        if (river.price === "$") {
            console.log(`       ${river.river}`)
        }
    }
}

// Console log the most expensive river tours
const expensiveRiver = (rivers) => {
    console.log('The most expensive river tours are')
    for (const river of rivers) {
        if (river.price === "$$$$" || river.price === "$$$$$") {
            console.log(`       ${river.river}`)
        }  
    }
}

// Console log the river details
const gimmeTheRiverDeets = (rivers) => {
    for (const river of rivers) {
        console.log(`${river.river} starts at [${river.latitude}, ${river.longitude}] and is ${river.length} kilometers long.`)
        console.log(`The unique fish for the trip is ${river.uniqueFish}.`)
        console.log('')
    }
}

module.exports = {
    totalTrailMiles, shortestTrail, longTrail, 
    totalRiverKilometers, shortestRiver, longestRiver,
    cheapTrails, expensiveRiver, expensiveTrails, 
    gimmeTheRiverDeets, gimmeTheTrailDeets, cheapRiver
}