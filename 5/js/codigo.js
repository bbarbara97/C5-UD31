window.onload = function() {
    desc = document.getElementById("descripcion");
}

let array = ["Foto 1", "Foto 2", "Foto 3", "Foto 4", "Foto 5", "Foto 6", "Foto 7", "Foto 8"];

function cambiarImagen(num) {
    foto = "img/foto" + num + ".jpg";
    document.images["principal"].src = foto;

    texto = array[num - 1];
    // alert(texto);
    desc.innerHTML = texto;
}