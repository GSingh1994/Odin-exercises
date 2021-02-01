function add(a, b) {

	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function sum(arr) {
	let result = [...arr].reduce((a, b) => a + b, 0)
	return result;
}

function multiply(arr) {
	let result = [...arr].reduce((a, b) => a * b, 1);
	return result;
}

function power(a, b) {
	let result = 1;
	for (let i = 1; i <= b; i++) {
		result *= a;
	}
	return result;
}

var f = [];
function factorial(n) {
	if (n == 0 || n == 1)
		return 1;
	if (f[n] > 0)
		return f[n];
	return f[n] = factorial(n - 1) * n;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}