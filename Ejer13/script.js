const $ = function (selector) {
  return document.querySelector(selector);
};

const categoria = $("#categoria");
const tipo = $("#tipo");
const idioma = $("#idioma");
const chiste = $("#chiste");
const mensaje = $("#mensaje");

$("#traerChiste").addEventListener("click", traerChiste);

async function traerChiste() {
  mensaje.textContent = "Cargando chiste...";
  chiste.innerHTML = "<p>Buscando...</p>";

  try {
    const respuesta = await fetch(crearUrl());

    if (!respuesta.ok) {
      throw new Error("La API no respondio correctamente.");
    }

    const datos = await respuesta.json();

    if (datos.error) {
      throw new Error(datos.message || "No se encontro un chiste con esas opciones.");
    }

    mostrarChiste(datos);
    mensaje.textContent = "";
  } catch (error) {
    chiste.innerHTML = "<p>No se pudo cargar el chiste.</p>";
    mensaje.textContent = "Error: " + error.message;
  }
}

function crearUrl() {
  const parametros = new URLSearchParams();
  parametros.set("lang", idioma.value);

  if (tipo.value !== "any") {
    parametros.set("type", tipo.value);
  }

  const filtros = obtenerFiltros();

  if (filtros.length > 0) {
    parametros.set("blacklistFlags", filtros.join(","));
  }

  return "https://v2.jokeapi.dev/joke/" + categoria.value + "?" + parametros.toString();
}

function obtenerFiltros() {
  return Array.from(document.querySelectorAll('fieldset input[type="checkbox"]'))
    .filter(function (check) {
      return check.checked;
    })
    .map(function (check) {
      return check.value;
    });
}

function mostrarChiste(datos) {
  if (datos.type === "single") {
    chiste.innerHTML = "<p>" + datos.joke + "</p>";
    return;
  }

  chiste.innerHTML = `
    <p><strong>Pregunta:</strong> ${datos.setup}</p>
    <p><strong>Respuesta:</strong> ${datos.delivery}</p>
  `;
}
