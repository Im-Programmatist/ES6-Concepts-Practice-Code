/*
Template Literals
*/
const users = { name : 'Patil', age : 27, born : 'Kalgavhan'}

//Normal Javascript Way
let shownormal = "My name is " + users.name + ", age is " + users.age + "& I was born in " + users.born;
console.log('normal way -- ', shownormal);
//if using destructuring , normal way 
const { age, born, name } = users; 
let showdestructuring = "My name is " + name + ", age is " + age + "& I was born in " + born;
console.log('destructuring - normal way --', showdestructuring);

//NOW, using templete string concept
let showtempletestring = `My name is ${name}, age is ${age} & I was born in ${born}`;

//STRING METHODS
//let name = "Patil";//error : name aready been defind - because const { age, born, name } used this label
let lastname = "Korde";
console.log(`${name}`.startsWith('P'));// true, boolean value return after check & case sensitive
console.log(`${name}`.endsWith('L'));//false
console.log(`${name}`.includes('Patil')); //true , as string is same
console.log(`${name}`.includes('til')); //true , as string contains til
console.log(`${name}`.includes('Chetan')); //false , as string does not contains chetan or same as chetan string
console.log(`${name} ${lastname} \n`.repeat(10));
