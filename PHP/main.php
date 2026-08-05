<?php

echo "





====================
Bloque 1
====================";

// Ejercicio 1 - Datos personales

$nombre = "Juan Carlo";
$edad = 30;
$ciudad = "Pajas Blancas - Montevideo";

echo "
Mi nombre es $nombre, tengo $edad años, y vivo en $ciudad.
";

// Ejercicio 2 - Información de un producto

$nombreProducto = "Teclado";
$precioProducto = "$1200";
$cantidadDisponible = "5 unidades";

echo "
Producto: $nombreProducto
Precio: $precioProducto
Stock: $cantidadDisponible
";

// Ejercicio 3 - Perfil de un videojuego

$nombreJugador = "Mateo";
$nombrePersonaje = "DragonX";
$nivel = 25;
$servidor = "Latinoamérica";

echo "
=== PERFIL DEL JUGADOR ===
$nombreJugador
Personaje: $nombrePersonaje
💪: $nivel
🌍: $servidor
========================

";

// Ejercicio 4 - Encontrar y corregir los errores

$nombre = "Lucía";
$curso = "Tercero";
$materia = "Programación";

echo "Nombre: " . $nombre;
echo "\nCurso: " . $curso;
echo "\nMateria: " . $materia;

echo "

====================
Bloque 2
====================";

// Ejercicio 1 - Operaciones básicas

$numeroA = 20;
$numeroB = 6;

echo "
Suma: " . ($numeroA + $numeroB);
echo "\nResta: " . ($numeroA - $numeroB);
echo "\nMultiplicación: " . ($numeroA * $numeroB);
echo "\nDivisión: " . ($numeroA / $numeroB);

// Ejercicio 2 - Área de un rectángulo

$base = 8;
$altura = 4;
$area = $base * $altura;

echo "

Base: $base
Altura: $altura
Área del rectángulo: $area
";

// Ejercicio 3 - Promedio de notas

$nota1 = 8;
$nota2 = 7;
$nota3 = 9;
$promedio = ($nota1 + $nota2 + $nota3) / 3;

echo "
Nota 1: $nota1
Nota 2: $nota2
Nota 3: $nota3
Promedio: $promedio
";

// Ejercicio 4 - Conversión de minutos

$totalMinutos = 135;
$horas = intdiv($totalMinutos, 60);
$minutosRestantes = $totalMinutos % 60;

echo "
$totalMinutos minutos equivalen a $horas horas y $minutosRestantes minutos.
";

echo "

====================
Bloque 3
====================";

// Ejercicio 1 - Comparar dos números

$primerNumero = 15;
$segundoNumero = 15;

echo "
¿Son iguales?: ";
var_dump($primerNumero == $segundoNumero);
echo "¿El primero es mayor?: ";
var_dump($primerNumero > $segundoNumero);
echo "¿El segundo es mayor?: ";
var_dump($segundoNumero > $primerNumero);

// Ejercicio 2 - Comparar una edad

$edadPersona = 20;

echo "
Edad: $edadPersona
¿Es mayor o igual a 18?: ";
var_dump($edadPersona >= 18);

// Ejercicio 3 - Comparación estricta

$numero = 10;
$texto = "10";

echo "
Comparación con == : ";
var_dump($numero == $texto);
echo "Comparación con === : ";
var_dump($numero === $texto);

echo "
El == compara solamente el valor, entonces PHP convierte el texto \"10\" a número
y los considera iguales.
El === compara el valor Y el tipo de dato. Uno es int y el otro es string,
por eso el resultado es falso.
";

// Ejercicio 4 - Producto disponible

$stockDisponible = 10;
$cantidadSolicitada = 3;
$precioUnidad = 500;
$presupuestoCliente = 1200;

$totalCompra = $precioUnidad * $cantidadSolicitada;

echo "
Stock disponible: $stockDisponible
Cantidad solicitada: $cantidadSolicitada
Precio por unidad: $precioUnidad
Presupuesto del cliente: $presupuestoCliente
Total a pagar: $totalCompra

¿Hay stock suficiente?: ";
var_dump($cantidadSolicitada <= $stockDisponible);
echo "¿Le alcanza el presupuesto?: ";
var_dump($totalCompra <= $presupuestoCliente);

echo "

====================
Bloque 4
====================";

// Ejercicio 1 - Puntuación de un juego

$puntuacion = 50;

if ($puntuacion >= 50) {
    echo "
Puntuación: $puntuacion
Gano
";
} else {
    echo "
Puntuación: $puntuacion
Perdio
";
}

// Ejercicio 2 - Número positivo o negativo

$numeroSigno = -7;

