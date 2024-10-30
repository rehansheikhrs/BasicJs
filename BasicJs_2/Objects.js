// Objects Important Point

// Singleton  // constructor ke andar hi sigleton banta hai => object.create

// object literal
// symbol ko kaise use karte hai ya defined karete hai wo dekh te hai

const mysymb = Symbol("key1");

const myobj = {
    name: "Rehan Sheikh",
    [mysymb] : "rehan shekh symbole RNS",
    email: "rehansheik@google.com",
    age:33,
    work : "Softwear Developer",
    location : "Hyderabad"
}

// console.log(myobj.email);
// console.log(myobj["age"]);
// console.log(myobj[mysymb]);

// ab ye dekh te hai ki value ko constant ya un change kaise kare ji se freez kaise kare

myobj.email = "rahilsheikh@apple.com";

// Object.freeze(myobj);
// myobj.email = "rehan_khan87@gmail.com";
// console.log(myobj);

// greetin

myobj.greeting = function(){
    console.log("Hello myObjt User");
    
}
console.log(myobj.greeting);

console.log(myobj.greeting());

myobj.greeting = function(){
    console.log(`Hello JS User ${this.name} Wish You Fine and Well , Happy diwali `);
    
}

console.log(myobj.greeting());

