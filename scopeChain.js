// *** Scope Chain
//refere image - scope_chain.jpg

/*
1. Let - has block scope
2. Var - has functional scope
3. const - varial value can not change 
*/

var a = "this is global var .. ";
function outer(){
	var b = "this is outer function's var ... ";
	innerfunction();
	function innerfunction(){
		var c = "this is inner function variable.. ";
		console.log(a+b+c); //result : this is global var .. this is outer function's var ...this is inner function variable..
		//result due to lexical scoping ..inner function can access outer function's & global var 
		//innerfunction look for missing variable in outer and global function .
	}
}
function innerfunction(){
	var c = "can not access b & c .. ";
	console.log(a+b+c+d); // result : uncaught refference error : b is not defind
	console.log(a+d); // result : this is global var .. can not access b & c .. 
}
outer();
