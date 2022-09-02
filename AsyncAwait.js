import colors from 'colors';
/*
Async/Await
	 1. This is made for more comfortable way with promises.
	 2. The word 'async' before any function that means function always return a promise.
	 3. Async keyword is added to function to tell them to return  promise rather thatn directly returning the value.
	 4. we can use await when calling any function that returns a promise, including web API functions.
	 5. Keyword await makes javascript wait until that promise settles & returns its result.

 */

const promiseobj1 = new Promise( (resolve, reject) => {
	console.log(`promiseobj1 Function Called..at second ${new Date().getSeconds()}` );
	setTimeout( () => {
		let roll_no = [1,2,3,4,5];
		resolve(roll_no);
		reject('Error while communicating with API');
	}, 6000);
});

const getStudentData = (indexdata) => {
	console.log(`getStudentData Function Called..at second ${new Date().getSeconds()}` );
	return new Promise( (resolve, reject) => {
		setTimeout( (indexdata) => {
			let studentdata = { name : 'chetan', age : 27 };
			resolve( `My roll no is ${indexdata}.  My name is ${studentdata.name} & I am ${studentdata.age} year old.`);
			reject('No data get from getStudentData method.');
		}, 3000, indexdata);
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
	console.log("async function calles at second -",new Date().getSeconds());
	const rollNoData = await promiseobj1; //promise stored in constant variable
	console.log(`%c 1. first promise: ${rollNoData}`,  'background: white; color: yellow');
	console.log("Next await function(promise) runs only after first promise resolve/reject.\n---> this is the use of await, where we wait for promise even next settimeout has less timer than first  ");
	const studData = await getStudentData(rollNoData[1]);
	console.log("2. second promise: ",studData);

	console.log("------This console will run after await function runs all promises only------");
	console.log("------These 2 promise functions will takes 6+3 = 9  sec(timer set in settimeout)------",new Date().getSeconds());

	return studData; // 1. number line  method call
}

//getAsyncFunctionData(); // 1. simply call async function if there is no 'return' data

const getName = getAsyncFunctionData().then( (myname) => {
	console.log("4.",myname);
	console.log("5. Consoles will run as per number and respective functions call,if async and await remove, \n else async and await will run and controll flow will wait for promiseq to resolve or reject ");
}); // 2. If there is 'return' value from function, we have to STORE function data in any variable
console.log("3.",getName); //Result : Promise {<pending>}

