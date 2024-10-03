const users = [{
        id: 1,
        name: "Cristobal",
        apellido: "Sandoval"
    },
    {
        id: 2,
        name: "Nicolas",
        apellido: "Sandoval"
    }
]


function getUserId(id, callbacks) {
    const user = users.find((user) => user.id === id);
    if (!user) return callbacks(`Usuario no encontrado ${id}`);
    return callbacks(null, user);
}

module.exports = {
    getUserId
}