const $ = function (selector) {
  return document.querySelector(selector);
};

const formGaleria = $("#formGaleria");
const tituloInput = $("#titulo");
const urlInput = $("#url");
const error = $("#error");
const galeria = $("#galeria");
const totalTexto = $("#total");
const favoritasTexto = $("#favoritas");
const noFavoritasTexto = $("#noFavoritas");

let filtro = "todas";

formGaleria.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const titulo = tituloInput.value.trim();
  const url = urlInput.value.trim();

  if (titulo === "" || url === "") {
    error.textContent = "Completa el titulo y la URL.";
    return;
  }

  crearImagen(titulo, url);
  formGaleria.reset();
  error.textContent = "";
  actualizarContadores();
  aplicarFiltro();
});

$("#borrarGaleria").addEventListener("click", function () {
  galeria.innerHTML = "";
  actualizarContadores();
});

document.querySelectorAll("[data-filtro]").forEach(function (boton) {
  boton.addEventListener("click", function () {
    filtro = boton.dataset.filtro;
    aplicarFiltro();
  });
});

function crearImagen(titulo, url) {
  const tarjeta = document.createElement("article");
  tarjeta.classList.add("tarjeta");
  tarjeta.dataset.favorita = "false";

  const imagen = document.createElement("img");
  imagen.src = url;
  imagen.alt = titulo;

  const nombre = document.createElement("h2");
  nombre.textContent = titulo;

  const acciones = document.createElement("div");
  acciones.classList.add("acciones");

  acciones.appendChild(crearBoton("Favorito", function () {
    const marcada = tarjeta.dataset.favorita === "true";
    tarjeta.dataset.favorita = String(!marcada);
    tarjeta.classList.toggle("favorita");
    actualizarContadores();
    aplicarFiltro();
  }));

  acciones.appendChild(crearBoton("Eliminar", function () {
    tarjeta.remove();
    actualizarContadores();
  }));

  tarjeta.appendChild(imagen);
  tarjeta.appendChild(nombre);
  tarjeta.appendChild(acciones);
  galeria.appendChild(tarjeta);
}

function crearBoton(texto, accion) {
  const boton = document.createElement("button");
  boton.textContent = texto;
  boton.addEventListener("click", accion);
  return boton;
}

function actualizarContadores() {
  const tarjetas = galeria.querySelectorAll(".tarjeta");
  const favoritas = galeria.querySelectorAll('.tarjeta[data-favorita="true"]');
  const noFavoritas = tarjetas.length - favoritas.length;

  totalTexto.textContent = "Total: " + tarjetas.length;
  favoritasTexto.textContent = "Favoritas: " + favoritas.length;
  noFavoritasTexto.textContent = "No favoritas: " + noFavoritas;
}

function aplicarFiltro() {
  const tarjetas = galeria.querySelectorAll(".tarjeta");

  tarjetas.forEach(function (tarjeta) {
    const esFavorita = tarjeta.dataset.favorita === "true";
    const mostrar = filtro === "todas" ||
      filtro === "favoritas" && esFavorita ||
      filtro === "no-favoritas" && !esFavorita;

    tarjeta.style.display = mostrar ? "flex" : "none";
  });
}
