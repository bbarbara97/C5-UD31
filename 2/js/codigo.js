function fecha() {
    let expreg = /^([0-2][0-9]|3[0-1])(\/|)(0[1-9]|1[0-2])\2(\d{4})$/;

    let fecha = document.getElementById("fecha").value;

    if (expreg.test(fecha)) {
        alert("La fecha es correcta.");
    } else {
        alert("La fecha es incorrecta. Prueba a con el formato 'DD/MM/AAAA'.")
    }
}

function email() {
    let expreg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,3})*$/;

    let email = document.getElementById("email").value;

    if (expreg.test(email)) {
        alert("El email es correcto.");
    } else {
        alert("El email es incorrecto.")
    }
}

function escapeHTML() {
    html = document.getElementById("html").value;
    let expreg = /[&"<>]/g;
    let replacements = {
        "&": '&amp;',
        "\"": '&quot;',
        "<": '&lt;',
        ">": '&gt;',
    }
    alert(html.replace(expreg, char => replacements[char]));
}

function nomApels() {
    let expreg = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;

    let nomApels = document.getElementById("nomApels").value;

    if (expreg.test(nomApels)) {
        let cambio = "";
        let array = nomApels.split(" ");
        for (var i = array.length - 1; i >= 0; i--) {
            if (i == array.length - 1) {
                cambio = array[i] + ", ";
            } else {
                cambio += array[i];
            }
        }
        alert(cambio);
    }
}

function etiquetas() {
    let etiqueta = document.getElementById("etiqueta").value;
    alert(etiqueta.replace(/<[^>]+>/g, ''));
}