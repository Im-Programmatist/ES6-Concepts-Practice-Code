//**** REST Parameter
/*
	Rest parameter is an improved way toi handle function parameter, allowinbg us to more easily handle various input as parameters in a function.<br/> The rest param syntax allow us to represent an indefinite number of arguments as an array 
	
	Spread operator allows an iterable to expand in places where 0+(zero pluse) arguments are expected.it is mostly used in variable array where there is more than 1 value expected. it allows us to optain list of parameters from an array.<b> Syntax of spread operator is same as rest parameter but it works completely opposite - it replace apply() method 
	*** Rest parameter apply on param of function & spread used at argument while calling myFunction

*/
	//ES5
	function sum(a,b,c,d,e,f,g,h){
		console.log(a+b+c+d+e+f+g+h);
	}
	sum(1,2,3,4,5,6,7,8); //too lengthy way

	//ES6
	function sumES6(...inputs){ //3 dots needed
		console.log(inputs);
		let total = 0;
		for(let i of inputs)
		{
			total += i;
		}
		console.log("using es6 total is-- ",total);
	}
	sumES6(1,2,3,4,5,6,7,8);

	const restParamFun = (a,b,...c) =>{
		console.log(`${a} ${b}`);
		console.log(c);
		console.log(c[0]);
		console.log(c.length);
		console.log(c.indexOf('Edan'));
	}
	restParamFun('ronaldo','neymar','pele','messi','Edan');

// Spread OPERATOR
//replace apply method in es5
	function sum(a,b,c) {
		console.log("sum is - ",a+b+c)
	}
	var arrVal = [5,4,1];
	sum.apply(null,arrVal); //null insted of this
	//using spread operator
	console.log(...arrVal);// values of array item separated
	sum(...arrVal); //in single line only

	let arr1 = [1,2,3];
	let arr2 = [4,5,6];
	let arr3 = [7,8,9];
	let arr4 = [10,11,12];
	//normal way
	//arr1 = arr1.concat(arr2);
	//console.log("Normal way -- ",arr1);
	arr1 = [...arr1,...arr2,...arr3,...arr4];
	console.log("ES6 way using spread operator -- ",arr1);

//replace copy) method
	let arrc1 = [1,2,3];
	let arrc3 = [8,9,10];
	let arrc2 = arrc1;
	arrc2.push(4,5);
	console.log("arrc1",arrc1);
	console.log("arrc2",arrc2); //we have copy arrac1 to c2 and push 4,5 in arrc2 but arrc1 also changed
	//es6
	let arrc2es6 = [...arrc1,6,7,...arrc3];// no need of push method
	console.log("arrc1",arrc1);
	console.log("arrc2es6",arrc2es6);//6, & 7 get push and not changed arrc1 
