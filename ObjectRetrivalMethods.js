/**
 * Object Retrieval methods are derived from Object Class and there inbuilt methods like -
 * 1. Object.getOwnPropertyNames()
 * 2. Object.entries()
 * 3. Object.values()
 * 4. Object.keys()
 *  
 * Objects are not iterable datatypes, so we can not use for loop and for-of loop to retrieve it's item and value 
 * Object can use for-in loop which traverse through the property of objects
 * Using this method we can make Object as iterable and numerable 
 * 
*/

var sampleObj = {
    name:'Chetan',
    age:20,
    address:{
        city:'Nagpur',
        country:'India'
    }
}

console.info('foreach loop on object entries ---');
Object.entries(sampleObj).forEach((item, index) => console.log(item, index));

console.info('foreach loop on object keys ---');
Object.keys(sampleObj).forEach((key, index) => {
        console.log(key, index); 
        console.log(sampleObj[key]);
    }
);

console.info('for of loop on object entries ---');
for(item of Object.entries(sampleObj)){
    console.log(item);
}

console.info('for of loop on object keys ---');
for(item of Object.keys(sampleObj)){
    console.log(item);
    console.log(sampleObj[item]);
}

console.info('for each loop on object values ---');
Object.values(sampleObj).forEach(val => {
    console.log(val);
});

console.info('for in loop on object directly ---');
for(key in sampleObj){
    console.log(sampleObj[key]);
}

console.log('Objects getOwnPropertyNames- ', Object.getOwnPropertyNames(sampleObj));
