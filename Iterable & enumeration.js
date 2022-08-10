/**
 * There are 2 types of loop 
 * 1. Entry Controlled Loop - for, while, foreach, for in 
 * 2. Exit Controlled Loop - do-while
 * 
 */

/*
For Each loop
*/
/*
	Syntax : arr.forEach(callback(currentValue [, index, [, array]])[,thisArg])
	only current value is required else not mandetory
	for loop , forEach loop and for of loop is iterable objects
	for of loop - apply on iterable object like arrays and string
	For In loop is enumeration object not iteratble object
	For In loop is allows us to loops through the properties of an object
	Enumeration means  --look out objects properties 
refere image - forEachLoop.jpg
*/

"use strict"

const myFavProgLang = ['javascript', 'java', 'c', 'c++', 'laravel'];
//we get array value as 
console.log(myFavProgLang[1]);
console.log(myFavProgLang[0]);
console.log(myFavProgLang[4]);

//other way
for(var x=0; x < myFavProgLang.length; x ++){
	console.log("value by for loop -- ",myFavProgLang[x]);
}

//forEach loop
myFavProgLang.forEach(function(arrayvalue, index){
	console.log("using foreach loop -- index - "+ index + ",value - " + arrayvalue);
});

//Example
console.log("Example : Create one array. For each element in the array : Add the value 100 to each items and update the element value.. ==>");
const arrTest = [1,2,3,4,5];
/*console.log("ANSWER - Normal foreach loop Way -- array test before-", arrTest);
arrTest.forEach(function(arrayvalue, index){
	arrTest[index] = 100 + arrayvalue;
});
console.log("ANSWER - Normal foreach loop Way -- array test after-", arrTest);*/
console.log("ANSWER - Advanced foreach loop Way -- array test before-", arrTest);
arrTest.forEach(function(arrayvalue, index, arr){
	//console.log("inside forEach - arr : ",arr);// this statement iterates up to length of array
	//console.log("arr first element : ",arr[0]);// this statement gives result of 10 and not iterates 5 times
	console.log("add 100 to each element : ",arr[index] + 100);
});
console.log("ANSWER - Advanced foreach loop Way -- array test after-", arrTest);

// for of loop - apply on iterable object like arrays and string
const progLang = ['javascript', 'java', 'c', 'c++', 'laravel'];
for(let items of progLang)//progLand is iterable object
{
	console.log(items);
}
//on string
//if let/var const not used for items then in strict mode gives error as not defind
for(let items of "ProgLang")//string is iterable object
{
	console.log(items);
}

//For In Loop
const biodata = {
	name : "chetan",
	age : 27,
	profession : "BE"
};
//to check properties of object -- 
for (let prop in biodata){
	console.log("iside for in loop ",prop);//look out objects properties
}

function abc(a){
	console.log("abc function call..",a);
}
function neverhappens(b){
	console.log("neverhappens function call.."),b;
}
switch (1 + 3) {
	case 2 + 2:
		abc(1);
		//break;
	case 3 + 1:
		abc(2);
		//break;
	case 1 + 3:
		neverhappens(1);
		//break;
	case 4:
		neverhappens(2);
		//break;
	default:
		neverhappens(3);
}
//execute all the conditions as break is not there

/*******LABEL**********/
//A label provides a statement with an identifier that lets you refer to it elsewhere in your program. 
let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log('Outer loops: ', x);
  x += 1;
  z = 1;
  while (true) {
    console.log('Inner loops: ', z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}

/******continue statement************/
//The continue statement can be used to restart a while, do-while, for, or label statement.
//In unlike break statement, continue does not terminate the execution of the loop entirely. 
{/* In a while loop, it jumps back to the condition. In a for loop, it jumps to the increment-expression*/}
/*
continue;
continue label;
*/
let i = 0;
let j = 10;
checkiandj: while (i < 4) {
	console.log(i);
	i += 1;
	checkj: while (j > 4) {
		console.log(j);
		j -= 1;
		if ((j % 2) === 0) {
			continue checkj;
		}
		console.log(j, ' is odd.');
	}
	console.log('i = ', i);
	console.log('j = ', j);
}

/********for...in statement ******/
//The for...in statement iterates a specified variable over all the enumerable properties of an object. 
{/*for (variable in object)
  statement
*/}
const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}

/*****For Of Loop******/
//The JavaScript for of statement loops through the values of an iterable object.
//It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
{/*
Syntax
for (variable of iterable) {
  // code block to be executed
}*/
}
const cars = ["BMW", "Volvo", "Mini"];

let textForOF1 = "";
for (let x of cars) {
	textForOF1 += x;
}
let language = "JavaScript";

let text2 = "";
for (let x of language) {
	text2 += x;
}
