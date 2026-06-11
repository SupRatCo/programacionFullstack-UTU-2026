const $ = function (selector) {
  return document.querySelector(selector);
};

const tituloPrincipal = $("#tituloPrincipal");
const parrafo = $("#parrafo");
const imagenDemo = $("#imagenDemo");
const mensajeInput = $("#mensajeInput");
const listaDemo = $("#listaDemo");
const formDatos = $("#formDatos");
const error = $("#error");
const resultado = $("#resultado");
const imagenes = [
  "https://picsum.photos/id/1015/600/300",
  "https://picsum.photos/id/1025/600/300"
];

let numeroItem = 1;
let imagenActual = 0;

$("#cambiarTitulo").addEventListener("click", function () {
  tituloPrincipal.textContent = "El titulo fue cambiado con textContent";
});

$("#cambiarParrafo").addEventListener("click", function () {
  parrafo.innerHTML = "Este parrafo ahora tiene <strong>contenido HTML</strong> agregado desde JavaScript.";
});

$("#cambiarImagen").addEventListener("click", function () {
  imagenActual = imagenActual === 0 ? 1 : 0;
  imagenDemo.src = imagenes[imagenActual];
});

$("#mostrarAlert").addEventListener("click", function () {
  alert(mensajeInput.value);
});

$("#agregarClase").addEventListener("click", function () {
  parrafo.classList.add("destacado");
});

$("#quitarClase").addEventListener("click", function () {
  parrafo.classList.remove("destacado");
});

$("#modoOscuro").addEventListener("click", function () {
  document.body.classList.toggle("oscuro");
});

$("#agregarItem").addEventListener("click", function () {
  numeroItem++;
  const item = document.createElement("li");
  item.textContent = "Elemento creado numero " + numeroItem;
  listaDemo.appendChild(item);
});

formDatos.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nombre = $("#nombre").value.trim();
  const color = $("#color").value;
  const mensaje = $("#mensajeForm").value.trim();

  if (nombre === "" || mensaje === "") {
    error.textContent = "Completa todos los campos.";
    return;
  }

  error.textContent = "";
  crearTarjeta(nombre, color, mensaje);
  formDatos.reset();
});

function crearTarjeta(nombre, color, mensaje) {
  const tarjeta = document.createElement("article");
  tarjeta.classList.add("tarjeta");
  tarjeta.style.borderColor = color;

  const titulo = document.createElement("h3");
  titulo.textContent = nombre;
  titulo.style.color = color;

  const texto = document.createElement("p");
  texto.textContent = mensaje;

  tarjeta.appendChild(titulo);
  tarjeta.appendChild(texto);
  resultado.appendChild(tarjeta);
}
