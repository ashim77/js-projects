// You have a list of cities and their populations as an array of objects. Convert this data into a Map where the city names are the keys, and the populations are the values. Write a function addCity to add a new city and its population to the Map

const cityData = [
    {city: "New York City", Population: 8400000},
    {city: "Los Angeles", Population: 37900000},
    {city: "Chicago", Population: 2600000},
    {city: "Houston", Population: 2100000},
    {city: "Philadelphia", Population: 1500000}
]

function addCity(city, population) {
    cityData.push({city, population});
}

addCity("Miami", 2500000);

console.log(cityData);