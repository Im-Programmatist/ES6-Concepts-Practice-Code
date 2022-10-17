//  Apply()  - method is simmilar to call() method.
//  Call method - takes argument separately
//  Apply() - takes arguments as an array
//  bind() - -By using bind methhod we can bind object to a common function, so that the function gives different result when its need. 
//  bind() - method takes an object as an first argument and creates a new function. 

console.log("Apply() method example START-----------");
const programmer1 = {
	name : "Chetan",
	containt : "Programming",
	feature : function(parating = 3, point = 0) {
		console.log(`${this.name} is very good programmer & creates ${this.containt} videos. & has ${parating} pa rating & point is ${point}`);
	}
};	
programmer1.feature();//without arguments
programmer1.feature(3.4);//with single arguments
programmer1.feature(3.4, 5);//with all arguments

const programmer2 = {
	name : "Nikhil",
	containt : "Backend Development",
};	

programmer1.feature.apply(programmer2, [5, 5]); // Apply method using arguments --same like Call() Method

// Using Math  Predefind Function 
let max = Math.max(1,2,3);
console.log("Maximum number in 1,2,3 is - ",max);
//using Apply
let arrMax = Math.max.apply(null, [1,2,3,4,5,6]); //Used null as first argument insted of this, or ny func, object
console.log(arrMax);

console.log("Apply() example END-----------");

//BIND
console.log("bind() example START-----------");
//normal function access
const myjob = {
	name : "Chetan Korde",
	content : "programming",
	feature : function(){
		console.log(`My name is ${this.name}. my job topic is ${this.content} topics.`);
	} 
}
myjob.feature();

//can not do as below
let myjobfun = myjob.feature;//can not bind myjob with myjobfun like this.
myjobfun();//nothing will get not name nor content iin console

//using bind
let bindfun = myjob.feature.bind(myjob);
bindfun();

//const saveObjFun = myjob.feature();//error , wrong practice
//console.log("copy/try to bind fun in obj  in to saveObjFun const and then call - ",saveObjFun());//Uncaught TypeError: saveObjFun is not a function

console.log("bind() example END-----------");


const a = {
	name : "Chetan Korde1",
	content : "programming1",
}
const b = {
	name : "Chetan Korde2",
	content : "programming2",
}
const c = {
	name : "Chetan Korde3",
	content : "programming3",
}
function feature(rating){
	console.log(`My name is ${this.name}. my job topic is ${this.content} topics & rating is ${rating} star`);
}
console.log('a object befor bind- ', a);
let bindToA = feature.bind(a);
bindToA(5);//ratring argument passed
console.log('a object after bind- ', a);// not change actual value & structure of object
//here we used content in object with function feature as per our need

//feature();//error this.name & this.content undefind
