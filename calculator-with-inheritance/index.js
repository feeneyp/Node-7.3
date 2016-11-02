var Operation = function(...nums){
    this.nums = (nums.length !== 0 ?  nums : [0])
}

Operation.prototype.operate = function(){
	throw new Error('Not Implemented')
}

var AddOperation = function(...nums){
	this.operation = new Operation(...nums)
}

AddOperation.prototype.operate = function() {
	return this.operation.nums.reduce((a = 0, b = 0) => a + b)
}

var SubtractOperation = function(...nums){
    this.operation = new Operation(...nums)
}

SubtractOperation.prototype.operate = function() {
    return this.operation.nums.reduce((a = 0, b = 0) => a - b)
}

var Calculator = function(options) { 
    this.calc = options
}

Calculator.prototype.calculate = function(...args){
    operation = this.calc[args.slice(-1)[0]]
	op = new operation(...args.slice(0, args.length - 1))
    return op.operate()
}

exports.Calculator = Calculator
exports.Operation = Operation
exports.AddOperation = AddOperation
exports.SubtractOperation = SubtractOperation