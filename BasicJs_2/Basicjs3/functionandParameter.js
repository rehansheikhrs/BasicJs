// Functions and parameter in javascript

// function myData(){
//     console.log("R");
//     console.log("E");
//     console.log("H");
//     console.log("A");
//     console.log("N");

    
// }
// myData()  // ya ha par myData likhte hai to wo sirf uska referance kahelyenga aur agar hum use () dete hai to wo execute honga jaise myData()


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }

// addTwoNumbers(2,5);

// function addTwoNumbers2(number1, number2){

//     let result = number1 + number2
//     console.log("rehan");
//     return result;
    
    
    
// }

// const result  = addTwoNumbers2(2,5);
// console.log("Result: ", result);

// another point

// function loginuserMassage(username){
//     return `${username} just logged in`
// }

// console.log(loginuserMassage ("Rehan"));


// another Point

// function loginuserMassage(username){
//     if(username === undefined){
//         console.log('Please enter a username');
//         return
//     }
// }

// loginuserMassage();

// another point

// function loginuserMassage(username){
//     if(!username){
//         console.log('Please enter a username');
//         return
//     }
// }

// loginuserMassage();

// another point

// function loginuserMassage(username = "sam"){
//     if(!username){
//         console.log('Please enter a username');              // ye code me error de raha hai buss chek karne ke liye diya hu
//         return ;
//     }
//     return `${usename} just logged in`;
// }
// console.log(loginuserMassage());

// function loginUserMessage(username = "sam") {
//     if (!username) {
//         console.log('Please enter a username');
//         return;
//     }
//     return `${username} just logged in`;
// }

// console.log(loginUserMessage("Rehan R Sheikh"));

// loginuserMassage();

// jaise sam liya hai usename aab use overide karna hai to direct kar sakte hai

// console.log(loginuserMassage("Rehan R Sheikh"));


// just try

// function rsuser(username = "Ramesh"){
//     if(!username){
//         console.log(`the Person ${username} is Employee of google.com`);
//        return;
//     }
    
//     return `the Person ${username} is Employee of google.com`
// }

// console.log(rsuser("Rahil"));


//***********Rest & Spread Operator */

// function usernames(val1,val2,...num1){     // isse hi bolte hai rest or spread operator ... ye simbol hai jaise ...num1
     
//     return num1;
// }
// console.log(usernames(2,3,4,5));    // val1, val2 me 2 aur 3 value chale gai issi liye 4 and 5 milengi


// ok aab hum dekhte hai ki kya Object ka use kaise kara jaye

// object 

// const users = {
//     useName: "Amol",
//     price: 450
// }

// function handleObject(anyObject){
//     console.log(`Username is ${anyObject.useName} of Price is ${anyObject.price}`);
    
// }
// handleObject(users);


//  direct object aur array bhi pass kar sakte hai
function handleObject(anyObject){
    console.log(`Username is ${anyObject.useName} of Price is ${anyObject.price}`);
    
}
handleObject({
    useName: "Amol",
       price: 4500
});

const myNewArray = [440,540,800];

function returnNewValue(getArray){
    // return getArray[1];
    return getArray;
}

console.log(returnNewValue(myNewArray));
console.log(returnNewValue([2500,58,7854,8795,56565]));
