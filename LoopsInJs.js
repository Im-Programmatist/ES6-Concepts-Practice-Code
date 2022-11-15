
/**
 * for - loops through a block of code a number of times
 * for/in - loops through the properties of an object
 * for/of - loops through the values of an iterable object
 * while - loops through a block of code while a specified condition is true
 * do/while - also loops through a block of code while a specified condition is true
 */

/**
 * For-Of on iterables object- we can traverse through iterable object using for-of not for-in
 * like @array, @Sets, @Map, @string
 * 
 * For-in used to traverse through object property
*/

/*
The for...in loop iterates through properties in the prototype chain. 
This means that we need to check if the property belongs to the object 
using hasOwnProperty whenever we loop through an object with the for…in
*/
const students = {
    male: 4,
    female: 93,
    others: 10
};
// Iterate through the object
for (const key in students) {
    if (students.hasOwnProperty(key)) {
        console.log(`${key}: ${students[key]}`);
    }
}
//bellow code will not works as student is not iterable
// for (let x of students) {
//     console.log('x:' ,x);
// }

//Instead of hasOwnProperty we cn use object static method 
// Object.keys()
// Object.values()
// Object.entries()
console.log(Object.keys(students));


/*
The JavaScript for of statement loops through the values of an iterable object.
It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more
*/
let language = "JavaScript";
let text = "";
for (let x of language) {
    text += x;
}
console.log(text);

var myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");
var mapIter = myMap.entries();
console.log("mapIter.next().value ->", mapIter.next().value); 
for (const entry of myMap.entries()) {
    console.log("map entry :-",entry);
}

var a=1;
let b=2;
const c=3;
var mySet = new Set();
mySet.add(a);
mySet.add(b);
mySet.add(c);
mySet.add('1');
mySet.add(3);
mySet.add('2');
mySet.add(1+1);
console.log('Sets values are :-',...mySet);
for(item of mySet){
    console.log('for-of on set item is:- ',item);
}
/**
 * The while loop loops through a block of code as long as a specified condition is true.
*/
var textwhile = "";
let i = 0
while (i < 10) {
    textwhile += "The number is " + i;
    i++;
}
console.log('Text while :', textwhile);

const object = {'a': 1, 'b': 2, 'c' : 3};

for (const [key, value] of Object.entries(object)) {
  console.log(key, value);
}


/**
 * Foreach
*/

const student2 = {
    male: 4,
    female: 93,
    others: 10
};
Object.entries(student2).forEach(
    ([key, value]) => console.log("For each:",key, value)
);
const arr = [1,2,3,4,5];
arr.forEach((item, index) => console.log("For each arr :",item, index));


//Foreach loop on array and object

var arrForeach = [1,2,3,5,6,4,8,9,10]
var objForeach = {
    name:'Chetan',
    age:20,
    address:{
        city:'Nagpur',
        country:'India'
    }
}

arrForeach.forEach((item, index) => console.log(item, index));
Object.entries(objForeach).forEach((item, index) => console.log(item, index));
Object.keys(objForeach).forEach((key, index) => {
        console.log(key, index); 
        console.log(objForeach[key]);
    }
);
console.info('for of loop on array ---');
for(item of arrForeach){
    console.log(item);
}
console.info('for of loop on object entries ---');
for(item of Object.entries(objForeach)){
    console.log(item);
}
console.info('for of loop on object keys ---');
for(item of Object.keys(objForeach)){
    console.log(item);
    console.log(objForeach[item]);
}
console.info('for in loop on object directly ---');
for(key in objForeach){
    console.log(objForeach[key]);
}

console.info('for in loop on object values ---');
Object.values(objForeach).forEach(val => {
    console.log(val);
});