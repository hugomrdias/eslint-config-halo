function doSomething(p) {
    return p;
}
const myPromise = Promise.resolve('ss');

myPromise.then(doSomething);
myPromise.then(doSomething, erre => console.error(erre)); // Catch() may be a little better
function doSomethingElse() {
    myPromise.then(doSomething);
}

try {
    doSomething();
} catch (error) {
    // ...
}
