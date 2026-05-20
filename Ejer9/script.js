const listaEjercicios = document.getElementById("listaEjercicios");
const tituloEjercicio = document.getElementById("tituloEjercicio");
const descripcionEjercicio = document.getElementById("descripcionEjercicio");
const zonaFormulario = document.getElementById("zonaFormulario");
const resultado = document.getElementById("resultado");

const ejercicios = [
  {
    id: 1,
    titulo: "1- Mostrar un mensaje en pantalla",
    descripcion: "Mostrar el mensaje: Hola mundo.",
    mostrar: function () {
      zonaFormulario.innerHTML = `
        <button onclick="mostrarResultado('Hola mundo')">Mostrar mensaje</button>
      `;
    }
  },
  {
    id: 2,
    titulo: "2- Pedir un nombre al usuario",
    descripcion: "Escribe un nombre y se mostrará: Hola Juan.",
    mostrar: function () {
      zonaFormulario.innerHTML = `
        <p>Nombre:</p>
        <input id="nombre" type="text">
        <button onclick="ejercicio2()">Saludar</button>
      `;
    }
  },
  {
    id: 3,
    titulo: "3- Pedir dos números y mostrar la suma",
    descripcion: "Ingresa dos números para sumarlos.",
    mostrar: function () {
      zonaFormulario.innerHTML = `
        <p>Primer número:</p>
        <input id="numero1" type="number">

        <p>Segundo número:</p>
        <input id="numero2" type="number">

        <button onclick="ejercicio3()">Sumar</button>
      `;
    }
  },
  {
    id: 4,
    titulo: "4- Pedir la edad del usuario",
    descripcion: "Mostrar si es mayor o menor de edad.",
    mostrar: function () {
      zonaFormulario.innerHTML = `
        <p>Edad:</p>
        <input id="edad" type="number">
        <button onclick="ejercicio4()">Verificar</button>
      `;
    }
  },
  {
    id: 5,
    titulo: "5- Decir si un número es par o impar",
    descripcion: "Ingresa un número para verificar si es par o impar.",
    mostrar: function () {
      zonaFormulario.innerHTML = `
        <p>Número:</p>
        <input id="numero" type="number">
        <button onclick="ejercicio5()">Verificar</button>
      `;
    }
  },
  {
    id: 6,
    titulo: "6- Pedir 3 números y mostrar cuál es el mayor",
    descripcion: "Ingresa tres números y se mostrará el mayor.",
    mostrar: function () {
      zonaFormulario.innerHTML = `
        <p>Primer número:</p>
        <input id="n1" type="number">

        <p>Segundo número:</p>
        <input id="n2" type="number">

        <p>Tercer número:</p>
        <input id="n3" type="number">

        <button onclick="ejercicio6()">Mostrar mayor</button>
      `;
    }
  },
  {
    id: 7,
    titulo: "7- Pedir una nota del 1 al 10",
    descripcion: "Mostrar: Insuficiente, Aceptable o Muy bien.",
    mostrar: function () {
      zonaFormulario.innerHTML = `
        <p>Nota:</p>
        <input id="nota" type="number" min="1" max="10">
        <button onclick="ejercicio7()">Evaluar</button>
      `;
    }
  },
  {
    id: 8,
    titulo: "8- Crear un contador del 1 al 10 usando for",
    descripcion: "Mostrar los números del 1 al 10.",
    mostrar: function () {
      zonaFormulario.innerHTML = `
        <button onclick="ejercicio8()">Mostrar contador</button>
      `;
    }
  },
  {
    id: 9,
    titulo: "9- Mostrar solo los números pares del 1 al 20",
    descripcion: "Mostrar solamente los números pares.",
    mostrar: function () {
      zonaFormulario.innerHTML = `
        <button onclick="ejercicio9()">Mostrar pares</button>
      `;
    }
  },
  {
    id: 10,
    titulo: "10- Pedir una contraseña",
    descripcion: "Si es 1234 mostrar Correcta, si no mostrar Incorrecta.",
    mostrar: function () {
      zonaFormulario.innerHTML = `
        <p>Contraseña:</p>
        <input id="contrasena" type="password">
        <button onclick="ejercicio10()">Comprobar</button>
      `;
    }
  },
  {
    id: 11,
    titulo: "11- Pedir números hasta escribir 0",
    descripcion: "Agrega números uno por uno. Al ingresar 0 se muestra la suma total.",
    mostrar: function () {
      sumaTotal = 0;
      zonaFormulario.innerHTML = `
        <p>Número:</p>
        <input id="numeroSuma" type="number">
        <button onclick="ejercicio11()">Agregar</button>
        <button onclick="reiniciarEjercicio11()">Reiniciar</button>
      `;
      mostrarResultado("Suma actual: 0");
    }
  },
  {
    id: 12,
    titulo: "12- Crear una calculadora simple",
    descripcion: "Suma, resta, multiplicación y división.",
    mostrar: function () {
      zonaFormulario.innerHTML = `
        <p>Primer número:</p>
        <input id="calc1" type="number">

        <p>Segundo número:</p>
        <input id="calc2" type="number">

        <p>Operación:</p>
        <select id="operacion">
          <option value="suma">Suma</option>
          <option value="resta">Resta</option>
          <option value="multiplicacion">Multiplicación</option>
          <option value="division">División</option>
        </select>

        <button onclick="ejercicio12()">Calcular</button>
      `;
    }
  },
  {
    id: 13,
    titulo: "13- Crear un mini menú",
    descripcion: "1 Saludar, 2 Mostrar fecha, 3 Mostrar número random.",
    mostrar: function () {
      zonaFormulario.innerHTML = `
        <button onclick="mostrarResultado('Hola, bienvenido')">1 - Saludar</button>
        <button onclick="ejercicio13Fecha()">2 - Mostrar fecha</button>
        <button onclick="ejercicio13Random()">3 - Mostrar número random</button>
      `;
    }
  },
  {
    id: 14,
    titulo: "14- Juego de adivinar el número",
    descripcion: "Adivina un número aleatorio del 1 al 10.",
    mostrar: function () {
      numeroSecreto = Math.floor(Math.random() * 10) + 1;
      zonaFormulario.innerHTML = `
        <p>Tu intento:</p>
        <input id="intento" type="number" min="1" max="10">
        <button onclick="ejercicio14()">Adivinar</button>
        <button onclick="seleccionarEjercicio(14)">Nuevo número</button>
      `;
      mostrarResultado("Ya pensé un número del 1 al 10.");
    }
  },
  {
    id: 15,
    titulo: "15- Contar cuántos números pares ingresó el usuario",
    descripcion: "Escribe varios números separados por coma.",
    mostrar: function () {
      zonaFormulario.innerHTML = `
        <p>Números separados por coma:</p>
        <input id="numerosPares" type="text" placeholder="Ejemplo: 2, 5, 8, 11">
        <button onclick="ejercicio15()">Contar pares</button>
      `;
    }
  },
  {
    id: 16,
    titulo: "16- Crear un array con 5 nombres",
    descripcion: "Mostrar el array en pantalla.",
    mostrar: function () {
      zonaFormulario.innerHTML = `
        <button onclick="ejercicio16()">Mostrar array</button>
      `;
    }
  },
  {
    id: 17,
    titulo: "17- Recorrer un array usando for",
    descripcion: "Recorrer y mostrar cada elemento del array.",
    mostrar: function () {
      zonaFormulario.innerHTML = `
        <button onclick="ejercicio17()">Recorrer array</button>
      `;
    }
  },
  {
    id: 18,
    titulo: "18- Array de números: mayor y menor",
    descripcion: "Mostrar el número mayor y el número menor.",
    mostrar: function () {
      zonaFormulario.innerHTML = `
        <button onclick="ejercicio18()">Mostrar mayor y menor</button>
      `;
    }
  },
  {
    id: 19,
    titulo: "19- Array de notas y promedio",
    descripcion: "Calcular y mostrar el promedio.",
    mostrar: function () {
      zonaFormulario.innerHTML = `
        <button onclick="ejercicio19()">Mostrar promedio</button>
      `;
    }
  },
  {
    id: 20,
    titulo: "20- Pedir nombres y guardarlos en un array",
    descripcion: "Agrega nombres hasta escribir salir.",
    mostrar: function () {
      listaNombres = [];
      zonaFormulario.innerHTML = `
        <p>Nombre:</p>
        <input id="nombreArray" type="text">
        <button onclick="ejercicio20()">Agregar</button>
        <button onclick="seleccionarEjercicio(20)">Reiniciar</button>
      `;
      mostrarResultado("Array actual: vacío");
    }
  },
  {
    id: 21,
    titulo: "21- Mostrar cuántos elementos tiene un array",
    descripcion: "Usar la propiedad .length.",
    mostrar: function () {
      zonaFormulario.innerHTML = `
        <button onclick="ejercicio21()">Mostrar cantidad</button>
      `;
    }
  },
  {
    id: 22,
    titulo: "22- Crear un array de números y mostrar solo los pares",
    descripcion: "Mostrar solamente los pares del array.",
    mostrar: function () {
      zonaFormulario.innerHTML = `
        <button onclick="ejercicio22()">Mostrar pares</button>
      `;
    }
  },
  {
    id: 23,
    titulo: "23- Verificar fruta con includes()",
    descripcion: "Buscar si una fruta existe en el array.",
    mostrar: function () {
      zonaFormulario.innerHTML = `
        <p>Fruta:</p>
        <input id="frutaBuscada" type="text">
        <button onclick="ejercicio23()">Buscar</button>
      `;
    }
  },
  {
    id: 24,
    titulo: "24- Eliminar el último elemento usando pop()",
    descripcion: "Eliminar el último elemento de un array.",
    mostrar: function () {
      zonaFormulario.innerHTML = `
        <button onclick="ejercicio24()">Usar pop()</button>
      `;
    }
  },
  {
    id: 25,
    titulo: "25- Agregar elementos usando push()",
    descripcion: "Agregar elementos a un array.",
    mostrar: function () {
      zonaFormulario.innerHTML = `
        <button onclick="ejercicio25()">Usar push()</button>
      `;
    }
  }
];

