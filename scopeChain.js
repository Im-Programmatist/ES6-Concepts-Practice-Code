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

/*The time required to run this code in Google Chrome is considerably more than the time required to run it in Node.js. 
Explain why this is so, even though both use the v8 JavaScript Engine. */
{
    console.time("loop");
    for (let i = 0; i < 1000000; i += 1){
        // Do nothing
    }
    console.timeEnd("loop");
}
/**
 * Answer --->
 * 1. Within a web browser such as Chrome, declaring the variable i outside of any function’s scope makes it global and therefore binds it as a property of the window object. 
 * 2. running this code in a web browser requires repeatedly resolving the property i within the heavily populated window namespace in each iteration of the for loop.
 * 3. In Node.js, however, declaring any variable outside of any function’s scope binds it only to the module’s own scope (not the window object) which therefore makes it much easier and faster to resolve.
 * 4. We can reduce run time by 50% if we use let instead of var in loop, let will be in local scope  so it will take same time in browser and node env
*/
