//simulador de prestamo bancario
// quiero que mi app solicite prestamo deseado
//cantidad de cuotas a devolver el prestamo según opciones brindadas
//interes correspondiente a cada cuota


let prestamo = prompt("ingrese valor en pesos de su prestamo deseado");
let tasaDeInteres = 0;

let validarPrestamo = (prestamo) => {
    if (isNaN(prestamo)) {
        alert("por favor ingrese un número")
    } else {
        alert("tu prestamo seleccionado es de " + prestamo + " pesos")
    }
}

validarPrestamo(prestamo);

let numeroDeCuotas = prompt("desea devolver su prestamo en 12, 6 o 3 cuotas?")
switch (numeroDeCuotas) {
    case 12:
        numeroDeCuotas = 12;
        break
    case 6:
        numeroDeCuotas = 6;
        break
    case 3:
        numeroDeCuotas = 3;
        break
};

alert("usted seleccionó devolver su prestamo en " + numeroDeCuotas + " cuotas");

function establecerIntereses(numeroDeCuotas) {
    if(numeroDeCuotas == 12) {
     tasaDeInteres = parseFloat(76,83);
    } else if (numeroDeCuotas == 6) {
        tasaDeInteres = parseFloat(33,72); 
    } else if (numeroDeCuotas == 3) {
        tasaDeInteres = parseFloat(16,0o1)
    } 
};

establecerIntereses(numeroDeCuotas);

alert("el recargo de sus cuotas para devolver el prestamo es de " + tasaDeInteres + "%");

//revisar formula para ver si funciona correctamente

let calcularTotal = (tasaDeInteres, numeroDeCuotas) =>{
    let cuota = prestamo / numeroDeCuotas;
    let interes = cuota * tasaDeInteres / 100;
    let total = cuota + interes;
    return total;
}

let cuotaConIntereses = calcularTotal(tasaDeInteres,numeroDeCuotas);

alert("a cada cuota le corresponde un valor de " + cuotaConIntereses + " pesos");
alert("el total a devolver del prestamo con intereses es de " + cuotaConIntereses * numeroDeCuotas);

//crear una función que pushee los datos del prestamo en un array y que luego se imprima en pantalla

let datosDePrestamo = [];




