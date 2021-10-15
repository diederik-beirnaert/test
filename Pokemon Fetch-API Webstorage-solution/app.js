/**
 * Get Some Pokemon!
 */

const getPokemon = async () => {
  const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/');
  const jsonData = await pokemon.json();
  return jsonData.results;
}

const storePokemon = (pokemon) => {
  if(!localStorage.getItem('pokemon')) {
    localStorage.setItem('pokemon', JSON.stringify(pokemon));
  }
}

const changePokemon = (pokemonName, newName) => {
   // get the array
  const pokemon = localStorage.getItem('pokemon');

  // set a new array
  if(!pokemon) return;

  // parse to JSON
  const parsedPokemon = JSON.parse(pokemon);

  // get the name on a certain id
  const updatedArray = parsedPokemon.map(p => p.name === pokemonName ? { ...p, name: newName } : p);

  // set updated array
  localStorage.setItem('pokemon', JSON.stringify(updatedArray));
}

getPokemon()
  .then(storePokemon)
  .then(() => changePokemon('bulbasaur', 'CoolPokemon!'));
