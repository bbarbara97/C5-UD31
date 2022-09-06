var dado1;
var dado2;
var suma;
var apariciones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (var i = 0; i < 36000; i++) {

    dado1 = Math.floor(Math.random() * (7 - 1) + 1);
    dado2 = Math.floor(Math.random() * (7 - 1) + 1);
    console.log("dado1: " + dado1 + "|| dado2:" + dado2);
    suma = dado1 + dado2;
    console.log(suma);
    apariciones[suma - 2]++;
}

for (var i = 0; i < 11; i++) {
    document.write("Numero de apariciones de " + (i + 2) + ": " + apariciones[i] + "<br>");

}