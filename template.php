<?php
function checkInclude($file) {
    if (file_exists($file))
        include $file;
}

// Estilo de index.php
include 'header.html';
include 'Slides.html';
checkInclude('suscripcion.html');
checkInclude('informacion.html');
include 'footer.html';
echo <<<END
<script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
':35729/livereload.js?snipver=2"></' + 'script>')</script>
END
?>