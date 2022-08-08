
"use strict"

function getCovidData(index){

	try{				
		/*#(original) var request = new Request('https://davidwalsh.name/demo/arsenal.json');
		#use IP instead*/
		var request = new Request('https://api.covid19api.com/summary');
		fetch(request,{
			method: 'GET',
			mod : 'same-origin',
			origin: '*',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': "*",
				'Access-Control-Allow-Headers': "*",
				'Access-Control-Allow-Methods': "GET, PUT, POST, DELETE, HEAD, OPTIONS, FETCH"
			}
		}).then( apidata => {
			//console.log(apidata);
			return apidata.json();
		})/*.then( response => console.log(response.json()) )*/
		.then ( (actualdata) =>{
			console.log(actualdata.Countries);
			const mydata = actualdata.Countries[`${index}`];
			document.getElementById('apidata').innerHTML = `The name of country is ${mydata.Country}. The the total confirmed cases here is ${mydata.TotalConfirmed} and the TotalDeaths cases here is ${mydata.TotalDeaths} and finally the TotalRecovered cases here is ${mydata.TotalRecovered}`;
			console.log();
		}).catch( (error) => {
			console.log(`The errorm : ${error}`);
		});
	}
	catch(ErrorChetan){
		console.log("Erroor is : ",ErrorChetan);
	}
}
getCovidData(76);//india