/*
Call By Value & Call By Reference
*/
	"use strict"
//pass by value - Primitive datatypes copy as call by value ,for each variable have separate memory
	var a = 5;
	var b = a;
	console.log("call by value a,b - ", a, b);
	b = 20;
	console.log("call by value b value change but a not - ", a, b);
//Pass by refence -- object copy as call by reference because it is reference datatype
	const obj1 = {
		username : "Chetan",
		password : "123"
	} 

	const obj2 = obj1;
	obj2.password = "nothing";

	console.log("call by reference - object 1 copy in to  object 2 ", obj1, obj2);
	console.log("call by reference (object copy as call by reference because it is reference datatype)- object 2 password change but object1 password also changed ", obj1, obj2);

	const arr1 = [1, 2, 3, 4];
	const arr2 = arr1;
	console.log("arr1 , arr2", arr1 , arr2);
	arr2.push(5);
	console.log("arr2 push 5 in it but both array changed as Array is reference datatype - arr1 , arr2", arr1 , arr2);

	const arr3 = [1, 2, 3, 4];
	const arr4 = [].concat(arr3);
	arr4.push(5);
	console.log("if we need to change only arr4 not arr3 then use const arr4 = [].concat(arr3); \n - arr3 , arr4", arr3 , arr4);

// Other example ---

	let amount = 100;
	const objUser1 = {
		name : "Chetan Patil",
		occupation : "Software Developer"
	}
	console.log("Previous value of objUser1-- ", objUser1);
	console.log("Previous value of amount-- ", amount);
	const  funUser = (a,b) => {
		a = 200;
		b.occupation = "Farming";
	}
	funUser(amount,objUser1);// funUser(call by value, call by reference);
	console.log("New value of objUser1-- ", objUser1); //changed occupation
	console.log("New value of amount-- ", amount);
