const $ = function (selector) {
  return document.querySelector(selector);
};

const formTareas = $("#formTareas");
const textoTarea = $("#textoTarea");
const error = $("#error");
const listaTareas = $("#listaTareas");
const totalTexto = $("#total");
const completadasTexto = $("#completadas");
const pendientesTexto = $("#pendientes");

let filtro = "todas";

formTareas.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const texto = textoTarea.value.trim();

  if (texto === "") {
    error.textContent = "Escribe una tarea antes de agregar.";
    return;
  }

  crearTarea(texto);
  formTareas.reset();
  error.textContent = "";
  actualizarContadores();
  aplicarFiltro();
});

$("#borrarTodas").addEventListener("click", function () {
  listaTareas.innerHTML = "";
  actualizarContadores();
});

document.querySelectorAll("[data-filtro]").forEach(function (boton) {
  boton.addEventListener("click", function () {
    filtro = boton.dataset.filtro;
    aplicarFiltro();
  });
});

function crearTarea(texto) {
  const item = document.createElement("li");
  item.dataset.completada = "false";

  const span = document.createElement("span");
  span.classList.add("texto");
  span.textContent = texto;

  const acciones = document.createElement("div");
  acciones.classList.add("acciones");

  acciones.appendChild(crearBoton("Completar", function () {
    const completada = item.dataset.completada === "true";
    item.dataset.completada = String(!completada);
    item.classList.toggle("completada");
    actualizarContadores();
    aplicarFiltro();
  }));

  acciones.appendChild(crearBoton("Eliminar", function () {
    item.remove();
    actualizarContadores();
  }));

  item.appendChild(span);
  item.appendChild(acciones);
  listaTareas.appendChild(item);
}

function crearBoton(texto, accion) {
  const boton = document.createElement("button");
  boton.textContent = texto;
  boton.addEventListener("click", accion);
  return boton;
}

function actualizarContadores() {
  const tareas = listaTareas.querySelectorAll("li");
  const completadas = listaTareas.querySelectorAll('li[data-completada="true"]');
  const pendientes = tareas.length - completadas.length;

  totalTexto.textContent = "Total: " + tareas.length;
  completadasTexto.textContent = "Completadas: " + completadas.length;
  pendientesTexto.textContent = "Pendientes: " + pendientes;
}

function aplicarFiltro() {
  const tareas = listaTareas.querySelectorAll("li");

  tareas.forEach(function (tarea) {
    const completada = tarea.dataset.completada === "true";
    const mostrar = filtro === "todas" ||
      filtro === "completadas" && completada ||
      filtro === "pendientes" && !completada;

    tarea.style.display = mostrar ? "flex" : "none";
  });
}
