$(document).ready(function () {
    estadoInicial();
});

function login() {
    let email = $("#useremail").val()
    let password = $("#password").val()


    $.ajax({
        url: "http://150.136.240.24:8080/api/user/" + email + "/" + password,
        type: 'GET',
        contentType: "application/JSON",
        dataType: 'json',

        success: function (respuesta) {
            console.log(respuesta);
            resultado(respuesta);
        },

        error: function (xhr, status) {
            console.log("Hubo un error");
        },

        complete: function (xhr, status) {
            console.log("Todo esta correcto" + status);
        }
    });
}

function resultado(respuesta) {
    let id = respuesta.id
    let nombre = respuesta.name

    if (id == null) {
        alert("Usuario no registrado : " + nombre)
    } else {
        alert("Bienvenido: " + id + " " + nombre)
    }

}

function estadoInicial() {
    $("#useremail").focus();
}