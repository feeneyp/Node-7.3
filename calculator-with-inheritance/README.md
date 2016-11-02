Run first npm install.

Run the tests with npm tests

You'll need to build a calculator using OOP and inheritance:
A calculator can be built with different operations. An Operation is an abstract class for which you'll define
subclasses.

Example:

```javascript
calc1 = Calculator({
    'add': AddOperation,
    'subtract': SubtractOperation})

calc2 = Calculator({
    'add': AddOperation})
```

The calculator has 1 generic method calculate that will receive the arguments
and the operation to perform. For example:

```javascript
calc1.calculate(2, 1, 5, 'add')  # Should return 2 + 1 + 5 = 8
calc2.calculate(1, 5, 'add')  # Should return 1 + 5 = 6
```

IMPORTANT: The number of arguments should be variable

The Calculator will check if it has that computation present and
invoke the operation. Operations are initialized with the arguments to compute:

```javascript
op = new AddOperation(2, 1, 5)
```

Once you have an operation object created you should be able to invoke the operate
method PRESENT IN EVERY OPERATION.

```javascript
op.operate()  # Should return 8
```

Important notes:
The only method that you must implement for every operation (descendant from Operation) is the operate method.
If the operation is not supported by the calculator (for example invoking multiply on calc1) the calculator should raise an error (built by you) named 'invalid operation'.
