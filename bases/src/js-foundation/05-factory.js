// const { getId } = require('../plugins/get-id.plugin');

// const buildPerson = ({ name, apellido }) => {
//     return {
//         id: getId(),
//         name: name,
//         apellido: apellido,
//         sexo: "Hombre"
//     }
// }

// const obj = { name: "Cristobal", apellido: "Sandoval" };

// const yo = buildPerson(obj);

const makeBuildPerson = (getId) => {
    return ({ nombre, apellido }) => {
        return {
            id: getId(),
            nombre,
            apellido,
            sexo: "Hombre"
        }
    }
}


module.exports = {
    makeBuildPerson
}