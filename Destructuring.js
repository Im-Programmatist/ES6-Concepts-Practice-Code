/*
Destructuring & Swap two number
*/
//The destructuring assignment syntax is js expression  that it possible to unpack values 
//from array or properties from object in to distinct variables 

const users = { name : 'chetan', age : 27, born : 'Kalgavhan'}

//normal js, access data from object
const user_name = users.name;
const user_age = users.age;
console.log('Normal way - ', users.age);
console.log('Normal way user_age - ', users.age);

//NOW, Destructuring simply implies breacking down a complex structure into simpler parts;
	const { age, born, name } = users;

	console.log('By destructuring - ', age, born, name);


//Swap two number
	var a = 10;
	var b = 20;
	console.log(`value of a is ${a} and b is ${b}`);
	//normal way using third variable
	var temp;
	temp = a;
	a = b;
	b = temp;
	console.log(`swap value using normal (3rd var)way a is ${a} and b is ${b}`);
	var d = 10;
	var e = 20;
	[d,e] = [e,d]; // in one line
	console.log(`swap value using destructuring - d is ${d} and e is ${e}`);

//ARRAY DESTRUCTURING ----------
	console.log("ARRAY DESTRUCTURING -------");
	const myFavProgLang = ['javascript', 'java', 'c', 'c++', 'laravel'];

//normal 
	var firstItem = myFavProgLang[0];
	var secondItem = myFavProgLang[1];

//es 6
	let [top1, top2, top3, top4, top5] = myFavProgLang;
	console.log(`my favoirate prog language is ${top1}`);
	console.log("myFavProgLang.length is ",myFavProgLang.length);
	let [topone,,,,toplast] = myFavProgLang; //WE HAVE SKIP UNWANTED VARIABLE ITEMS
	console.log(`fav prog lang is ${top1} & least fav ${toplast}`);

	let top11, top22;
	[top11, top22] = myFavProgLang; //copy only first two item here
//------------------------------

//OBJECT DESTRUCTURING ------- --------------
	console.log("OBJECT DESTRUCTURING -------");
	const bioData = {
		namee : "chetan",
		agee : 27,
		degree : "BE IT",
		hobbies : {
			first : "reading",
			second : "watch movie"
		}
	}
	let {namee, agee, degree, hobbies} = bioData; //{same variable name like object}

	console.log(`My name is ${namee}, age is ${agee} & degree is ${degree}, my hobbies are ${hobbies.first} & ${hobbies.second}`);

//IF FIRST VARIABLES DECLAIRED THEN USE ()
//let name1, age1, degree1;
//{name1, age1, degree1} = bioData; // error: Uncaught SyntaxError: Unexpected token '=' to remove use () before {}
//( {namee, agee, degree} = bioData );
