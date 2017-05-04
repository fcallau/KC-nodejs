'use strict';

//
// Devuelve true or false en función de si se trata de un número primo.
//
function esPrimo(num) {
	if (num === 1) {
		return false;
	}

	if (num === 2 || num === 3) {
		return true;
	}

	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			return false;
		}
	}

	return true;
}

//
// Se le pasa un número y se devuelve el siguiente número primo.
//
function siguientePrimo(num) {
	num++;

	while (!esPrimo(num)) {
		num++;
	}

	return num;
}

//
// Busca los números primos entre límite inferior y límite superior.
// Mientras no llega al límite superior, se va llamando la función a si misma.
// Cuando finaliza muestra un mensaje por pantalla.
//
function buscarPrimos(limiteInf, limiteSup, callback) {
	setTimeout(function() {
		const valor = siguientePrimo(limiteInf);

		if (valor <= limiteSup) {
			console.log(valor);
			buscarPrimos(valor, limiteSup, callback);
		} else {
			callback();
		}
	}, 100);
}

//
// Valida los parámetros de entrada (que sen enteros, no negativos, ...).
//
function parametrosEntradaCorrectos(limInf, limSup) {
	if (typeof(limInf) === 'number' && typeof(limSup) === 'number') {
		if (Number.isInteger(limInf) && Number.isInteger(limSup)) {
			if (limInf >= 0) {
				if (limInf > limSup) {
					console.log('El límite inferior no puede ser mayor al límite superior');
					return false;
				}
			} else {
				console.log('El límite inferior no puede ser negativo');
				return false;
			}
		} else {
			console.log('Los límites tienen que ser enteros');
			return false;
		}
	} else {
		console.log('Los límites tienen que ser numéricos');
		return false;
	}

	// Parámetros entrada correctos
	return true;
}

function primos(limInf, limSup) {
	if (parametrosEntradaCorrectos(limInf, limSup)) {
		// Busca si el límite inferior es primo
		if (esPrimo(limInf)){
			console.log(limInf);
		}

		// Busca a partir del límite inferior, y hasta el límite superior, los números primos
		buscarPrimos(limInf, limSup, function() {
			console.log('Acabamos de mostrarle los números primos que hay entre ' + limInf + ' y ' + limSup + '.');
		});
	}
}

//
// Busca los números primos entre dos límites (inferior y superior).
//
primos(1, 100);