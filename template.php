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
