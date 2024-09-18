const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey"
];

// 1)
// create a loop that prints all
// the pokemons from the pokemons array
// invoke the function to see that it works
for (let pokemon of pokemons) {
  console.log(pokemon)
  }

// 2)
// Create an object for the pokemon Pikachu.
// it could have properties such as name, element,
// strength, color, amountOfLegs or something like that.
const pokemon = {
  name: "Pikachu",
  element: "electricity",
  strength: 50,
  color: "yellow",
  amountOfLegs: 4
}

// 3)
// console.log something like
// 'Pikachu is a electricity pokemon with the strength of 32'
// Selecting some of the information about your pikachu object.
console.log(`${pokemon.name} is a ${pokemon.element} pokemon with the strength of ${pokemon.strength} and in color of ${pokemon.color} with ${pokemon.amountOfLegs} legs.`)

// 4)
// Add the property stillToCatch: true to the Pikachu object.
pokemon.stillToCatch = true

console.log(pokemon)


// 5)
// change the value of the key strength in the Pikachu object.
pokemon.strength = 30
console.log(pokemon)

// 6)
// Delete a property from the Pikachu object.
delete pokemon.element
console.log(`${pokemon.name} is a ${pokemon.element} pokemon with the strength of ${pokemon.strength} and in color of ${pokemon.color} with ${pokemon.amountOfLegs} legs.`)

// 7)
// Fill up this array with a few more pokemons.
// It is an array with objects!
// I made some suggestions
// but feel free to change as you want.
const moreAboutPokemons = [
  {
    name: "Pikachu",
    element: "electricity",
    strength: 32
  },
  {
    name: "Bulbasaur",
    element: "water",
    strength: 13
  },
  {
    name: "Charmander",
    element: "fire",
    strength: 32
  }
];

// 8)
// Print out all the NAMES of the pokemons in this new array.
const printMoreNames = () => {
  // ************* forEach method *****************
  
  /*
  moreAboutPokemons.forEach(moreName => { //a simplified return arrow function
    console.log(moreName.name)  // Access and print the name of each Pokémon
  })
  */
  
  // ************* for...of loop *****************
  for (const moreName of moreAboutPokemons) {
    console.log(moreName.name)
  }
}

// invoke the function to see that it works
printMoreNames()

// 9)
// Print out something like
// 'Bulbasaur is a water pokemon with the strength of 32'
// Do this for all the pokemons.

const aboutPokemon = (aboutName, aboutElement, aboutStrength) => {
  console.log(`${aboutName} is a ${aboutElement} pokemon with the strenght of ${aboutStrength}`)
}

const printPokemonDetails = () => {
  for (const pokemon of moreAboutPokemons) {
    aboutPokemon(pokemon.name, pokemon.element, pokemon.strength)
  }
}

printPokemonDetails()

    



