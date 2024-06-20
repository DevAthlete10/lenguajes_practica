let juegos = ["tetri","Megaman","Mario 3"];
console.log(juegos);

for (const juego in juegos) {
    console.log(juego);
}

for (const juego of juegos) {
    console.log(juego);
}