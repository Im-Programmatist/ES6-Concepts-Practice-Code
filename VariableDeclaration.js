 
/*
Variables and scope
*/
/*
1. Let - has block scope.
2. Var - has functional scope & gobal scope.
3. const - varial value can not change & has block scope.
*/

function check()
{
	let a = 10; // function block scope
	const b = 100; // not change, throughout function, even in if or other block
	var c = 1000;
	console.log('previous if let a - ',a);
	console.log('previous if const b - ',b);
	console.log('previous if var c - ',c);
	if(true)
	{
		let a = 20; //this if block scope
		const b = 0.1;
		var c = 1.0;
		console.log('inside if let a - ',a);
		console.log('inside value change var c - ',c);
		console.log('inside value change const b - ',b);
	}
	console.log('outside if let a - ',a);// let has block scope so not changed outside if block
	console.log('outside if const b - ',b);// const has block scope so not changed outside if block
	console.log('outside if var c - ',c); // var value changed in if block , so due to global scope onward c changed  

	console.log("Exponent of value 10 to the power 11 - 10**2 => ",10**2);
}
check();