/*
*********Anonymous & Higher Order Function
*/
/*	
1. Function doent have any name is anonymous function. 
2. Higher Order Function - function that takes other function as argument or returns function as their results.
IIFE - immediately invoked function expression
	
		It is used when we want to keep private data
		It is the self executing anonymous function and contains two mejor parts
		1. First : - anonymous function with lexical scope enclosed within the group operator (). This prevent accessing variables within the IIFE idiom as well as polluting the global scope.	
		2. immediatly involked function expression () through which the js engine will  directly intepret the function. 	
	
Reffer image - anonymous_and_IIFE.jpg
*/
	document.addEventListener('click', () => {
		console.log("Calling anonymoous function...");
	}/*this is anonymous function*/);

	let sum = (a,b) => {
		let add = a + b;
		console.log("add : ", add);
	}; //this is anonymous function
	sum(5,5);

//Higher Order Function

const interviewQuestion = (name) => {
	if(name === "chetan"){
		return function (topic){
			console.log(`Hii ${name} what is ${topic} ?, please explain us`);
		}
	}
	if(name === "akshay"){
		return function (topic){
			console.log(`Hii ${name} what is ${topic} ?, please explain us`);
		}
	}
	if(name === "nikhil"){
		return function (topic){
			console.log(`Hii ${name} what is ${topic} ?, please explain us`);
		}
	}
	else{
		return function(){
			console.log("Welcome to Interview");
		}
	}
}


interviewQuestion("chetan")("UI"); //Higher Order Function Call
interviewQuestion("akshay")("C#"); //Higher Order Function Call
interviewQuestion("Nikhil")("Web"); //Higher Order Function Call
//OR other way to calll
const c1 = interviewQuestion("chetan");
c1("UI");


function aa(param1){
	console.log("AA param 1",param1);
	return function bb(param2){
		console.log("BB param 2",param2);
		return function aa(param3){
			console.log("CC param 3",param3);
		}
	}
}
aa(10)(20)(30);

//IIFE Example
console.log("IIFE Example");

( function() {
	var aName = "chetan";
	console.log(`a name is ${aName}`);
})(); //Anonymous IIFE

//console.log(aName); // undefind even it is var 

( function(param1) {
	console.log(`a name is ${param1}`);
})("Chetan"); //Anonymous IIFE
