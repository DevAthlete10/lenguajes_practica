// const { emailTemplate } = require('./js-foundation/01-template');

// require('./js-foundation/02-destructuring');
// const { getUserId } = require('./js-foundation/03-callbacks');

// getUserId(1, (error, user) => {
//     if (error) throw new Error("User no find");
//     console.log(user);
//     console.log(`Usuario encontrado ${user.name}`);
// })
// console.log(emailTemplate);
// const { getId } = require('./plugins/get-id.plugin');
// const { makeBuildPerson } = require("./js-foundation/05-factory");

// const buildPerson = makeBuildPerson(getId);

// const dataPersonal = { nombre: "Cristobal", apellido: "Sandoval" }

// const yo = buildPerson(dataPersonal);

// console.log(yo);

const getPokemonById = require('./js-foundation/06-promises');

const pokemon = getPokemonById(1)
    .then((pokemon) => console.log(pokemon))
    .catch((error) => console.log(`Error nuevo ${error}`));