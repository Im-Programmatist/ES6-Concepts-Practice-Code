/*
Async/Await
	 1. This is made for more comfortable way with promises.
	 2. The word 'async' before any function that means function always return a promise.
	 3. Async keyword is added to function to tell them to return  promise rather thatn directly returning the value.
	 4. we can use await when calling any function that returns a promise, including web API functions.
	 5. Keyword await makes javascript wait until that promise settles & returns its result.

 */

const promiseobj1 = new Promise( (resolve, reject) => {
	
	setTimeout( () => {
		let roll_no = [1,2,3,4,5];
		resolve(roll_no);
		reject('Error while communicating with API');
	}, 2000);
});

const getStudentData = (indexdata) => {
	return new Promise( (resolve, reject) => {
		setTimeout( (indexdata) => {
			let studentdata = { name : 'chetan', age : 27 };
			resolve( `My roll no is ${indexdata}.  My name is ${studentdata.name} & I am ${studentdata.age} year old.`);
			reject('No data get from getStudentData method.');
		}, 2000, indexdata);
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
	const rollNoData = await promiseobj1; //promise stored in constant variable
	console.log(rollNoData);

	const studData = await getStudentData(rollNoData[1]);
	console.log(studData);

	return studData; // 1. number line  method call
}

//getAsyncFunctionData(); // 1. simply call async function if there is no 'return' data

const getName = getAsyncFunctionData().then( (myname) => {
	console.log(myname);
}); // 2. If there is 'return' value from function, we have to STORE function data in any variable
console.log(getName); //Result : Promise {<pending>}

