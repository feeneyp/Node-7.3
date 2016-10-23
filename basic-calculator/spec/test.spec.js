var basic_calculator = require('../index').basic_calculator

describe('basic calculator test case:::', function(){

	it('addition', function(){
		expect(basic_calculator(1, 7, 'add')).toEqual(8)
	})

	it('subtraction', function() {
		expect( basic_calculator(5, 2)).toEqual(3)
	})

	it('multiply', function(){
		expect( basic_calculator(3, 4, 'multiply')).toEqual(12)
	})

	it('divide', function(){
		expect( basic_calculator(12, 3, 'divide')).toEqual(4)
	})

	it('invalid', function(){
		expect(()=>{
			basic_calculator(5,6, 'something')
		}).toThrow()
	})
})