require('colors');
/*
There are different ways to handle the asynchronous code in NodeJS or in JavaScript which are:
Callbacks
Promises
Async/Await -- in this tutorial we will see this
*/
/*
Async/Await - 
* Async/Await is used to work with promises in asynchronous functions. 
* It is basically syntactic sugar for promises. 
* It is just a wrapper to restyle code and make promises easier to read and use.
	 1. This is made for more comfortable way with promises.
	 2. The word 'async' before any function that means function always return a promise.
	 3. Async keyword is added to function to tell them to return  promise rather thatn directly returning the value.
	 4. we can use await when calling any function that returns a promise, including web API functions.
	 5. Keyword await makes javascript wait until that promise settles & returns its result.
	 6. The keyword await makes JavaScript wait until that promise settles and returns its result.
 */

//this promise execute immediately thats why without calling it console in it runs
const testting = new Promise( (resolve, reject) => {
	console.log(`Test promise involking`);
	resolve("test promise resolved...!");
	reject("Error while communicating with API");
});
	
const promiseobj1 = new Promise( (resolve, reject) => {
	console.log(`AA. promiseobj1 Function Called..at second ${new Date().getSeconds()}`.yellow );
	setTimeout( () => {
		let roll_no = [1,2,3,4,5];
		resolve(roll_no);
		reject('Error while communicating with API');
	}, 6000);
});

const getStudentData = (indexdata) => {
	console.log(`BB. getStudentData Function Called..at second ${new Date().getSeconds()}`.yellow );
	return new Promise( (resolve, reject) => {
		setTimeout( (indexdata) => {
			let studentdata = { name : 'chetan', age : 27 };
			resolve( `My roll no is ${indexdata}.  My name is ${studentdata.name} & I am ${studentdata.age} year old.`);
			reject('No data get from getStudentData method.');
		}, 3000, indexdata);//passing this->indexdata reference to setTimeout
	});
};

//TO AVOID THIS CODE ---
/*promiseobj1.then( (rollno) => {
	console.log(rollno);
	console.log(rollno[1]);
	return getStudentData(rollno[1]); //return second promise method and this 'then' method to atteched first then method
}).then( (anything) => {
	console.log("second promise method - ", anything);
}).catch( () => {
	console.log("reject method called.when resolve method commented");
});*/
//-----------

//USE async await here --

async function getAsyncFunctionData()
{
	var x = 10;
	console.log(x);
	console.log(`A.async getAsyncFunctionData function calles at second - ${new Date().getSeconds()}`.yellow);
	
	const test = await testting; 
	console.log("test - ",test);
	const rollNoData = await promiseobj1; //promise stored in constant variable
	console.log(`1. first promise: ${rollNoData}`.blue);

	console.log("B. Next await function(promise) runs only after first promise resolve/reject.\n---> this is the use of await, where we wait for promise even next settimeout has less timer than first ".green);
	const studData = await getStudentData(rollNoData[1]);
	console.log(`2. second promise: ${studData}`.blue);

	console.log("------This console will run after await function runs all promises only------".green);
	console.log(`------These 2 promise functions will takes 6+3 = 9  sec(timer set in settimeout)------${new Date().getSeconds()}`.green);

	return studData; // 1. number line  method call
}

//getAsyncFunctionData(); // 1. simply call async function if there is no 'return' data

const getName = getAsyncFunctionData().then( (myname) => {
	console.log(`4. ${myname}`.blue);
	console.log(`5. Consoles will run as per number and respective functions call,if async and await remove, \n else async and await will run and controll flow will wait for promiseq to resolve or reject`.green);
}); // 2. If there is 'return' value from function, we have to STORE function data in any variable
console.log("3.",getName); //Result : Promise {<pending>}

