var num1;
var num2;
var operador;



function refresh() {
    document.getElementById("resultado").value = num1;
}

function darC() {
    num1 = 0;
    num2 = 0;
    refresh();
}

function darNum(num) {
    if (num1 == 0 && num1 !== '0.') {
        num1 = num;
    } else {
        num1 += num;
    }

    refresh();
}

function darComa() {
    if (num1 == 0) {
        num1 = '0.';
    } else if (num1.indexOf('.') == -1) {
        num1 += '.';
    }
    refrescar();
}

function darOperador(op) {
    if (num1 == 0) {
        num1 = parseFloat(document.getElementById("resultado").value);
    }
    num2 = parseFloat(num1);
    num1 = 0;
    operador = op;
}

function darIgual() {
    num1 = parseFloat(num1);
    switch (operador) {
        case 1:
            num1 += num2;
            break;
        case 2:
            num1 = num2 - num1;
            break;
        case 3:
            num1 *= num2;
            break;
        case 4:
            num1 = num2 / num1;
            break;
        case 5:
            num1 = Math.pow(num2, num1);
            break;
        case 6:
            num1 = num2 % num1;
            break;
    }
    refresh();
    num2 = parseFloat(num1);
    num1 = 0;
}

function darRaiz() {
    num1 = Math.sqrt(num1);
    refresh();
    num2 = parseFloat(num1);
    num1 = 0;
}

function darFraccion() {
    num1 = 1 / num1;
    refresh();
    num2 = parseFloat(num1);
    num1 = 0;
}

function darCambio() {
    let sign = Math.sign(num1);
    if (sign == 1) {
        num1 = -num1;
    } else {
        num1 = +num1;
    }
    refresh();
}