const { httpClientPlugin } = require('../plugins');

const getPokemonById = async(id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemon = await httpClientPlugin.get(url);

    return pokemon.name;

    // return fetch(url)
    //     .then((response) => response.json())
    //     .then((pokemon) => pokemon.name);

    // const resp = await fetch(url);
    // const pokemon = await resp.json();
    // return pokemon.name;
}


module.exports = getPokemonById;