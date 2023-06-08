/**
 * Objects are enumerable in javascript, whe can only travels through it's property (key)
*/

/*
    reference to object predefined properties -
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

*/

    // <p id="demo"></p>
    //<button id="click me">Click me</button> 

    var student = {
        name:"chetan",
        age:27,
        department:"Computer Science"
    }
    var x = "age";
    document.write(`${student.name} and ${student[x]}`);
    student.message = "hello by method";
    document.getElementById('demo').innerHTML = "hii "+student.name;
    console.log(student.message);
    document.getElementById('click me').onclick = student.message ;
    
    const obj = {
        name: 'Carrot',
        _for: 'Max', // 'for' is a reserved word, use '_for' instead.
        details: {
            color: 'orange',
            size: 12
        }
    };
    console.log(obj.details.color); // orange
    console.log(obj['details']['size']); // 12

    function Person(name, age) {
        this.name = name;
        this.age = age;
    }

    // Define an object
    const you = new Person('You', 24);
    // We are creating a new person named "You" aged 24.

    //Once created, an object's properties can again be accessed in one of two ways:
    // dot notation
    obj.name = 'Chetan';
    const name1 = obj.name;
    // bracket notation
    obj['name'] = 'Patil';
    const name2 = obj['name'];
    // can use a variable to define a key
    const user = prompt('what is your key?')
    obj[user] = prompt('what is its value?')
    if(user !== null){
        alert(user);
    }else{
        prompt(`please enter key`);
    }
    console.log("obj - ",obj);
    