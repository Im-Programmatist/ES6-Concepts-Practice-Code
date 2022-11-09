/*Async functionality in ES5 and ES6*/
//In ES5 - using
function isGreaterCallback(a, b, cb) {
    var greater = false;
    if (a > b) {
        greater = true;
    }
    cb(greater);
}
isGreaterCallback(1, 2, function (result) {
    if (result) {
        console.log("greater");
    } else {
        console.log("smaller");
    }
});

const isGreaterPromise = (a, b) => {
    return new Promise((resolve, reject) => {
    if (a > b) {
        resolve(true);
    } else {
        reject(false);
    }
    });
};
isGreaterPromise(1, 2)
.then((result) => {
    console.log("greater");
})
.catch((result) => {
    console.log("smaller");
});