let sumaTotal = 0;
let numeroSecreto = 0;
let listaNombres = [];

function crearBotones() {
  listaEjercicios.innerHTML = "";

  for (let i = 0; i < ejercicios.length; i++) {
    const boton = document.createElement("button");
    boton.textContent = ejercicios[i].titulo;
    boton.onclick = function () {
      seleccionarEjercicio(ejercicios[i].id);
    };

    listaEjercicios.appendChild(boton);
    listaEjercicios.appendChild(document.createElement("br"));
  }
}

function seleccionarEjercicio(id) {
  const ejercicio = ejercicios.find(function (item) {
    return item.id === id;
  });

  tituloEjercicio.textContent = ejercicio.titulo;
  descripcionEjercicio.textContent = ejercicio.descripcion;
  resultado.innerHTML = "Todavía no hay resultado.";
  ejercicio.mostrar();
}

function mostrarResultado(texto) {
  resultado.innerHTML = texto.replaceAll("\n", "<br>");
}

function obtenerNumero(id) {
  return Number(document.getElementById(id).value);
}

function ejercicio2() {
  let nombre = document.getElementById("nombre").value;
  mostrarResultado("Hola " + nombre);
}

function ejercicio3() {
  let numero1 = obtenerNumero("numero1");
  let numero2 = obtenerNumero("numero2");
  let suma = numero1 + numero2;

  mostrarResultado("La suma es: " + suma);
}

