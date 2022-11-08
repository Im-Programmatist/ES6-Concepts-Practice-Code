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