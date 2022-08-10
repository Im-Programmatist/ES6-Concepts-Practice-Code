/*
JavaScript Class

How to use a JavaScript Class.
Even though it is empty class, log shows method,variables, constructure(js do for us)
Hosting concept not works for class and object in javascript like variables & function 

*/

//Class fields are public by default, 
//but private class members can be created by using a hash # prefix.


class ClassWithPrivateMethod {
	#privateMethod() {
	  return 'hello world';
	}
  
	getPrivateMessage() {
	  return this.#privateMethod();
	}
}

const instance = new ClassWithPrivateMethod();
console.log(instance.getPrivateMessage());// hello world

  
class Car {
	constructor(name, year) {
		this.name = name;
		this.year = year;
	}
}

myCar = new Car("Ford", 2014);

console.log("Car Class data -" + myCar.name + " " + myCar.year);

//---------------------------
//PARENT CLASS
class Student
{
	constructor(name,age,degree){
		this.name = name;
		this.age = age;
		this.degree = degree;
	}
	bioData(){
		//console.log(`Hi, my name is ${this.name}, my age is ${this.age} & education is ${this.degree}`);  //it will not return while calling anything

		return `Hi, my name is ${this.name}, my age is ${this.age} & education is ${this.degree}`;
	}
}

//INHERITE CLASS
class Player extends Student{

}//Class defind only not added anything still access parent class method and variables

//INHERITE CLASS
class GamePlayer extends Student{
	constructor(name,age,degree,game){
		super(name,age,degree); //MUST TO WRITE IN CHILD CONSTRUCTOR WITH ALL PARAMETER MENTIONED IN PARENT CONSTRUCTOR
		this.mygame = game;
	}
	bioData(){
		console.log(`Hi, my name is ${this.name}, my age is ${this.age} & education is ${this.degree}, also playing ${this.mygame}`); //New Feature added than parent
	}
	anotherWayCallParentMethod(){
		console.log(`${super.bioData()}, also playing ${this.mygame}`); //New Feature added than parent
	}
}

let obj1 = new Student('Chetan',27,'B.E.');
let playerobj1 = new Player('Patil',25,'IT');
obj1.bioData();
playerobj1.bioData();
console.log(playerobj1);//Even though it is empty class, log shows method,variables, constructure(js do for us)
let gameObj1 = new GamePlayer('Akshay',25,'IT','ckicket');
gameObj1.bioData();
gameObj1.anotherWayCallParentMethod();
