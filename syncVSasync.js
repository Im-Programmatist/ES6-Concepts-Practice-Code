/*
Sync VS Async
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
	