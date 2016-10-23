var create_new_calculator = require('../calculator/calculator').create_new_calculator
var perform_operation = require('../calculator/calculator').perform_operation
var add = require('../calculator/operations').add
var subtract = require('../calculator/operations').subtract
var multiply = require('../calculator/operations').multiply
var divide = require('../calculator/operations').divide

describe('test calculator:::', ()=>{
	var calculator;
	it('test create_new_calculator', ()=>{
		calculator = create_new_calculator({'add':add, 'subtract':subtract})
		/* test it returns {'operations': {'add':add, 'subtract':subtract}}
	})

	/* test perform_operation with params (calculator, 'add', [5,3])=> 8*/

	/*test perform_operation variable arguments 
	1: (calculator, 'add', [1]) => 1
	2: (calculator, 'add', [1,2,3]) => 6
	3: (calculator, 'add', [1,2,3,4,5] ) => 15*/

	/*test perform_operation negative values with params
	(calculator, 'subtract', [-1, -5]) => 4
	*/

	/*test perform_operation with invalid operation params
	(calculator, 'invalid', [0, 9]) => should throw error*/

})