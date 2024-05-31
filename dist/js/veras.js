document.getElementById('menu-icon').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var sidebar__1 = document.getElementById('sidebar__1');
    var sidebar__2 = document.getElementById('sidebar__2');
    var sidebar__3 = document.getElementById('sidebar__3');
    var sidebar__4 = document.getElementById('sidebar__4');
    var sidebar__5 = document.getElementById('sidebar__5');
    if (sidebar.style.right === '-310px') { /* Ajusta esto según el ancho de tu barra lateral */
        sidebar.style.right = '0px';
    } else {
        sidebar.style.right = '-310px'; /* Ajusta esto según el ancho de tu barra lateral */
        sidebar__1.style.right = '-620px';
        sidebar__2.style.right = '-620px';
        sidebar__3.style.right = '-620px';
        sidebar__4.style.right = '-620px';
        sidebar__5.style.right = '-620px';
    }
});

document.getElementById('option1').addEventListener('click', function() {
    var sidebar__1 = document.getElementById('sidebar__1');
    var sidebar__2 = document.getElementById('sidebar__2');
    var sidebar__3 = document.getElementById('sidebar__3');
    var sidebar__4 = document.getElementById('sidebar__4');
    var sidebar__5 = document.getElementById('sidebar__5');
    if (sidebar__1.style.right === '-620px') { /* Ajusta esto según el ancho de tu barra lateral */
        sidebar__1.style.right = '310px';
        sidebar__2.style.right = '-620px';
        sidebar__3.style.right = '-620px';
        sidebar__4.style.right = '-620px';
        sidebar__5.style.right = '-620px';
    } else {
        sidebar__1.style.right = '-620px'; /* Ajusta esto según el ancho de tu barra lateral */
    }
});

document.getElementById('option2').addEventListener('click', function() {
    var sidebar__1 = document.getElementById('sidebar__1');
    var sidebar__2 = document.getElementById('sidebar__2');
    var sidebar__3 = document.getElementById('sidebar__3');
    var sidebar__4 = document.getElementById('sidebar__4');
    var sidebar__5 = document.getElementById('sidebar__5');
    if (sidebar__2.style.right === '-620px') { /* Ajusta esto según el ancho de tu barra lateral */
        sidebar__2.style.right = '310px';
        sidebar__1.style.right = '-620px';
        sidebar__3.style.right = '-620px';
        sidebar__4.style.right = '-620px';
        sidebar__5.style.right = '-620px';
    } else {
        sidebar__2.style.right = '-620px'; /* Ajusta esto según el ancho de tu barra lateral */
    }
});

document.getElementById('option3').addEventListener('click', function() {
    var sidebar__1 = document.getElementById('sidebar__1');
    var sidebar__2 = document.getElementById('sidebar__2');
    var sidebar__3 = document.getElementById('sidebar__3');
    var sidebar__4 = document.getElementById('sidebar__4');
    var sidebar__5 = document.getElementById('sidebar__5');
    if (sidebar__3.style.right === '-620px') { /* Ajusta esto según el ancho de tu barra lateral */
        sidebar__3.style.right = '310px';
        sidebar__2.style.right = '-620px';
        sidebar__1.style.right = '-620px';
        sidebar__4.style.right = '-620px';
        sidebar__5.style.right = '-620px';
    } else {
        sidebar__3.style.right = '-620px'; /* Ajusta esto según el ancho de tu barra lateral */
    }
});

document.getElementById('option4').addEventListener('click', function() {
    var sidebar__1 = document.getElementById('sidebar__1');
    var sidebar__2 = document.getElementById('sidebar__2');
    var sidebar__3 = document.getElementById('sidebar__3');
    var sidebar__4 = document.getElementById('sidebar__4');
    var sidebar__5 = document.getElementById('sidebar__5');
    if (sidebar__4.style.right === '-620px') { /* Ajusta esto según el ancho de tu barra lateral */
        sidebar__4.style.right = '310px';
        sidebar__2.style.right = '-620px';
        sidebar__3.style.right = '-620px';
        sidebar__5.style.right = '-620px';
        sidebar__1.style.right = '-620px';
    } else {
        sidebar__4.style.right = '-620px'; /* Ajusta esto según el ancho de tu barra lateral */
    }
});

document.getElementById('option5').addEventListener('click', function() {
    var sidebar__1 = document.getElementById('sidebar__1');
    var sidebar__2 = document.getElementById('sidebar__2');
    var sidebar__3 = document.getElementById('sidebar__3');
    var sidebar__4 = document.getElementById('sidebar__4');
    var sidebar__5 = document.getElementById('sidebar__5');
    if (sidebar__5.style.right === '-620px') { /* Ajusta esto según el ancho de tu barra lateral */
        sidebar__5.style.right = '310px';
        sidebar__2.style.right = '-620px';
        sidebar__3.style.right = '-620px';
        sidebar__4.style.right = '-620px';
        sidebar__1.style.right = '-620px';
    } else {
        sidebar__5.style.right = '-620px'; /* Ajusta esto según el ancho de tu barra lateral */
    }
});


