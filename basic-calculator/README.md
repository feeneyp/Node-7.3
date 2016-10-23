Run first npm install.

Run the tests with npm test

This is to create a program that acts as a basic four function calculator. If the operation is not add, subtract, multiply, or divide, it needs to throw error 'Invalid operation'


We will want the following interface:

```javascript
basic_calculator(1, 7, 'add') //=>8

basic_calculator(5, 2, 'subtract') //=>3

basic_calculator(3, 4, 'multiply') //=>12

basic_calculator(12, 3, 'divide') //=>4

basic_calculator(3, 4, 'what') //throw error 'Invalid operation'
```