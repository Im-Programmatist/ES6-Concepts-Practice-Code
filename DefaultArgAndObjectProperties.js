function showAge(age)
{
	return age;
}

showAge();// undefind 


//Default Argument
function showDefaultAge(age = 27)
{
	return age;
}

showDefaultAge();// result: 18


//object
const users = { name : 'chetan', age : 27, born : 'Kalgavhan'};
//destructuring
const { age, born, name } = users;
//NOW using Object properties 
//key may be anything
const defaultValue2 = { name_property : name, age_property : age, born_property : born }//or
const defaultValue1 = { name : name, age : age, born : born };  
//result { name : 'chetan', age : 27, born : 'Kalgavhan'} or { name_property : 'chetan', age_property : 27, born_property : 'Kalgavhan'}
const sortObject = { name, age, born};
//result { name : 'chetan', age : 27, born : 'Kalgavhan'}

//How to get a subset of a javascript object's properties
//Using Object Destructuring and Property Shorthand
const object = { a: 5, b: 6, c: 7  };
const picked = (({ a, c }) => ({ a, c }))(object);
console.log(picked); // { a: 5, c: 7 }
//Same example explain 
//IIFE
subset = (({ 'foo-bar': foo, bar, baz }) => ({ 'foo-bar': foo, bar, baz }))(obj);
//Temporary variables
const { 'foo-bar': foo, bar, baz } = obj;
const subset = { 'foo-bar': foo, bar, baz };

//Converting Object to array in js
var convObjToArray = Object.entries(subset);
// now we can apply array related operators like rest, destructuring and spread

/** 
 * JS ES6 Destructuring, assign entire object and destructure its properties at the same time 
*/
const
    a = { x: 1, y: 5 },
    { a: b, a: { x } } = { a };

console.log(b);
console.log(x);