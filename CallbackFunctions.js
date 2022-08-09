/*
--- Callback functions ---

1. we can assign function to variables
2. We can Pass functions as an Argument -- callback functions
3. Returning Function.

A callback function that is to be executed after another function has finished executing --- hence the name 'call back'
Javascript is an eent drivent language. This means That insted of waiting for a response before moving on, Javascript will keep executing while listening for other event.

So, we use callback - callbacks are a way to make sure certain code doesn't execute until other code has already finished execution.

When we treat function as value & The function that we pass as an argument to another function, is called a Callback function.
Function is First class citizen in JS, means <i>Assign a function to a variable , we can assign a function as a value to a key in an object, we can return one function to another function.

*/

"use strict"
	const functionA = (callOtherFunction) => {
		/*setTimeout( () => {
			console.log('Welcome Function A ');
		}, 3000);*/
		console.log('Welcome Function A ');
		callOtherFunction();
	};
	const functionB = () => {
		console.log('Welcome Function B ');
	};

	//functionA(); // without settimeout - result - A then B but if there settimewiout then B & A
	//functionB();

	//Using Callback	
	functionA(functionB);


	//Functioon is first class citizen
	function a(){
		console.log("a call only");
		return function b(){
			console.log("Example of function as first class citizen...\n Here we return one function from another function");
		}
	}
	a();// Result : a call only
	a()(); // Result : 'a call only' (this is due to first paranthesis) & b's console log (this is due to second paranthesis)
