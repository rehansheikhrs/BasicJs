//  IIFE

// Immediatly Invoked Function Expression(IIFE)

(function chai (){

    //Name IIFE hai jisme name hota ha wo name IIFE 
    console.log(`DB Connection `);
    
}) ();
// Normal IFFE jisme name nahi hota normal IIFE
((name) => {
    console.log(`DB Connection Two ${name}`);
    
})('hitesh');