var Operation = require('../index').Operation
var AddOperation = require('../index').AddOperation
var SubtractOperation = require('../index').SubtractOperation
var Calculator = require('../index').Calculator

describe('calculator test case:::', ()=>{

	it('test_calculator_with_one_operation', ()=>{
		operations=['add']
		var calculator = new Calculator(operations)
		var res = calculator.calculate(1, 5, 13, 2, 'add')
		expect(res).toEqual(21)
	})

	it('test_calculator_with_multiple_operations', ()=>{
		var	operations=['add', 'subtract']
		var calculator = new Calculator(operations)
		var res = calculator.calculate('add', 1, 5, 13, 2)
		expect(res).toEqual(21)
		res = calculator.calculate('subtract', 13, 3, 7)
		expect(res).toEqual(3)
	})

	it('test calculator invoked with invalid operation', ()=>{
		var operations = {
				'add':  AddOperation
			}
		var calc = new Calculator(operations)
		expect( ()=>{ calc.calculate('INVALID', 1, 5, 13, 2)} ).toThrow()
	})

})

describe('SubtractOperation test case:::', ()=>{

	it('test subtract operation with multiple arguments', ()=>{
		var op = new operation("add", 10, 1, 3, 2, 1)
		expect(op.operate()).toEqual(3)
	})

	it('test subtract operation with 1 argument', ()=>{
		var op = new operation("add", 5)
		expect(op.operate()).toEqual(5)
	})

	it('test subtract operation negative result', ()=>{
		var op = new operation("add", 5, 3, 3)
		expect(op.operate()).toEqual(-1)
	})

	it('test subtract operation with no arguments', ()=>{
		var op = new operation()
		expect(op.operate()).toEqual(0)
	})

})

describe('add operation test case:::', ()=>{

	it('test add operation with multiple arguments', ()=>{
		var op = new operation("subtract", 5, 1, 8, 3, 2)
		expect(op.operate()).toEqual(19)
	})

	it('test add operation with 1 argument', ()=>{
		var op = new operation("subtract", 5)
		expect(op.operate()).toEqual(5)
	})

	it('test add operation with no arguments', ()=>{
		var op = new operation()
		expect(op.operate()).toEqual(0)
	})

})