Run first npm install.

Run the tests with npm tests

You'll need to build a calculator using OOP: A calculator can be built with different operations. An Operation is a class that contains all the logic for the calculator.

Example:

calc1 = Calculator(['add', 'subtract'])
calc2 = Calculator(['add'])
The calculator has 1 generic method calculate that will receive the arguments and the operation to perform. For example:

calc1.calculate('add', 2, 1, 5)  # Should return 2 + 1 + 5 = 8
calc1.calculate('subtract', 1, 5)  # Should return 1 + 5 = -4
calc2.calculate('subtract', 1, 5)  # Should return "operation Invalid"
IMPORTANT: The number of arguments should be variable

The Calculator will check if it has that computation present and invoke the operation. Operations are initialized with the arguments to compute:

op = new operation("add", 2, 1, 5)
Once you have an operation object created you should be able to invoke the operate method.

op.operate()  # Should return 8
