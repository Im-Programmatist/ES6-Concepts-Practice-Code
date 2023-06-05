/**
 * Differences are as follows:
 * 1.No need to use function and return keyword 
 * 2.Like normal function arrow function does not have their own 'this' reference 
 * 3.Arrow function does not have argument of their own like normal function
 * 4.Arguments objects are not available in arrow functions
 * 5.Arrow functions are only ‘callable’ and not constructible. Normal functions are both constructible and callable
 * 6.Since regular functions are constructible, they can be called using the ‘new’ keyword. 
*/

//1
function norm1 (data){
    return data+1; //need return keyword to return 
}
let dataNorm = norm1(2);console.log('data return from normal', dataNorm);
const arrFunc = (data) => data+1; //no need to use return keyword 
let dataArrow = arrFunc(2); console.log('data retutn from arrow function ', dataArrow);

//2.
let person = {
    name: "Chetan Korde Patil",
    arrFun:() => {
        console.log("This is arrow function inside object " + this.name); // no 'this' binding here
    },
    normalFun(){       
        console.log("This is normal function inside object  " + this.name); // 'this' binding works here
    }  
};
person.arrFun();
person.normalFun();

//3.
const arr1 =()=>{
    console.log('Argument in arrow - ', arguments);
    console.log('this in arrow function : ', this);//{}
}
arr1(1,2,3,4);

(function abc(){
    console.log('Argument in normal function - ', arguments);
    //console.log('this in normal function : ', this);
})(1,2,3,4)


//3.
function normal(){
    console.log('Normal function arguments', [...arguments]);
}
normal(1,2,3,4,5,6.7); 
let y = ()=> {
    console.log(arguments);
};
//new y(1,2,3);// Syntax error - y is not constructor


//5.
let x = function(){
    console.log(arguments);
};
function Article(topic) {
    this.topic= topic;
}
const article1= new Article('JavaScript');
const article2= new Article('Node');
console.log(article1, article12);
new x(1,2,3);


//Constructive -using new keyword
let new_constructive = function(){
    console.log("new_constructive-",arguments);
};
var yy = new new_constructive(1,2,3);
console.log('yy-',yy)


