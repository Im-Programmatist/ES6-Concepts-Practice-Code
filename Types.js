/*
Types In JS</title>
*/
/*	
	Premitive Data Types : Number, String, Boolean, Undefind, Null & Symbol - these are the types in javascript
	Premitive Data Types OR Reference DataTypes/Object :  Else everything is an Object in javascript.
	Even Array is an Object in javascript.
	isArray() method determines whether an object is an array. - Syntax : Array.isArray(any :arg)
*/

	let a = 1;
	let b = "chetan";
	let c = true;
	let d;
	let e = "";
	let f = null; 
	console.log("typeof a=1 -",typeof(a));//number
	console.log("typeof b='chetan' -",typeof(b));//string
	console.log("typeof c=true -",typeof(c));//boolean
	console.log("typeof let d -",typeof(d));//undefind
	console.log("typeof e='' -",typeof(e));//string
	console.log("typeof f=null -",typeof(f));//object --> because there is mistek while making javascript, we can not return null type to show, though it is in primitive datatype
	console.log("typeof {}",typeof({}));//object
	console.log("typeof function(){}",typeof(function(){}));//function
	function abc(){};
	console.log("typeof function abc -",typeof(abc));//function
	console.log("typeof function abc -",typeof(abc()));//Undefined (Called abc)as it doesnt return any type of data

//------------------------------------
//though it is function showing as type but it is an object
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
