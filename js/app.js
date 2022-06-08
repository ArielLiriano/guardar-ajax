$(document).ready(function () {
  var form = document.getElementById("frmAjax");
  $("#btnGuardar").click(function (e) {
    e.preventDefault();
    var datos = $("#frmAjax").serialize();
    var validarF = validarFormulario();

    if (validarF == 1) {
      $.ajax({
        type: "POST",
        url: "insertar.php",
        data: datos,
        success: function (respuesta) {
          if (respuesta == 1) {
            // alert("Datos agregados exitosamente!");
            swal.fire({
              title: "Datos agregados exitosamente",
            });
            form.reset();
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "No fue posible registrar la información!",
              footer: '<a href="">Intente otra vez!</a>',
            });
          }
        },
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos deben de estar llenos para guardar!",
        footer: '<a href="">Tienes alguna pregunta?</a>',
      });
    }

    // return false;
  });

  function validarFormulario() {
    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();
    var usuario = $("#usuario").val();
    var password = $("#password").val();
    if (nombre != "" && apellido != "" && usuario != "" && password != "") {
      return 1;
    } else {
      return 0;
    }
  }
});
