
/**
 * for - loops through a block of code a number of times
 * for/in - loops through the properties of an object
 * for/of - loops through the values of an iterable object
 * while - loops through a block of code while a specified condition is true
 * do/while - also loops through a block of code while a specified condition is true
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

/**
 * The while loop loops through a block of code as long as a specified condition is true.
*/
var textwhile = "";
while (i < 10) {
    textwhile += "The number is " + i;
    i++;
}
console.log('Text while :', textwhile);

/**
 * For-Of on iterables object- we can traverse through iterable object using for-of not for-in
 * like @array
 * 
 * For-in used to traverse through object property
*/