if ($numeroSigno > 0) {
    echo "
El número $numeroSigno es positivo
";
} elseif ($numeroSigno < 0) {
    echo "
El número $numeroSigno es negativo
";
} else {
    echo "
El número es cero
";
}

// Ejercicio 3 - Par o impar

$numeroParImpar = 9;

if ($numeroParImpar % 2 == 0) {
    echo "
El número $numeroParImpar es par
";
} else {
    echo "
El número $numeroParImpar es impar
";
}

// Ejercicio 4 - Resultado de una nota

$notaFinal = 10;

if ($notaFinal < 1 || $notaFinal > 12) {
    echo "
Error: la nota debe estar entre 1 y 12
";
} elseif ($notaFinal < 6) {
    echo "
Nota: $notaFinal - Insuficiente
";
} elseif ($notaFinal <= 8) {
    echo "
Nota: $notaFinal - Aprobado
";
} elseif ($notaFinal <= 10) {
    echo "
Nota: $notaFinal - Muy bueno
";
} else {
    echo "
Nota: $notaFinal - Excelente
";
}

echo "

====================
Bloque 5
====================";

// Ejercicio 1 - Login básico

$usuario = "admin";
$contrasena = "1234";

if ($usuario === "admin" && $contrasena === "1234") {
    echo "
Inicio de sesión correcto
";
} else {
    echo "
Usuario o contraseña incorrectos
";
}

// Ejercicio 2 - Acceso por rol

$rol = "docente";

if ($rol === "administrador" || $rol === "docente") {
    echo "
Rol: $rol
Acceso permitido
";
} else {
    echo "
Rol: $rol
Acceso denegado
";
}

// Ejercicio 3 - Compra permitida

$precioProd = 250;
$presupuesto = 2000;
$stock = 8;
$cantidadPedida = 6;

$totalPedido = $precioProd * $cantidadPedida;

if ($cantidadPedida <= $stock && $totalPedido <= $presupuesto) {
    echo "
Compra realizada. Total: $totalPedido
";
} else {
    echo "
No se pudo realizar la compra
";
}

// Ejercicio 4 - Entrada a un evento

$edadEvento = 15;
$tieneEntrada = true;
$acompanadoAdulto = true;

if ($edadEvento >= 18 && $tieneEntrada) {
    echo "
Puede entrar al evento
";
} elseif ($edadEvento < 18 && $tieneEntrada && $acompanadoAdulto) {
    echo "
Puede entrar al evento acompañado por un adulto
";
} else {
    echo "
No puede entrar al evento
";
}

echo "

====================
Bloque 6
====================";

// Ejercicio 1 - Descuento por edad

$edadEntrada = 10;
$precioEntrada = 800;

if ($edadEntrada < 12) {
    $precioFinal = $precioEntrada * 0.5;
} else {
    $precioFinal = $precioEntrada;
}

echo "
Edad: $edadEntrada
Precio original: $precioEntrada
Precio final: $precioFinal
";

// Ejercicio 2 - Descuento por cantidad

$precioUnitario = 300;
$cantidadComprada = 6;
$subtotal = $precioUnitario * $cantidadComprada;

if ($cantidadComprada >= 5) {
    $descuento = $subtotal * 0.10;
} else {
    $descuento = 0;
}

$totalFinal = $subtotal - $descuento;

echo "
Subtotal: $subtotal
Descuento: $descuento
Total final: $totalFinal
";

// Ejercicio 3 - Descuento por niveles

$totalCompraNiveles = 3500;

if ($totalCompraNiveles < 1000) {
    $descuentoNivel = 0;
} elseif ($totalCompraNiveles < 5000) {
    $descuentoNivel = $totalCompraNiveles * 0.10;
} else {
    $descuentoNivel = $totalCompraNiveles * 0.20;
}

$totalConDescuento = $totalCompraNiveles - $descuentoNivel;

echo "
Total original: $totalCompraNiveles
Descuento: $descuentoNivel
Total final: $totalConDescuento
";

// Ejercicio 4 - Compra con stock y descuento

$producto = "Monitor";
$precioMonitor = 4000;
$stockMonitor = 20;
$cantidadMonitor = 12;

if ($cantidadMonitor <= $stockMonitor) {
    $totalMonitor = $precioMonitor * $cantidadMonitor;

    if ($cantidadMonitor >= 10) {
        $descuentoMonitor = $totalMonitor * 0.15;
    } else {
        $descuentoMonitor = 0;
    }

    $totalFinalMonitor = $totalMonitor - $descuentoMonitor;

    echo "
Producto: $producto
Cantidad: $cantidadMonitor
Total: $totalMonitor
Descuento: $descuentoMonitor
Total final: $totalFinalMonitor
";
} else {
    echo "
Error: no hay stock suficiente de $producto
";
}

echo "

====================
Extra 1 - switch
====================";

