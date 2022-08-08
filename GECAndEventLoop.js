/*
GEC & Event loop
*/

//Execution Context Envirnment & Execution stack
/*
	1. GEC(Global Execution context) js engine creates the global execution context before it start to execute any code. It is none other than execution context except it creates default
	2. New execution context create every time when function is executed.
	3. GEC -> associates with global object , means Windows Object. like - this === window, name = window.name (go in to console and type this, name ="chetan thin window--")
	Execution stack  
		Excecution stack also known as calling stack - it is a stack with a LIFO(Last in First Out) structure which is use to store all the execution context created during the code execution.</i>
*/

//JavaScript interpreter -
/*
	interpreter creates a new context whenever it’s about to execute a function or script we’ve written. Every script/code starts with an execution context called a global execution context. And every time we call a function, a new execution context is created and is put on top of the execution stack. 
	The same pattern follows when you call the nested function which calls another nested function:
*/
//Reffer image - <img src="executionenv.png" alt="img"/> 
/*	
	A global execution context  is created and placed at the bottom of the execution stack.
	When the bar is invoked, a new  bar execution context  is created and is put on top of the global execution context.
	As, bar calls to a nested function foo, a new  foo execution context  is created and is placed on top of the bar execution context.
	When foo returns, its context is popped out of the stack and flow returns to the bar context.
	Once bar execution is finished, the flow returns back to the global context and finally, the stack is emptied.
	
	1. Wen we call any function or js inbuild functions like consiole.log etc, execution stack fill up one by one and move pointer accordingly,
	If function A call & has console & then function B call and has settimeout 
	Then funA(push) at bottom,console will call and remove(pop) after result (In Message Queue envirment</i>) & funB in (push) and then settimeout push in and execution stack envirment passes this settimeout function to it's original envirment Web APIS in js as timer function. 
	
	Web APIS Envirment
	1. setTimeout();
	2. Ajax Call
	3. DOM manupulation
	4. Client Side Storage
	5. Video & Audio APIs & Third Party Api
	belongs to this web api envirments in javascript  
*/

//Web APIs? In essence, they are threads that you can’t access, you can just make calls to them. They are the pieces of the browser in which concurrency kicks in. If you’re a Node.js developer, these are the C++ APIs.

//Event Loop
/*
	Simply it is use to fetch callback functions from callback queue to the execution stack
	The common denominator in all environments is a built-in mechanism called the event loop, which handles the execution of multiple chunks of your program over time, each time invoking the JS Engine.
	This means that the JS Engine is just an on-demand execution environment for any arbitrary JS code. It’s the surrounding environment that schedules the events (the JS code executions).
	So, for example, when your JavaScript program makes an Ajax request to fetch some data from the server, you set up the “response” code in a function (the “callback”), and the JS Engine tells the hosting environment:
	“Hey, I’m going to suspend execution for now, but whenever you finish with that network request, and you have some data, please call this function back.”
	The browser is then set up to listen for the response from the network, and when it has something to return to you, it will schedule the callback function to be executed by inserting it into the event loop.
	Let’s look at the below diagram:
	
	<!-- <img src="eventloopinjs.png"/> -->
	
	Open Inspect and go to source tab and at  left side you will see stack
*/
	
//Execution Stack Example
 var globalEC = "added";

 function a(){
 	var fa = "1nd function o/p 1";
 	console.log(fa);
 	debugger;
 	b();
 	console.log("Let's see when i will be on console.");
}

function b(){
	debugger;
	console.log("1nd function o/p 2");
	c();
}

function c(){
	debugger;
	console.log("3rd function o/p 3");
}
debugger;
a();


//-----------------------------
