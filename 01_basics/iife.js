//Immediatly invoked function expression
(function chai() {
    // Named IIFE
    console.log(`DB CONNECTED`)
})();

( () => {
    console.log(`DB CONNECTED TWO`)
})()
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})('hitesh')
