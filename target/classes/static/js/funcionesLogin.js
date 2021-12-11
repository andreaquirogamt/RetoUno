$(document).ready(function () {
    estadoInicial();
});

function login() {
    let email = $("#useremail").val()
    let password = $("#password").val()


    $.ajax({
        url: "http://localhost:8081/api/user/" + email + "/" + password,
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

/**
 function guardarInformacionLogin() {
 if ($("#email").val().length == 0 || $("#password").val().length == 0) {
 alert("Todos los campos son obligatorios");
 } else {
 let var2 = {
 email: $("#email").val(),
 password: $("#password").val(),
 };
 
 console.log(var2);
 $.ajax({
 type: 'POST',
 contentType: "application/json; charset=utf-8",
 dataType: 'JSON',
 data: JSON.stringify(var2),
 
 url: "http://localhost:8081/api/user",
 
 success: function (response) {
 console.log(response);
 console.log("Se guardo correctamente");
 alert("Se guardo correctamente");
 window.location.reload()
 },
 
 error: function (jqXHR, textStatus, errorThrown) {
 window.location.reload()
 alert("No se guardo correctamente");
 }
 });
 }
 }
 
 */