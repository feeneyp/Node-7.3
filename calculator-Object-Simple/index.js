var Operation = function(type, nums){
}

Operation.prototype.operate = function(type, nums){
	// implement the operations
}


var Calculator = function(OperationList) { 
    this.calc = OperationList
}

Calculator.prototype.calculate = function(type, args){
    //new operation
}

exports.Calculator = Calculator
exports.Operation = Operation