// Ejercicio 1 - Tipo de cliente

$tipoCliente = 2;

switch ($tipoCliente) {
    case 1:
        echo "
Cliente común: sin descuento
";
        break;
    case 2:
        echo "
Cliente frecuente: 10% de descuento
";
        break;
    case 3:
        echo "
Cliente premium: 20% de descuento
";
        break;
    default:
        echo "
Error: el tipo de cliente no existe
";
}

// Ejercicio 2 - Método de pago

$metodoPago = "transferencia";

switch ($metodoPago) {
    case "efectivo":
        echo "
Método de pago: $metodoPago - 10% de descuento
";
        break;
    case "tarjeta":
        echo "
Método de pago: $metodoPago - precio normal
";
        break;
    case "transferencia":
        echo "
Método de pago: $metodoPago - 5% de descuento
";
        break;
    default:
        echo "
Error: método de pago no válido
";
}

// Ejercicio 3 - Menú de operaciones

$num1 = 12;
$num2 = 4;
$opcion = 3;

switch ($opcion) {
    case 1:
        echo "
$num1 + $num2 = " . ($num1 + $num2) . "
";
        break;
    case 2:
        echo "
$num1 - $num2 = " . ($num1 - $num2) . "
";
        break;
    case 3:
        echo "
$num1 * $num2 = " . ($num1 * $num2) . "
";
        break;
    case 4:
        echo "
$num1 / $num2 = " . ($num1 / $num2) . "
";
        break;
    default:
        echo "
Opción incorrecta.
";
}

echo "

====================
Bloque 7
====================";

// Ejercicio 1 - Números del 1 al 10

echo "
Números del 1 al 10:
";

for ($i = 1; $i <= 10; $i++) {
    echo "$i ";
}

// Ejercicio 2 - Cuenta regresiva

echo "

Cuenta regresiva:
";

for ($i = 10; $i >= 1; $i--) {
    echo "$i ";
}

echo "
¡Comenzamos!
";

// Ejercicio 3 - Números pares

echo "
Números pares entre 1 y 20:
";

for ($i = 1; $i <= 20; $i++) {
    if ($i % 2 == 0) {
        echo "$i ";
    }
}

// Ejercicio 4 - Tabla de multiplicar

$numeroTabla = 5;

echo "

Tabla del $numeroTabla:
";

for ($i = 1; $i <= 10; $i++) {
    echo "$numeroTabla × $i = " . ($numeroTabla * $i) . "\n";
}

echo "

====================
Bloque 8
====================";

// Ejercicio 1 - Suma del 1 al 10

$sumaDiez = 0;

for ($i = 1; $i <= 10; $i++) {
    $sumaDiez = $sumaDiez + $i;
}

echo "
Suma del 1 al 10: $sumaDiez
";

// Ejercicio 2 - Suma del 1 al 100

$sumaCien = 0;

for ($i = 1; $i <= 100; $i++) {
    $sumaCien = $sumaCien + $i;
}

echo "
Suma del 1 al 100: $sumaCien
";

// Ejercicio 3 - Contar números pares

$contadorPares = 0;

for ($i = 1; $i <= 50; $i++) {
    if ($i % 2 == 0) {
        $contadorPares++;
    }
}

echo "
Cantidad de números pares entre 1 y 50: $contadorPares
";

// Ejercicio 4 - Sumar múltiplos de 3

$sumaMultiplos = 0;

for ($i = 1; $i <= 100; $i++) {
    if ($i % 3 == 0) {
        $sumaMultiplos = $sumaMultiplos + $i;
    }
}

echo "
Suma de los múltiplos de 3 entre 1 y 100: $sumaMultiplos
";

echo "

====================
Bloque 9
====================";

// Ejercicio 1 - Números del 1 al 10 con while

echo "
Números del 1 al 10:
";

$contador = 1;

while ($contador <= 10) {
    echo "$contador ";
    $contador++;
}

// Ejercicio 2 - Números pares con while

echo "

Números pares entre 2 y 20:
";

$par = 2;

while ($par <= 20) {
    echo "$par ";
    $par = $par + 2;
}

// Ejercicio 3 - Duplicar hasta alcanzar un límite

echo "

Duplicando hasta llegar a 100:
";

$numeroDoble = 1;

while ($numeroDoble < 100) {
    echo "$numeroDoble\n";
    $numeroDoble = $numeroDoble * 2;
}

// Ejercicio 4 - Simulación de ahorro

$ahorro = 0;
$meses = 0;

echo "
Simulación de ahorro:
";

while ($ahorro < 5000) {
    $ahorro = $ahorro + 500;
    $meses++;
    echo "Mes $meses: $ahorro\n";
}

echo "
Necesita $meses meses para alcanzar los 5000.
";
