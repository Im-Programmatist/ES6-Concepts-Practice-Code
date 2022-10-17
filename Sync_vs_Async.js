/** 
 * *Sync VS Async
Async is multi-thread, which means operations or programs can run in parallel. 
Sync is single-thread, so only one operation or program will run at a time.

Async is non-blocking, which means it will send multiple requests to a server. 
Sync is blocking — it will only send the server one request at a time and will wait for that request to be answered by the server.

Async increases throughput because multiple operations can run at the same time. 
Sync is slower and more methodical.
*/

/*
There are different ways to handle the asynchronous code in NodeJS or in JavaScript which are:
Callbacks
Promises
Async/Await -- in this tutorial we will see this
*/

//Sync Method Example 
/* 
<p id="syncBtn"><b>Sync Click Here</b></p>
<input type="text" name="username"/><!-- not get fill till 5 sec completed in wait method, even you typed letters  -->
<input type="text" name="password"/>
<button type="submit"> Login </button>
*/

//Async Method Type  
//<p id="asyncBtn"><b> Async Click Here</b></p> 



//THIS IS SYNC TYPE -- we have to wait for 5 sec to fill data in input if we click btn 	
	const waitSync = () => {
		console.log('Sync JS part is starting..');
		let start = new Date().getTime();
		console.log(new Date().getTime() - start);
		while((new Date().getTime() - start) < 5000); //it stop filling username & password for 5 sec
		console.log('Sync while end and now you will see letters in input fields..'); // once this output print then only input fields get filled up.
	};

	syncBtn.addEventListener('click', waitSync);


// THIS Is ASYNC TYPE
	const waitASync = () => {
		console.log('Async JS part is starting..');
		setTimeout(() => { 
			console.log('Async while end but you can already  see letters in input fields'); // once this output print then only input fields get filled up.
		}, 5000)
	};

	asyncBtn.addEventListener('click', waitASync);
	
	async function testAsync() {
		// Label for outerloop
		let sum = 0;
		while (sum < 10e3) {
			sum = sum + 100;
			console.log("sum = ",sum );
		}
	}
	
	async function abc(){
		const b = await testAsync();
		const a = await new Promise((resolve, reject)=>{
			resolve("promise inside abc resolved")
		})
		console.log(a);
	}
	abc();
	console.log("Testing abc");//this will run first if async 