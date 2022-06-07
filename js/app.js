$(document).ready(function () {
  var form = document.getElementById("frmAjax");
  $("#btnGuardar").click(function () {
    var datos = $("#frmAjax").serialize();
    var validarF = validarFormulario();

    if (validarF == 1) {
      $.ajax({
        type: "POST",
        url: "insertar.php",
        data: datos,
        success: function (respuesta) {
          if (respuesta == 1) {
            alert("Datos agregados exitosamente!");
            form.reset();
          } else {
            alert("Error al registrar los Datos");
          }
        },
      });
    } else {
      alert("No deben de haber campos vaciós para guardar la información");
    }

    return false;
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
