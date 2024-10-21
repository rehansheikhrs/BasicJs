//# Premetive DataType

// 7 Types => String , Number, Boolean , null, undefiend, Symbol

const score = 1222
const scorsolve = 222.3;

const isLoggedIn = false;
const outsiTemp = null 

let userEmail ;

const Id =  Symbol('123');

const anotherId = Symbol('123')


console.log(Id === anotherId);


// Non Premetive DataTpes

// Array, Objects, Function
 
// Array =>
const heros = ["IronMan", "Thor", "Dr. Stringe", "SpiderMan", "Gaurdians of Galaxy Team", "Capton America", "Scardio", "TiranDaz", "Hulk"];

// Objects =>

    let myObj = {
        name : "Amol",
        age : 26

    }

    // Function 

    const myFunction = function(){
        console.log("Hello World");
    }

    console.log(typeof myFunction);