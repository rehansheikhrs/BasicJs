// Truthy 

const userEmail = "rehan@gmail.ai"  // iss ke jagah " " hot to ye second console log ko choose karta aur [] (Array) hot to first ko

if(userEmail){
    console.log("Got With the Email");
    
}else {
    console.log("Don't Have the Email");
    
}

// Falsy Value

// flase , 0, -0, BigInt 0n, " ", null, undefined ,NaN  // isrf itne hi falsy value hai aur baki truthy value

// Truethy value

// "0", 'false', " ", [], {}, fucntion(){}, 

// how to check array or object
 const myArray = []
if(myArray.length === 0){
    console.log("Array is Empty / Khali hai re Saala Dibba");
    
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Ye hai Empty Object {} / Dekho Rehan Babu aise likh na padenga Yadd karlo isse");
    
}

// Nullish Coalescing Operator (??) : Null or Undefined

let val1;

// val1 = 5 ?? 10;  // jaha value rahengi vaha to ye first value hi provide karnga
// val1 = null ?? 10;   // bur jaha value null ayengi to ye second jo bhi value hai wo provide karenga
val1 = undefined ?? 40;

console.log(val1);

// Truniary Operator

// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice >= 80 ? console.log("The Ice Price less than 80") : console.log("The Ice Price greater than 80");


