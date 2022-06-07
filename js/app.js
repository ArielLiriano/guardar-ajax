$(document).ready(function () {
  var form = document.getElementById("frmAjax");
  $("#btnGuardar").click(function () {
    var datos = $("#frmAjax").serialize();

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

    return false;
  });
});
