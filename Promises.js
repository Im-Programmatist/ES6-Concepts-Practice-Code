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

// we can run all promises together
// Promise.all([promise1, promise2])
// .then((result) => console.log(result)); //return array in result
const func1 = () =>{
	return new Promise((resolve, reject) =>{
		resolve("Func1 resolve...")
	});
}
const func2 = () =>{
	return new Promise((resolve, reject) =>{
		resolve("Func2 resolve...")
	});
}
const func3 = () =>{
	return new Promise((resolve, reject) =>{
		resolve("Func3 resolve...")
	});
}
/*
It is important to note that if one of the promises in the array rejects,
Promise.all() will throw the error and abort the other operations. 
This may cause unexpected state or behavior.
*/
Promise.all([func1(), func2(), func3()]).then(([result1, result2, result3]) => {
	console.log(result1, result2, result3);
});

/*
The Promise.race() method returns a promise that fulfills or rejects as soon as one of 
the promises in an iterable fulfills or rejects, with the value or reason from that promise.
The first promise returned - whichever resolve/reject first
*/
const promise1 = new Promise((resolve, reject) => {
	setTimeout(resolve, 500, 'promise1');
});
  
const promise2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 400, 'promise2');
});
  
Promise.race([promise1, promise2]).then((value) => {
	console.log(value);
	// Both resolve, but promise2 is faster
});
// expected output: "two"

// we are passing as argument an array of promises that are already resolved,
// to trigger Promise.race as soon as possible
const resolvedPromisesArray = [ Promise.resolve(44),Promise.resolve(33)];

const p = Promise.race(resolvedPromisesArray);
// immediately logging the value of p
console.log(p);
// using setTimeout we can execute code after the stack is empty
setTimeout(() => {
	console.log("the stack is now empty");
	console.log(p);
});

//An empty iterable causes the returned promise to be forever pending:
const foreverPendingPromise = Promise.race([]);
console.log(foreverPendingPromise);
setTimeout(() => {
  console.log("the stack is now empty");
  console.log(foreverPendingPromise);
});
// logs, in order:
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "pending" }

/*
Promise.any takes the first fulfilled Promise. only first promise fulfilled
*/
const promise11 = new Promise((resolve, reject) => {
	setTimeout(resolve, 500, "one");
});
  
const promise22 = new Promise((resolve, reject) => {
	console.log("inside promise22");
	setTimeout(reject, 200, "two");
});
  
const promise33 = new Promise((resolve, reject) => {
	setTimeout(reject, 100, "three");
});

Promise.any([promise11, promise33, promise22])
	.then((value) => {
		// Only promise1 is fulfilled, even though promise2 settled sooner
	 	console.log("succeeded with value:", value);
	})
	.catch((reason) => {
		// Only promise1 is fulfilled, but promise2 is faster
		console.error("failed with reason:", reason);
	});// expected output: "failed with reason: two"


/*
 * The Promise.allSettled() - method returns a promise that fulfills after all of the given promises have either fulfilled or rejected
 * It is typically used when you have multiple asynchronous tasks that are not dependent on one another 
    to complete successfully, or you'd always like to know the result of each promise.
 */

const promise111 = Promise.resolve(3);
const promise222 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise111, promise222];

Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log(result.status,result)));

// expected output:
// "fulfilled"
// "rejected"