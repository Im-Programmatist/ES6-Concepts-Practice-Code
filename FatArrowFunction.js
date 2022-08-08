/*
Fat Arrow Function
*/

"use strict"
//Normal javascript way

function add(a, b){
	console.log(a+b);
 	return a + b;
} 

add(21,22);

//Using Arrow Function
const addsum = (a, b) => { return a + b; }
addsum(21,22);

//for single line , no need of {} & return keyword
const addsumwithoutcurly = (a, b) =>  a + b; 
console.log(addsumwithoutcurly(5,5));

let a = 40;
let b = 50;
const sum = () => a+b;
console.log(sum());
