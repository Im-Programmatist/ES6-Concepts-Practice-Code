/**
 * Differences are as follows:
 * 1.No need to use function and return keyword 
 * 2.Like normal function arrow function does not have their own 'this' reference 
 * 3.Arrow function does not have argument of their own like normal function
 * Arguments objects are not available in arrow functions
 * 4.Arrow functions are only ‘callable’ and not constructible. Normal functions are both constructible and callable
*/

//1
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
//2.
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
let x = function(){
    console.log(arguments);
};
function Article(topic) {
    this.topic= topic;
}
const article= new Article('JavaScript');
console.log(article);
new x(1,2,3);
let y = ()=> {
    console.log(arguments);
};
new y(1,2,3);// Syntax error - y is not constructor



