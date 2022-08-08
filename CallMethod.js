
/* 
Call() method is a predefined javascript method. 
Using this method, a object can use a method belonging another object. 
Syntax - ObjectCOntainsMethodName.MethodName. call( ObjectNeedsThatObj1MethodName, arguments ... )
*/
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
programmer1.feature.call(programmer2); // Call method syntax
programmer1.feature.call(programmer2, 5, 5); // Call method using arguments
