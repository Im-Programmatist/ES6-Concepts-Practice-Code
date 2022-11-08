/**
 * ES5 is also known as ECMAScript 2009 as it is released in 2009.
 * In ES5 we use function and return keyword, to be used to define the function
*/
/**
 * ES6 is also known as ECMAScript 2015 as it is released in 2015.
 * In ES6 we do not need to use function and return keyword to declare the function
 * Instantiate an object/function using the new operator, using an arrow function
*/
/**
 * ES5 and ES6 both support primitive data types like string, number, boolean, null and undefined but
 * ES6 added new datatype symbol, symbol is primitive data type not object and constructors
 * (we can not use new keyword to create symbol)
 * Symbols used to create unique keys in  javascript
 * Symbols are ignore in for-in loop
*/
const sym1 = Symbol("This is first symbol");
const sym11 = Symbol("This is first symbol");
const sym2 = Symbol("This is second symbol");
console.log(sym1 === sym11);
console.log(sym1 === sym11);
const a = Symbol('this is identifier 1:');
const b = Symbol('this is identifier 2:');
console.log(a.description); //this is identifier 1:
const obj = {};
obj['name']="Chetan";
obj['surname']="Patil"
obj[a] = "String1";
obj[b] = "String2";
console.log('obj:', obj, obj[a], obj.a);
for(key in obj){
    console.log(JSON.stringify(obj), key);//name and surname only print
}
var x = Symbol.for('Done');  
var y = Symbol.for('Done');
var z = 'Done';  
console.log(x === y);  //true
console.log(y === z);  //true

let id = Symbol("id");
let person = {
    name: "Jack",
    // adding symbol as a key
    [id]: 123 // not "id": 123
};
console.log(person);
/**
 * ES5 has var way to define variables But ES6 does have let and const way to define variables
 * ES6 has higher performance than ES5
 * Object manipulation takes more time in ES5 as we have to use create and Object.defineProperty method but in ES6 we can create using {} and new keyword
 * Last but not the least better community support
*/

/**
 * ES6 functions/method or features that not added in ES5---
 * 1. Class and constructors
 * 2. Object creation methods & Object literals - make it easy to quickly create objects with properties inside the curly braces
 * 3. Default parameters 
 * 4. Template literals
 * 5. Multiline Strings
 * 6. Promises
 * 7. Spread & Rest Operator, Destructuring Assignment
 * 8. Variable Declaration - let, const
 * 9. Arrow Functions
 * 10. Module & Export
 *  
*/