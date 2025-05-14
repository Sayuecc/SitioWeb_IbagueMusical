let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("main_img");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// Avance automático cada 5 segundos
setInterval(() => {
  plusSlides(1);
}, 5000); // 5000 milisegundos = 5 segundos

//barra de navegación

 function showSidebar() {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
    }

    function hideSidebar() {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'
    }
//menu dropdown de fiestas
const dropdown = document.querySelector('.dropdown');
const submenu = dropdown.querySelector('.submenu');

dropdown.addEventListener('mouseover', () => {
  submenu.style.display = 'block';
});

dropdown.addEventListener('mouseout', () => {
  submenu.style.display = 'none';
});
//mensaje bienvenida
// Diccionario de idiomas
  const mensajes = {
    es: "¡Empieza tu recorrido por la senda del Tolima!",
    en: "Welcome to our website!"
    };

    let idiomaActual = "es";

    // Crear el contenedor del mensaje
    const mensajeDiv = document.createElement("div");
    mensajeDiv.classList.add("mensaje-bienvenida");
    document.body.appendChild(mensajeDiv);

    function mostrarMensaje() {
      mensajeDiv.textContent = mensajes[idiomaActual];
      mensajeDiv.style.display = "block";
      setTimeout(() => {
        mensajeDiv.style.display = "none";
      }, 3000);
    }
    function cambiarIdioma(idioma) {
      idiomaActual = idioma;
      mostrarMensaje();
    }

    // Añade listeners a cada bandera
const banderas = [
  { id: "bandera-es-mobile", idioma: "es" },
  { id: "bandera-en-mobile", idioma: "en" },
  { id: "bandera-es-desktop", idioma: "es" },
  { id: "bandera-en-desktop", idioma: "en" }
];

banderas.forEach(({ id, idioma }) => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      cambiarIdioma(idioma);
    });
  }
});

// Mensaje al cargar
window.addEventListener("load", mostrarMensaje);