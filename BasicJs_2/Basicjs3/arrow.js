// THIS and arrow function in javascript

// const user = {
//     username : "Amol",
//     price : 999,

//     welcomeMessage : function(){
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);                                     // this ko direct print karonge to wo tumhe current contacs denag
        
        
        
//     }
// }

// user.welcomeMessage()
// user.username = "Rakesh";
// user.welcomeMessage()

// another points

//  function chai(){
//     username = "Rehan"
//   console.log(this);                    // iss me hum fucntion ke andar this nahi use kar sakte ye yadd rakho
//                                          //  fucntion ke andar this nahi use honga undefine batayenga
// }                              
// chai();
// console.log(chai(username));

// const chai = function(){
//     username = "Rehan"
//     console.log(this); 
// }

// chai();

// arrow fuction me check karte hai
// Arrow Function

// const chai = () => {
//     username = "Rahil"
//     console.log(this);
    
// }
// chai();

// Arrow function ka syntax humesha () => {} aaise rahenga bus hum isse kissi veriable me aad kardege jaise 

// const chai = (num1, num2,Num) => {

//     Num = num1 + num2

//     console.log("The Num Value : " + Num);     
      
//     return Num;                                // Isse hum EXPLICIT Return or Arrow function Bolenge kyun ki isse humne curly {} brasses ke andar lagaya hai

    
    
// }
// chai(4,5)

// Arrow Function ko aur ek tarike se likh sakte hai

// const chai = (num1, num2) => (num1 * num2)             // Isse hum Implicite return bolte hai


// console.log(chai(87,9));

// Arrow fucntion ke through object kaise return karenge 

// const addTwo = (num1,num2) => ({username: "Rehan"});
// console.log(addTwo());

// Loop me Aur Array me Arrow Fuction ka use kaise karenge dekhte hai

const myArray = [1,2,3,4,5,6,7,8,9,10];

myArray.forEach(() => {});                     // aise bhi likhte hai array me arrow fuction only for understanding



