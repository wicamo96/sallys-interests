// This variable is a string, const used when we aren't allowed to reassign
const myName = "Will"

// This variable is an integer
let myMoney = 20

// This variable is a boolean, scope becomes weird when using var
var amHungry = true

myMoney = 12

const myPerson = {
    name: "Will",
    cash: 20,
    amHungry: amHungry
}

const myArray = [0,1,2,3,4,5,6,7,8,9,10]

myArray.push(11)

// console.log(myArray.length)

const objArray = [{
    name: "Will",
    cash: 20,
    amHungry: amHungry
},
{
    name: "Joe",
    cash: 20,
    amHungry: amHungry
},
{
    name: "Ken",
    cash: 20,
    amHungry: amHungry
},
{
    name: "Mark",
    cash: 20,
    amHungry: amHungry
}
    
]

// console.log(objArray[2].name)


/*
for (let i = 0; i < objArray.length; i++) {
    console.log(objArray[i], i)
}
*/

/*
for (const person of objArray) {
    console.log(person.name)
}

function sayHelloToAFriend(friendName) {
    console.log(`hello ${friendName}`)
}


const sayHelloToAFriend = (friendName) => {
    console.log(`hello ${friendName}`)
}


const sayHelloToAFriend = (friendName) => {
    return `hello ${friendName}`
}

const hiIris = sayHelloToAFriend("Iris")
console.log(hiIris)

const hiLJ = sayHelloToAFriend("LJ")
console.log(hiLJ)
*/

const ourNames = ["Tommy", "Andrew", "Iris", "Macey", "Caila", "Will", "Jessica", "Seth", "LJ", "Fiona"]

const list = (array) => {
    for (const name of array) {
        console.log(name)
    }
}

list(ourNames)