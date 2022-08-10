/*
Hosting In JS
*/
// In Creation Phase of Execution variable objects, scope chain & function objects created and function , variable get declaration with undefined value;
// All these declaired value keep at the top in <i>it's scope(block or function, where there those variable or function is present  not at global)</i>>. so that after calling variable or function we get it's refferences in execution phase of program code.

// This hosting works on variable  var not on let and const
	
//c is in lexical envirment of a and g is in lexical envirment of global execution context.
// so c can access variable from global and a function.
    
/**
 * Hoisting is the default behavior of moving all the declarations at the top of the scope 
 * before code execution. Basically, it gives us an advantage that no matter where functions 
 * and variables are declared, they are moved to the top of their scope regardless of whether 
 * their scope is global or local. 
 */
var g = 1000;
function a(){
	var b = 10;
	console.log(g); //can access as it is in global env 
	c();
	function c(){
		console.log(b);
		console.log(g);//can access as it is in global env 
	}
}
a();
console.log(b); //not works as this console is out of lexical env of a and c  it 


//--------------------
//Variable Declaration & Hosting
//hosting with scope
console.log("Global scope 1 -- I am chetan & I am "+ profession); // //undefind
var profession = "Software engg."
console.log("Global scope 2 --  I am chetan & I am "+ profession); // Software engg.
function whoIAM(){
	console.log("Function scope 1 -- I am chetan & I am "+ profession); //undefind
	var profession = "Web Developer.";
	console.log("Function scope 2 -- I am chetan & I am "+ profession); //"Web Developer."
}
whoIAM();

//console.log('variable declaration b',b); //b is not defind

var b; //this is not type of hosting as we declaire var b first with not value.
console.log('variable declaration b',b); //result: undefind , becasue b is variable and hosted at top with undefind value; 
b = 20;

/*hosting is*/
console.log("value of c",c);// result : undefind, due to hosting
var c; // this line goes at top in hosting as -- var c = undefind; 
c = 50;
//-----------

console.log('variable declaration on let variable d',d,e); //Uncaught ReferenceError: Cannot access 'd' & 'e' before initialization
let d = 30;
const e = 30;

//--------------------------
//First Example

function sum1(a,b){
	console.log("sum 1 = ",a+b);
}

sum1(5,5); ///result : 10
// --------------------
//Second Example 
sum2(10,15); // Here due to Hosting, function declaration done and put below function at top and then this line comes

function sum2(a,b){
	console.log("Still here we have call function before it's creation we get result sum2 = ",a+b);
}

//----------------------
//Example 3 
sum3(15,15); //Result : uncaught REFFERENCE error : sum3 is not defined
//because, below function put in parenthesis and hosting implies only for function and variable not to other things in js

(function sum3(a,b){
	console.log("sum 1 = ",a+b);
});

//-------------------------
//Example 4

sum4(20,20); // Result : Uncaught TYPE_ERROR: sum4 is not a function
//because sum4 function is stored as variable , so variable object created  and sum4 has variable TYPE declaration not function in creation phase .
var sum4 = function(a,b){
	console.log("sum4 - ",a+b);
}

console.log(sum4);// sum 4 function body woill get in result

/* above example 4 code in hostinglooks like ---

var sum4 = undefined;
function sum4(a,b){
	console.log("sum4 - ",a+b);
}
sum4(20,20);
*/
//Check Hosting Concept In JS</title>
getName();
console.log(x)

var x = 7;
function getName(){
    console.log("Hello world!!!");
}

var funGetName = () => {
    console.log("This is arrow function");
}

funGetName();