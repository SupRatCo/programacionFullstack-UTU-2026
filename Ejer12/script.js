const formColeccion = document.querySelector("#formColeccion");
const mensajeError = document.querySelector("#mensajeError");
const tarjetas = document.querySelector("#tarjetas");
const contador = document.querySelector("#contador");
const modoBtn = document.querySelector("#modoBtn");
const botonesFiltro = document.querySelectorAll("[data-filtro]");

let filtroActual = "Todos";

formColeccion.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nombre = document.querySelector("#nombre").value.trim();
  const descripcion = document.querySelector("#descripcion").value.trim();
  const tipo = document.querySelector("#tipo").value;
  const estado = document.querySelector("#estado").value;
  const calificacion = Number(document.querySelector("#calificacion").value);
  const imagen = document.querySelector("#imagen").value.trim();

  if (nombre === "" || descripcion === "" || tipo === "" || estado === "" || imagen === "") {
    mensajeError.textContent = "Completa todos los campos importantes.";
    return;
  }

  if (calificacion < 1 || calificacion > 5) {
    mensajeError.textContent = "La calificacion debe estar entre 1 y 5.";
    return;
  }

  crearTarjeta(nombre, descripcion, tipo, estado, calificacion, imagen);
  formColeccion.reset();
  mensajeError.textContent = "";
  actualizarContador();
  aplicarFiltro();
});

modoBtn.addEventListener("click", function () {
  document.body.classList.toggle("oscuro");
});

botonesFiltro.forEach(function (boton) {
  boton.addEventListener("click", function () {
    filtroActual = boton.dataset.filtro;
    aplicarFiltro();
  });
});

function crearTarjeta(nombre, descripcion, tipo, estado, calificacion, imagen) {
  const tarjeta = document.createElement("article");
  tarjeta.classList.add("tarjeta");
  tarjeta.dataset.tipo = tipo;
  tarjeta.dataset.estado = estado;
  tarjeta.dataset.favorito = "false";

  const foto = document.createElement("img");
  foto.setAttribute("src", imagen);
  foto.setAttribute("alt", nombre);

  const titulo = document.createElement("h2");
  titulo.textContent = nombre;
  titulo.addEventListener("click", function () {
    titulo.classList.toggle("resaltado");
  });

  const datos = document.createElement("div");
  datos.innerHTML = `
    <p>${descripcion}</p>
    <p><strong>Tipo:</strong> ${tipo}</p>
    <p><strong>Estado:</strong> <span class="estado">${estado}</span></p>
    <p><strong>Calificacion:</strong> ${calificacion}/5</p>
  `;

  const acciones = document.createElement("div");
  acciones.classList.add("acciones");

  const cambiarEstado = document.createElement("button");
  cambiarEstado.textContent = "Cambiar estado";
  cambiarEstado.addEventListener("click", function () {
    const estadoNuevo = siguienteEstado(tarjeta.dataset.estado);
    tarjeta.dataset.estado = estadoNuevo;
    tarjeta.querySelector(".estado").textContent = estadoNuevo;
    aplicarFiltro();
  });

  const favorito = document.createElement("button");
  favorito.textContent = "Favorito";
  favorito.addEventListener("click", function () {
    const esFavorito = tarjeta.dataset.favorito === "true";
    tarjeta.dataset.favorito = String(!esFavorito);
    tarjeta.classList.toggle("favorito");
    aplicarFiltro();
  });

  const eliminar = document.createElement("button");
  eliminar.textContent = "Eliminar";
  eliminar.addEventListener("click", function () {
    tarjeta.remove();
    actualizarContador();
  });

  acciones.appendChild(cambiarEstado);
  acciones.appendChild(favorito);
  acciones.appendChild(eliminar);

  tarjeta.appendChild(foto);
  tarjeta.appendChild(titulo);
  tarjeta.appendChild(datos);
  tarjeta.appendChild(acciones);
  tarjetas.appendChild(tarjeta);
}

function siguienteEstado(estado) {
  if (estado === "Pendiente") {
    return "En progreso";
  }

  if (estado === "En progreso") {
    return "Terminado";
  }

  return "Pendiente";
}

function actualizarContador() {
  const cantidad = document.querySelectorAll(".tarjeta").length;
  contador.textContent = "Elementos agregados: " + cantidad;
}

function aplicarFiltro() {
  const todasLasTarjetas = document.querySelectorAll(".tarjeta");

  todasLasTarjetas.forEach(function (tarjeta) {
    let mostrar = filtroActual === "Todos";

    if (filtroActual === tarjeta.dataset.tipo || filtroActual === tarjeta.dataset.estado) {
      mostrar = true;
    }

    if (filtroActual === "Favoritos" && tarjeta.dataset.favorito === "true") {
      mostrar = true;
    }

    tarjeta.style.display = mostrar ? "flex" : "none";
  });
}
