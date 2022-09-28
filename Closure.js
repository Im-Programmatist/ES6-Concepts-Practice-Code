/*
Closures 
	1. Closure in action that is inner function can have access to the outer function's variable & global variables.
	2. Closure is the combination of a function and the lexical envirment within which that function is declaired
	3. 
*/

// this is lexical scope as well as simple example of closure ---
	const outerFun = (a) => {
		let b = 10;
		const innerFun = () => {
			let sum = a + b ;
			console.log(`First example -- the sum of a & b is - ${a+b}`);
		};
		innerFun();
	};

	outerFun(15);
//-------------

// The return statement does not execute the inner function -- function is executed only when follwed by () , but rather the return statement returns the entire body of the function.
//PURE example of closure
var d = 25; //global var 
const outerFunction = (a) => {
		let b = 10;
		const innerFunction = () => {
			let sum = a + b + d;
			console.log(`Second example -- the sum of a & b is - ${a+b}`);
		};
		//innerFunction();//calll and return console value as result
		return innerFunction; //here we have not put () - innerFunction(), so it will return body noot get call by itself;
	};

	const inner = outerFunction(15);
	console.dir(inner);/*returns body of innerFunction & save value of outer fun variable and inner variable value in memory as closure - [[Scopes]]: Scopes[3] 
						0: Closure (outerFunction)
							a: 15
							b: 10 */
	inner();//result : in --Second example -- the sum of a & b i

// Excercise on Closure ---
console.log( 'Excercise on Closure ---');

const interviewQuestions = (name) =>
{
	return (topic) => {
		if(name == "Chetan"){
			console.log(`HI, ${name} please explain what is ${topic}.`);
		}
		else if(name == "Akshay"){
			console.log(`HI, ${name} please explain what is ${topic}.`);
		}
		else if(name == "Nikhil"){
			console.log(`HI, ${name} please explain what is ${topic}.`);
		}
		else if(name == "Mayur"){
			console.log(`HI, ${name} please explain what is ${topic}.`);
		}
	}
}

// Normal way
console.log('Normal Way ...');
const candidateC = interviewQuestions("Chetan"); //give body of inner function
candidateC("JQuery"); // inner function
const candidateA = interviewQuestions("Akshay");
candidateA("JS");
const candidateN = interviewQuestions("Nikhil");
candidateN("UI");
const candidateM = interviewQuestions("Mayur");
candidateM("ES6");

//Advanced Way 
console.log('Advanced Way ...');
interviewQuestions("Chetan")("JQuery");
interviewQuestions("Akshay")("JS");
interviewQuestions("Nikhil")("UI");
interviewQuestions("Mayur")("ES6");
