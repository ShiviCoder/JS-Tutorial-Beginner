//Immediately Invoked Function Expressions (IIFE)
//Avoid polluting the global namespace
(function chai(){
    //named iife
    console.log(`DB Connected`)
})();

((name)=>{
    //unname iife
    console.log(`DB Connected ${name}`);
})('shivani')