//Factorial 15
numero=15

function factorial(numero) {
	resultado = 1;
	for (var i = 1; i <= numero; i++) {
		resultado *= i;
	}
	return resultado;
}
