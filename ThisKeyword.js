{/*This Keyword In Js*/}
/*
In JS 'this' keyword refers to the object it belongs to. It has different values depending on where it is used: </h4><br/>

	Alone, this refers to global object. -- i.e. Window object in js
	In regular function, this also refer to global object
	In method/object, this refers to the owner object.
	In a function, in strict mode this is undefind.
	Usually this referes to global context if there is no nested function - (refers context to one leyer up) 
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

var a  = 100 ;
function checkThisScope(){
	var a = 200;
	console.log(a);//200
	console.log(this.a);//100	
}

const funcObj = {
	arr : ["Java","Node","React","MongoDB"],
	str : "Tutorial",
	info(){ 
		//this.arr is valid as it can refer the outer scope here
		this.arr.forEach(function(value,index)
		{	
			//But this this.str will not reach out to the outer scope where this str defines 
			//this.str find the variable inside only the info() function, there is no such declared variable available then
			//this.str gives undefined like - 0. undefined Java, 1. undefined Node
			console.log(index+". "+this.str+" "+value);
		},this); 
		/****TO GET ACCESS OF str IN FOREACH CALL BACK -
		We must have to pass context of this to the foreach callback function then only above valiables in object can accessible in it. 
		*/
	}
}
funcObj.info(); //
/* 
Output is - without passing 'this to inner callback function'
0. undefined Java
1. undefined Node
2. undefined React
3. undefined MongoDB

Output is - without passing 'this to inner callback function'
0. Tutorial Java
1. Tutorial Node
2. Tutorial React
3. Tutorial MongoDB

*/

