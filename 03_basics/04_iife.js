// Immediately Invoked function Expression(IIFE)
//  it is used to remove the polution of globle scope.
// immedialy access.

(function chai(){
    console.log(`database connected`);
})();
// ()()

((name) => {
    console.log(`DB Connected Two`);
})('hitesh')

