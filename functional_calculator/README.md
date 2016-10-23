Another calculator, functional this time. Even though that sounds simple, this won't be a regular calculator. 

Operations will be defined as regular functions. There's just one important thing you must have in mind. All operations need to keep the same interface, meaning they all must be executable sending the same parameters. To have extra flexibility, we will assume that all operations receives a variable number or arguments (*args), like the following code:

```javascript
function add() {
    //return the sum of all the given arguments - variable in number
}
```

Operations are independent entities. You should be able to use them outside any other code, even outside of the calculator you are supposed to build. To use an operator follow this logic:

```javascript
subtract(100, 20, 10, 20)
50
subtract(100, 20)  // must accept variable number of arguments
80
```

If you reached this point, you should now be ready to start coding your calculator. To create a new calculator you must follow this interface:
```javascript
calc = create_new_calculator(operations={'add': add, 'subtract': subtract, ...})
{
    'operations': {
        'add': add,
        'subtract': subtract,
        ...
    }
}
```

As it's shown in the sample code, a calculator is just a data structure (dict in this case) holding the collection of operations the calculator supports and keeping track of the operation execution history.

Once you have the calculator created, you can start using it:

```javascript
perform_operation(calc, 'add', params=(1, 2, 3, 4))
10
```

You must consider possible errors that might occur while using the calculator:

```javascript
perform_operation(calc, 'something-weird', params=(1, 2, 3, 4))
InvalidOperation: "something-weird" operation not supported.
perform_operation(calc, 'something-weird', params=False)
InvalidParams: Given params are invalid.
perform_operation(calc, 'something-weird')  # params not sent
InvalidParams: Given params are invalid.
```

You can create more custom operations (like square a number) and test them and inside a calculator.