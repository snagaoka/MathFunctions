function add(op1, op2) {
	return op1 + op2;
}

function subtract (op1, op2) {
	return op1 - op2;
}

function multiply (op1, op2) {
	return op1 * op2;
}

function divide (op1, op2) {
	return op1 / op2;
}

function power (op1, op2) {
	return Math.pow(op1, op2); 
}  

function test_add_1 () {
	return add(4, 5);
}

function test_add_2 () {
	var a = 5;
	var b = 4;
	var c = 3;
	var d = add(a, b);
	return add(c, d);
}

function test_subtract_1 () {
	return subtract(5, 4);

//function test_subtract_2 () {
//	return
//}

}

module.exports = {
	add: add,
	subtract: subtract,
	multiply: multiply,
	divide: divide
}