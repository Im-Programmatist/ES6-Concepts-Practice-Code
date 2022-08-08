/*
Unique Array Using Set
*/

// Sets in JavaScript
/*
In this article, we would be discussing the Set object provided by ES6. 
A set is a collection of items which are unique i.e no element can be repeated. 
Set in ES6 are ordered: elements of the set can be iterated in the insertion order. 
Set can store any types of values whether primitive or objects. 
    
Syntax: - new Set([it]);
Parameter:-  It is an iterable object whose all elements are 
    added to the new set created, 
    If the parameter is not specified or null is passed 
    then a new set created is empty.
Returns:- A new set object
Properties:
                    
    Set.prototype.add()
        set1.add(val); 
        Parameter:
        val - It is a value to be added to the set.                
        Returns: 
        The set object
    
    Set.prototype.delete()
        set1.delete(val);
        Parameter: 
        val - It is a value to be deleted from the set.
        Returns: true if the value is successfully deleted from the set else returns false.
    
    Set.prototype.clear()
        set1.clear();
        Parameter:No parameters
        Returns: undefined
    
    Set.prototype.entries()
        set1.entries(val);
        Parameter:No parameters
        Returns: It returns an iterator object that contains an
        array of [value, value] for every 
        element of the set, in the insertion order.
    
Method name	Description
    a.toString()	Returns a string with the toString() of each element separated by commas.
    a.toLocaleString()	Returns a string with the toLocaleString() of each element separated by commas.
    a.concat(item1, itemN)	Returns a new array with the items added on to it.
    a.join(sep)	Converts the array to a string — with values delimited by the sep param
    a.pop()	Removes and returns the last item.
    a.push(item1, itemN)	Appends items to the end of the array.
    a.shift()	Removes and returns the first item.
    a.unshift(item1, itemN)	Prepends items to the start of the array.
    a.slice(start[, end])	Returns a sub-array.
    a.sort([cmpfn])	Takes an optional comparison function.
    a.splice(start, delcount[, item1,  itemN])	Lets you modify an array by deleting a section and replacing it with more items.
    a.reverse()	Reverses the array.
*/
    
    let a = ["1","3","2","3","4","1","3","4"];
    let unique = a.filter((item, i, ar) => ar.indexOf(item) === i);
    console.log('unique array - ',unique);
    //another method
    let sortArray = new Set(a);
    console.log('sortArray array with set method - ',sortArray);

    // it contains
    // ["sumit","amit","anil","anish"]
    var set1 = new Set(["sumit","sumit","amit","anil","anish"]);
    
    // it contains 'f', 'o', 'd'
    var set2 = new Set("fooooooood");
            
    // it contains [10, 20, 30, 40]
    var set3 = new Set([10, 20, 30, 30, 40, 40]);
        
    // it is an  empty set
    var set4 = new Set();

    // Using Set.prototype.entries()
    // creating set 
    var set111 = new Set();

    // adding element to the set
    set111.add(50);
    set111.add(30);
    set111.add(40);
    set111.add(20);
    set111.add(10);
        
    // using entries to get iterator
    var getEntriesArry = set111.entries();
        
    // each iterator is array of [value, value]
    // prints [50, 50]
    console.log(getEntriesArry.next().value);
        
    // prints [30, 30]
    console.log(getEntriesArry.next().value);
        
    // prints [40, 40]
    console.log(getEntriesArry.next().value);

    // using intersection function
    // Declaring values for set11 and set22
    var set11 = new Set([10, 20, 30, 40, 50]);
    var set22 = new Set([40, 50, 60, 70, 80]);  

    // performing union operation
    // and storing the resultant set in 
    // intersectionset
    var intersectionSet = set11.intersection(set22);

    // prints {40, 50}
    console.log(intersectionSet.values());

    //************ Note that array.length isn't necessarily the number of items in the array. Consider the following:
    const aa = ['dog', 'cat', 'hen'];
    aa[100] = 'fox';
    aa.length; // 101
    //The length of the array is one more than the highest index.
    //We'll get a value of undefined in return for a non-existent array index
    console.log(typeof a[90]); // undefined

    ['dog', 'cat', 'hen'].forEach(function(currentValue, index, array) {
        // Do something with currentValue or array[index]
    });

    //arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.
    //using argument object
    function myConcat(separator) {
        const args = Array.prototype.slice.call(arguments, 1);
        return args.join(separator);
    }
    // returns "red, orange, blue"
    myConcat(', ', 'red', 'orange', 'blue');

