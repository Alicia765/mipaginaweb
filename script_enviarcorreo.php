<?php
$nombre= $_POST['nombre'];
$email= $_POST['email'];
$fono= $_POST['fono'];

$header= 'From:' . $email . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje= "Este mensaje fue enviado por " . $nombre . ", con telefono " . $fono . " \r\n";
$mensaje .= "Su e-mail es: " . $email . " \r\n";
$mensaje .= "Mensaje: " . $_POST['comentarios'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time()) . "  \r\n";

$para= 'pedro.rios.atenas@gmail.com';
$asunto= 'solicitud de informacion';

mail($para, $asunto, utf8_decode($mensaje), $header);

echo '<script>alert("Su correo fue enviado exitosamente");
		window.location.href="index.html";
		</script>';
		exit;
?>