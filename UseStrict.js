/*
Use strict - Defines that JavaScript code should be executed in "strict mode".
*/
/*
It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.

The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

With strict mode, you can not, for example, use undeclared variables.

Strict mode makes it easier to write "secure" JavaScript.

Strict mode changes previously accepted "bad syntax" into real errors.

As an example, in normal JavaScript, mistyping a variable name creates a new global variable. 
In strict mode, this will throw an error, making it impossible to accidentally create a global variable.

1.Using a variable, without declaring it, is not allowed
2.Using a variable, without declaring it, is not allowed
3.Deleting a variable (or object or function ) is not allowed
"use strict";
let x = 3.14;
delete x; 
4. Duplicating a parameter name is not allowed
5. Octal numeric literals &  Octal escape characters are not allowed
"use strict";
let x = 010;    
let x = "\010"; //escape characters
6. 

*/
	"use strict"

	function sum(a,b){
		add = a + b;
		console.log(add); // result :Error -  Uncaught ReferenceError: add is not defined
		//because - we used strict mod, if not then result must be 20
	}
	sum(10,10);

	function duplicate(a,a){
		add = a + 20;
		console.log(add); // result : Error - Uncaught SyntaxError: Duplicate parameter name not allowed in this context
	}
	duplicate(10,10);

	const obj = {};
	Object.defineProperty(obj, "x", {value:0, writable:false});

	obj.x = 3.14;  //Writing to a read-only property is not allowed
	
	//let arguments = 3.14; //not allowed

	//with (Math){x = cos(2)}; // This will cause an error
