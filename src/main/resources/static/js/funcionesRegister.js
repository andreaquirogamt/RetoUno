$(document).ready(function () {
    estadoInicial();
});

function registrar() {
    if ($("#useremail").val().length == 0 || $("#password").val().length == 0 || $("#username").val().length == 0 || $("#passwordrepeat").val().length == 0) {
        alert("Todos los campos son obligatorios");
    } else {
        let name = $("#username").val()
        let email = $("#useremail").val()
        let password = $("#password").val()
        let repeatpassword = $("#passwordrepeat").val()
    }
    let datos = {
        email: $("#useremail").val(),
        password: $("#password").val(),
        name: $("#username").val()
    }

    let datosPeticion = JSON.stringify(datos)

    $.ajax({
        url: "http://150.136.240.24:8080/api/user/new",
        data: datosPeticion,
        type: 'POST',
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

    if (id == null){
        alert("Usuario no registrado : " + nombre)
    }else{
        alert("Bienvenido: " + id + " " + nombre)
    }
}

function estadoInicial() {
    $("#useremail").focus();
}