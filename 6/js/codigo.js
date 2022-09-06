function hora() {
    var fecha = new Date();
    var hora = fecha.getHours();
    var min = ("0" + fecha.getMinutes()).slice(-2);
    var sec = ("0" + fecha.getSeconds()).slice(-2);


    // Hago un div y divs dentro, cada div seria una hora minuto segundo, otro para el día y uno para el año
    // span id=hora y saldrá la hora
    // cada 1000 milisegundos se vuelva a recargar
    document.getElementById("hora").innerHTML = hora;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
}

var mireloj = setInterval(hora, 1000)