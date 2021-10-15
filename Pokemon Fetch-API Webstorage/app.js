/**
 * Get Some Pokemon!
 */
// TODO: Create a function that will fetch 20 pokemon via the endpoint https://pokeapi.co/api/v2/pokemon/
const getPokemon = async () => {
  const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const jsonData = await pokemon.json();
  return jsonData.results;
};
// TODO: Create a function that will store pokemon in the localstorage.
const storePokemon = (pokemon) => {
  if (!localStorage.getItem("pokemon")) {
    localStorage.setItem("pokemon", JSON.stringify(pokemon));
  }
};
// IMPORTANT: NEVER overwrite an existing pokomen array in storage

// TODO: Create a function that can change the name of an existing pokemon in the localStorage
// by giving the pokemonName and the newName as a parameter
const changePokemon = (pokeName, newPokeName) => {
  const pokemon = localStorage.getItem("pokemon");

  //validate
  if (!pokemon) return;

  //parse to JSON
  const parsedPokemon = JSON.parse(pokemon);

  //create new array with Updated pokemon
  //Altijd arrow function als parameter meegeven bij mapfunction
  //p slaat op een pokemon uit de array van pokemons
  // ...p  = spreadoperator. gaat over alle values en steekt in dit geval alle elementen van p aan een nieuw object. daarna veranderen we name naar de nieuwe naam.
  //arrowfuncie moet iets returnen dus daarom maken we nieuw object dat kan gereturned worden ipv oude object aan te passen.
  //laatste :p is voor als er een "false" is (vb charmender ipv bulbasuar) dan wordt het originele object geretourneerd naar de array.
  //dus eig if functie met if true: maak nieuw object met nieuwe naam, if false, return oude object.
  const updatedArray = parsedPokemon.map((p) =>
    p.name === pokeName ? { ...p, name: newPokeName } : p
  );

  //update storage
  localStorage.setItem("pokemon", JSON.stringify(updatedArray));
};

// You should end up with this chain:
getPokemon()
  .then(storePokemon)
  .then(() => changePokemon("bulbasaur", "CoolPokemon!"));
