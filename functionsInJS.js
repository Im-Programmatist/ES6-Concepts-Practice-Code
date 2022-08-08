/*
Functions In Js
*/ 
// This is pretty useful, but it does seem a little verbose. 
// To reduce this code a bit more we can look at substituting the use of the arguments array through Rest parameter syntax.
       
// It is important to note that wherever the rest parameter operator is placed in a function declaration it 
// will store all arguments after its declaration, but not before. i.e. function avg(firstValue, ...args) 
// will store the first value passed into the function in the firstValue variable and the remaining arguments in args.
    
// JavaScript provides a mechanism for simultaneously declaring and invoking a function using a single expression. 
// It's called an Immediately invoked function expression (IIFE)

/*(function() {
    // …
    })();
*/

//the variable args holds all the values that were passed into the function
    function avg(...args) {
        let sum = 0;
        for (const item of args) {
            sum += item;
        }
        return sum / args.length;
    }

    console.log(avg(2, 3, 4, 5)); // 3.5

    //using argument object
    function func1(a, b, c) {
        console.log(arguments[0]);
        // expected output: 1

        console.log(arguments[1]);
        // expected output: 2

        console.log(arguments[2]);
        // expected output: 3
    }
    func1(1, 2, 3);

    function myConcat(separator) {
        const args = Array.prototype.slice.call(arguments, 1);
        return args.join(separator);
    }
    // returns "red, orange, blue"
    myConcat(', ', 'red', 'orange', 'blue');

    // returns "elephant; giraffe; lion; cheetah"
    myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah');

    // returns "sage. basil. oregano. pepper. parsley"
    myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley');

    function avgArray(arr) {
        let sum = 0;
        for (const item of arr) {
            sum += item;
        }
        return sum / arr.length;
    }
    console.log(avgArray([2, 3, 4, 5])); // 3.5

    //JavaScript lets you call a function with an arbitrary array of arguments, 
    //using the apply() method of any function object.
    console.log(avg.apply(null, [2, 3, 4, 5])); // 3.5

    
    function makePerson(first, last) {
    return {
        first: first,
        last: last,
        fullName() {
        return this.first + ' ' + this.last;
        },
        fullNameReversed() {
        return this.last + ', ' + this.first;
        }
    };
    }

    const s = makePerson('Simon', 'Willison');
    s.fullName(); // "Simon Willison"
    s.fullNameReversed(); // "Willison, Simon"

    //It forms part of a lookup chain (that has a special name, "prototype chain"): 
    //any time you attempt to access a property of Person that isn't set, 
    //JavaScript will check Person.prototype to see if that property exists there instead. 
    //As a result, anything assigned to Person.prototype becomes available to all instances of that constructor via the this object.
    function Person(first, last) {
        this.first = first;
        this.last = last;
    }
    Person.prototype.fullName = function() {
        return this.first + ' ' + this.last;
    };
    Person.prototype.fullNameReversed = function() {
        return this.last + ', ' + this.first;
    };
    const ss = new Person('Simon', 'Willison');
    ss.firstNameCaps(); // TypeError on line 1: s.firstNameCaps is not a function

    Person.prototype.firstNameCaps = function() {
    return this.first.toUpperCase();
    };
    ss.firstNameCaps(); // "SIMON"

    //Custom Functions
    const strng = 'Simon';
    strng.reversed(); // TypeError on line 1: s.reversed is not a function

    String.prototype.reversed = function() {
    let r = '';
    for (let i = this.length - 1; i >= 0; i--) {
        r += this[i];
    }
    return r;
    };

    strng.reversed(); // nomiS
    