function ejercicio4() {
  let edad = obtenerNumero("edad");

  if (edad >= 18) {
    mostrarResultado("Es mayor");
  } else {
    mostrarResultado("Es menor");
  }
}

function ejercicio5() {
  let numero = obtenerNumero("numero");

  if (numero % 2 === 0) {
    mostrarResultado("El número es par");
  } else {
    mostrarResultado("El número es impar");
  }
}

function ejercicio6() {
  let n1 = obtenerNumero("n1");
  let n2 = obtenerNumero("n2");
  let n3 = obtenerNumero("n3");

  let mayor = n1;

  if (n2 > mayor) {
    mayor = n2;
  }

  if (n3 > mayor) {
    mayor = n3;
  }

  mostrarResultado("El número mayor es: " + mayor);
}

function ejercicio7() {
  let nota = obtenerNumero("nota");

  if (nota < 1 || nota > 10) {
    mostrarResultado("Nota inválida");
  } else if (nota < 5) {
    mostrarResultado("Insuficiente");
  } else if (nota <= 7) {
    mostrarResultado("Aceptable");
  } else {
    mostrarResultado("Muy bien");
  }
}

function ejercicio8() {
  let texto = "";

  for (let i = 1; i <= 10; i++) {
    texto += i + "\n";
  }

  mostrarResultado(texto);
}

function ejercicio9() {
  let texto = "";

  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      texto += i + "\n";
    }
  }

  mostrarResultado(texto);
}

function ejercicio10() {
  let contrasena = document.getElementById("contrasena").value;

  if (contrasena === "1234") {
    mostrarResultado("Correcta");
  } else {
    mostrarResultado("Incorrecta");
  }
}

function ejercicio11() {
  let numero = obtenerNumero("numeroSuma");

  if (numero === 0) {
    mostrarResultado("Terminaste. La suma total es: " + sumaTotal);
  } else {
    sumaTotal = sumaTotal + numero;
    mostrarResultado("Suma actual: " + sumaTotal);
  }

  document.getElementById("numeroSuma").value = "";
}

function reiniciarEjercicio11() {
  sumaTotal = 0;
  mostrarResultado("Suma actual: 0");
}

