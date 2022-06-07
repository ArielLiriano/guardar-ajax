<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/estilos.css">
    <title>Insertar Con ajax</title>
</head>

<body>

    <div class="contenedor">
        <form id="frmAjax" method="post">
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre" placeholder="Nombre" required>

            <label for="Apellido">Apellido</label>
            <input type="text" name="apellido" id="apellido" placeholder="Apellido" required>

            <label for="usuario">Usuario</label>
            <input type="text" name="usuario" id="usuario" placeholder="Usuario" required>

            <label for="password">Contraseña</label>
            <input type="password" name="password" id="password" placeholder="Contraseña" required>

            <button id="btnGuardar">Guardar Datos</button>

        </form>
    </div>

    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/app.js"></script>
</body>

</html>