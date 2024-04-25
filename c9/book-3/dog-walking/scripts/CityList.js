import { getWalkers } from "./database.js"

const walkers = getWalkers()

document.addEventListener("click", (click) => {
    const whatWasClickedOn = click.target;

    if (whatWasClickedOn.dataset.type === "city") {
        window.alert(`This city serviced by ${whatWasClickedOn.dataset.walkername}`);
    }

})

export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const walker of walkers) {
        citiesHTML += `<li data-type="city"
                        data-walkername="${walker.name}">  
                        ${walker.city}
                    </li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