function ejercicio12() {
  let n1 = obtenerNumero("calc1");
  let n2 = obtenerNumero("calc2");
  let operacion = document.getElementById("operacion").value;
  let respuesta = 0;

  if (operacion === "suma") {
    respuesta = n1 + n2;
  } else if (operacion === "resta") {
    respuesta = n1 - n2;
  } else if (operacion === "multiplicacion") {
    respuesta = n1 * n2;
  } else if (operacion === "division") {
    if (n2 === 0) {
      mostrarResultado("No se puede dividir entre 0");
      return;
    }

    respuesta = n1 / n2;
  }

  mostrarResultado("Resultado: " + respuesta);
}

function ejercicio13Fecha() {
  let fecha = new Date().toLocaleDateString();
  mostrarResultado("Fecha actual: " + fecha);
}

function ejercicio13Random() {
  let random = Math.floor(Math.random() * 100) + 1;
  mostrarResultado("Número random: " + random);
}

function ejercicio14() {
  let intento = obtenerNumero("intento");

  if (intento === numeroSecreto) {
    mostrarResultado("Correcto. El número era: " + numeroSecreto);
  } else if (intento < numeroSecreto) {
    mostrarResultado("Incorrecto. El número secreto es mayor.");
  } else {
    mostrarResultado("Incorrecto. El número secreto es menor.");
  }
}

function ejercicio15() {
  let texto = document.getElementById("numerosPares").value;
  let numeros = texto.split(",");
  let cantidadPares = 0;

  for (let i = 0; i < numeros.length; i++) {
    let numero = Number(numeros[i]);

    if (numero % 2 === 0) {
      cantidadPares++;
    }
  }

  mostrarResultado("Ingresaste " + cantidadPares + " números pares.");
}

function ejercicio16() {
  let nombres = ["Juan", "Ana", "Pedro", "María", "Lucas"];

  mostrarResultado("Nombres:\n" + nombres.join("\n"));
}

function ejercicio17() {
  let nombres = ["Juan", "Ana", "Pedro", "María", "Lucas"];
  let texto = "";

  for (let i = 0; i < nombres.length; i++) {
    texto += nombres[i] + "\n";
  }

  mostrarResultado(texto);
}

function ejercicio18() {
  let numeros = [15, 3, 22, 8, 1, 30];
  let mayor = numeros[0];
  let menor = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }

    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }

  mostrarResultado(
    "Array: " + numeros.join(", ") +
    "\nNúmero mayor: " + mayor +
    "\nNúmero menor: " + menor
  );
}

function ejercicio19() {
  let notas = [8, 6, 10, 7, 9];
  let suma = 0;

  for (let i = 0; i < notas.length; i++) {
    suma = suma + notas[i];
  }

  let promedio = suma / notas.length;

  mostrarResultado(
    "Notas: " + notas.join(", ") +
    "\nPromedio: " + promedio
  );
}

function ejercicio20() {
  let nombre = document.getElementById("nombreArray").value;

  if (nombre.toLowerCase() === "salir") {
    mostrarResultado("Terminaste. Array final:\n" + listaNombres.join("\n"));
    return;
  }

  listaNombres.push(nombre);
  document.getElementById("nombreArray").value = "";

  mostrarResultado("Array actual:\n" + listaNombres.join("\n"));
}

function ejercicio21() {
  let animales = ["perro", "gato", "conejo", "loro"];

  mostrarResultado(
    "Array: " + animales.join(", ") +
    "\nCantidad de elementos: " + animales.length
  );
}

function ejercicio22() {
  let numeros = [2, 5, 7, 10, 14, 21, 30];
  let pares = [];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      pares.push(numeros[i]);
    }
  }

  mostrarResultado(
    "Array original: " + numeros.join(", ") +
    "\nNúmeros pares: " + pares.join(", ")
  );
}

function ejercicio23() {
  let frutas = ["manzana", "banana", "pera", "naranja", "uva"];
  let frutaBuscada = document.getElementById("frutaBuscada").value.toLowerCase();

  if (frutas.includes(frutaBuscada)) {
    mostrarResultado("La fruta existe en el array.");
  } else {
    mostrarResultado("La fruta no existe en el array.");
  }
}

function ejercicio24() {
  let frutas = ["manzana", "banana", "pera", "naranja", "uva"];
  let antes = frutas.join(", ");

  frutas.pop();

  let despues = frutas.join(", ");

  mostrarResultado(
    "Antes de pop(): " + antes +
    "\nDespués de pop(): " + despues
  );
}

function ejercicio25() {
  let frutas = ["manzana", "banana", "pera"];
  let antes = frutas.join(", ");

  frutas.push("sandía");
  frutas.push("melón");

  let despues = frutas.join(", ");

  mostrarResultado(
    "Antes de push(): " + antes +
    "\nDespués de push(): " + despues
  );
}

crearBotones();
seleccionarEjercicio(1);
