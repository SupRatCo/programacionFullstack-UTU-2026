const traerGatoBtn = document.querySelector("#traerGato");
const meGustaBtn = document.querySelector("#meGusta");
const noMeGustaBtn = document.querySelector("#noMeGusta");
const visor = document.querySelector("#visor");
const mensaje = document.querySelector("#mensaje");
const likesTexto = document.querySelector("#likes");
const dislikesTexto = document.querySelector("#dislikes");
const apiKey = "live_e9jgAzKiDqWBRr095be56KeVYcD9WV9fYgqIdAtLjQatgiWQQpLSMgs7tTpr1uXf";
const urlImagenes = "https://api.thecatapi.com/v1/images/search";
const urlVotos = "https://api.thecatapi.com/v1/votes";

let imagenActualId = "";
let likes = 0;
let dislikes = 0;

traerGatoBtn.addEventListener("click", traerGato);
meGustaBtn.addEventListener("click", function () {
  votar(1);
});
noMeGustaBtn.addEventListener("click", function () {
  votar(-1);
});

async function traerGato(mensajeFinal) {
  mensaje.textContent = "Cargando imagen...";
  cambiarBotonesVoto(true);

  try {
    const respuesta = await fetch(urlImagenes, {
      headers: {
        "x-api-key": apiKey
      }
    });

    if (!respuesta.ok) {
      throw new Error("La API no respondio correctamente.");
    }

    const datos = await respuesta.json();
    imagenActualId = datos[0].id;

    visor.innerHTML = `<img src="${datos[0].url}" alt="Gato aleatorio">`;
    mensaje.textContent = (mensajeFinal || "Imagen cargada.") + " ID: " + imagenActualId;
    cambiarBotonesVoto(false);
  } catch (error) {
    visor.innerHTML = "<p>No se pudo cargar la imagen.</p>";
    mensaje.textContent = "Error: " + error.message;
  }
}

async function votar(valor) {
  if (imagenActualId === "") {
    mensaje.textContent = "Primero trae una imagen.";
    return;
  }

  try {
    const respuesta = await fetch(urlVotos, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey
      },
      body: JSON.stringify({
        image_id: imagenActualId,
        value: valor
      })
    });

    if (!respuesta.ok) {
      throw new Error("No se pudo registrar el voto.");
    }

    valor === 1 ? likes++ : dislikes++;
    actualizarContadores();
    await traerGato("Voto registrado correctamente.");
  } catch (error) {
    mensaje.textContent = "Error: " + error.message;
  }
}

function actualizarContadores() {
  likesTexto.textContent = "Me gusta: " + likes;
  dislikesTexto.textContent = "No me gusta: " + dislikes;
}

function cambiarBotonesVoto(desactivados) {
  meGustaBtn.disabled = desactivados;
  noMeGustaBtn.disabled = desactivados;
}
