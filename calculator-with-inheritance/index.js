var Operation = function(){
	//will take varible number of arguments
	//Do something here
}

Operation.prototype.operate = function(){
	throw new Error('Not Implemented')
}

var AddOperation = function(){
	//this is a subclass of Operation
	//code here
}

AddOperation.prototype.operate = function() {
	//code here
}

var SubtractOperation = function(){
	//this is a subclass of Operation
	//code here
}

var Calculator = function() { 
	//code here
}

Calculator.prototype.operate = function(){
	//code here
}

exports.Calculator = Calculator
exports.Operation = Operation
exports.AddOperation = AddOperation
exports.SubtractOperation = SubtractOperation