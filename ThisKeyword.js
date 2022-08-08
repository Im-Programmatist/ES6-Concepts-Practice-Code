{/*This Keyword In Js*/}
/*
In JS 'this' keyword refers to the object it belongs to. It has different values depending on where it is used: </h4><br/>

	Alone, this refers to global object. -- i.e. Window object in js
	In regular function, this also refer to global object
	In method/object, this refers to the owner object.
	In a function, in strict mode this is undefind.
*/

"use strict"

console.log(this); //global object referrence - windows
//regular function referrence
function sum(){
	var add = 2 + 5;
	console.log(add);
	console.log(this); //global object referrence - windows, if use trict then undefind
}
sum(); 

//method referrence
const object = {
	name : "Chetan Korde",
	qualification : "B.E. IT",
	sumobj : function() {
		var add = 2 + 2; 
		console.log(`Sum of two no. is ${add}`);
		console.log(this); // This is refer to object , it will return object {}
		console.log(this.name);

		function childreg(){
			var name = "Akshay";
			console.log(name);
			console.log("childreg is used in object function, but still it is regular function and this will refer to global object as by rule. ", this); //window object (is used trict then undefind)
		}
		childreg();
	}
} 

object.sumobj();
