function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('open');
  }
  


  function mostrarMensaje() {
    var correo = document.getElementById("correo").value;
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;

    var mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = "Gracias por completar el formulario, pronto nos pondremos en contacto contigo al correo electrónico que registraste para que sigas recibiendo información actualizada de tus artistas favoritos y sus próximos eventos.<br>";
    mensaje.innerHTML += "Correo electrónico registrado: " + correo + "<br>";
    mensaje.style.display = "block";

    return false; // Evita que la página se recargue después de enviar el formulario
  }





 //para la secuencia de imágenes

  var imagenes = ['./Imagen1.png']; 
  var indice = 0;
  var tiempoIntervalo = 1000; // Tiempo entre cada imagen
  var imagenSecuencia = document.getElementById('image-container');
  function cambiarImagen() {
    if(indice == imagenes.length)
    indice = 0
    imagenSecuencia.src = imagenes[indice];
    indice ++
  }
  
  setInterval(cambiarImagen, tiempoIntervalo);


  var imagenes = ['./Imagen2.png']; 
  var indice = 0;
  var tiempoIntervalo = 1000; // Tiempo entre cada imagen
  var imagenSecuencia = document.getElementById('Contenedor-imagen');
  function cambiarImagen() {
    if(indice == imagenes.length)
    indice = 0
    imagenSecuencia.src = imagenes[indice];
    indice ++
  }
  
  setInterval(cambiarImagen, tiempoIntervalo);