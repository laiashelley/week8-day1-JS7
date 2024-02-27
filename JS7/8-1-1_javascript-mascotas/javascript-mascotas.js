
function mascota(){
    let tipoAnimal = document.getElementById("tipoAnimal").value.toLowerCase();

    const mascotas = document.getElementById("mascotas");

    if (tipoAnimal == "cooper"){
        mascotas.style.backgroundImage = "url(img/cooper.jpg)";
    } else if (tipoAnimal == "taichi"){
        mascotas.style.backgroundImage = "url(img/taichi.jpg)";
    } else if (tipoAnimal == "gennai"){
        mascotas.style.backgroundImage = "url(img/gennai.jpg)";
    } else {
        alert("Debes poner uno de los nombres que te ofrecemos!!!");
    }
}
