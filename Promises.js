/*
Promises
*/
/*
	Promises are used to handle asynchronous operation in js.They are easy to manage operations when multiple  async task.
	Promises is an object that keep track about whether certain task /event has happend already or not Promises determnine what happens after event has happend.
	Promises help to eleminate call back hell in js
	Promise has 3 stages --
		
			1. Pending --> wait
			2. Resolve --> success
			3. Reject --> failure
		

	To create new promise object use --
		var promiseObj = new Promise(executor_function);
	method for promise -- 
		
			1. then - after resolve function call --
			2. catch  - after reject function call --
*/

// our task is -
// 1. get roll number in 2 second
// 2. after roll number get details of student in next 2 sec

const promiseobj1 = new Promise( (resolve, reject) => {
	
	setTimeout( () => {
		let roll_no = [1,2,3,4,5];
		//resolve(roll_no);
		reject('Error while communicating with API');
	}, 2000);
});

const getData = (indexdata) => {
	return new Promise( (resolve, reject) => {
		setTimeout( (indexdata) => {
			let studentdata = { name : 'chetan', age : 27 };
			resolve( `My roll no is ${indexdata}.  My name is ${studentdata.name} & I am ${studentdata.age} year old.`);
			reject('No data get from getData method.');
		}, 2000, indexdata);
	});
};


// Settimeout defination
//setTimeout(handler: any, timeout?: long, arguments...: any);

{/* ONE way to use multiple then method for multiple promises */}
{/*promiseobj1.then( (rollno) => {
	console.log(rollno);
	console.log(rollno[1]);
	getData(rollno[1]).then( (anything) => {
		console.log("second promise method - ", anything);
	}).catch( (rejectMsg) => {
		console.log("reject method called.when second promise resolve method commented --",rejectMsg);
	});
}).catch( () => {
	console.log("reject method called.when resolve method commented");
});
*/}
{/*Recommanded way*/}

promiseobj1.then( (rollno) => {
	console.log(rollno);
	console.log(rollno[1]);
	return getData(rollno[1]); //return second promise method and this 'then' method to atteched first then method
}).then( (anything) => {
	console.log("second promise method - ", anything);
}).catch( () => {
	console.log("reject method called.when resolve method commented");
});
