/* 
Data Types
    - You can convert a string to an integer using the built-in parseInt() function. This takes the base for the conversion as an optional second argument.
    Similarly, you can parse floating point numbers using the built-in parseFloat() function.
    You can also use the unary + operator to convert values to numbers:            
        + '42';   // 42
        + '010';  // 10
        + '0x10'; // 16
        
    To find the length of a string (in code units), access its length property:
    eg, -- 'hello'.length; // 5
        
**Falcy Values - 
    - false, 0, empty strings (""), NaN, null, and undefined all become false. All other values become true.
    - it is always evaluated as fallacy(false). 
    - Also, the negation of these values((null, undefined, false, '', 0) in a if statement always evaluated as tautology(true).
    - All other values—including all objects—evaluate to true when passed to a conditional statement.
    - Do not confuse the primitive boolean values true and false with the true and false values of the Boolean object!
*/
const bol = new Boolean(false);
if (bol) {
  // this condition evaluates to true
  console.log("This is true as it is object of boolean");
}
if (bol == true) {
  // this condition evaluates to false
}

/*
**Operators- increment and decrement
    - You can use ++ and -- to increment and decrement respectively. These can be used as a prefix or postfix operators.
        
**Convert -   
    If you add a string to a number (or other value) everything is converted into a string first. This might trip you up:
    <br/>
    '3' + 4 + 5;  // "345"
    <br/>
    3 + 4 + '5'; // "75"
    
    Adding an empty string to something is a useful way of converting it to a string itself.
*/
    console.log(3 / 2); // 1.5, not 1
    console.log(Math.floor(3 / 2)); // 1
    console.log(0.1 + 0.2);// == 0.30000000000000004 operation run on 32 bit not just normal arithmatic operation
    console.log(parseInt('123', 10)); // 123
    console.log(parseInt('010', 10)); // 10
    console.log(parseInt('11', 2)); ; // 3
    console.log(+ '0x10'); // 16 / hexa decimal base 16
    console.log(+ '010'); // 10 integer base 10
    Number.isNaN(NaN); // true
    Number.isNaN('hello'); // false
    Number.isNaN('1'); // false
    console.log(Number.isNaN(1)); // false

    console.log('hello'.charAt(0)); // "h"
    console.log('hello, world'.replace('world', 'mars'));; // "hello, mars"
    console.log('hello'.toUpperCase());; // "HELLO"

    console.log(Boolean(''));  // false
    console.log(Boolean(234)); // true);

    console.log('3' + 4 + 5);  // "345"
    console.log(3 + 4 + '5'); // "75"
    console.log(123 == '123'); // true
    console.log(1 == true); // true

       
/*
Types In JS
*/

/* 
Premitive Data Types : Number, String, Boolean, Undefind, Null & Symbol - these are the types in javascript
Premitive Data Types OR Reference DataTypes/Object :  Else everything is an Object in javascript.
Even Array is  an Object in javascript.
isArray() method determines whether an object is an array. - Syntax : Array.isArray(any :arg)
*/
	let a = 1;
	let b = "chetan";
	let c = true;
	let d;
	let e = "";
	let f = null; 
	console.log("typeof a",typeof(a));
	console.log("typeof b",typeof(b));
	console.log("typeof c",typeof(c));
	console.log("typeof d",typeof(d));//undefind
	console.log("typeof e",typeof(e));
	console.log("typeof f",typeof(f));//object --> because there is mistek while making javascript, we can not return null type to show, though it is in primitive datatype
	console.log("typeof {}",typeof({}));//object

//------------------------------------
	console.log("typeof function(){}",typeof(function(){}));//function

    //though it is function showing as ype but it is an object

    // we have created check arrow function and call like an object as check.letshavefun, added letshavefun variable to function just like object
	const check = () => {
		console.log("checking...");
	}

	check.letshavefun	= "allright I am an object too";
	console.log("check.letshavefun", check.letshavefun);
//------------------------------------------------------
	//both Array and object representation in console is same , so aaray and object is same , array is object
	const array = [1,2,3];
	console.log("value array",array);
	console.log("typeof array",typeof(array));
	const arrayObject = {
		0 : 1,
		1 : 2,
		2 : 3
	}
	console.log("value arrayObject",array);
	console.log("typeof arrayObject",typeof(array));
	console.log("Using isArray to show object is array (difference in object which is object and which is array)-- arrayObject - ", Array.isArray(arrayObject), " & array - ", Array.isArray(array));
