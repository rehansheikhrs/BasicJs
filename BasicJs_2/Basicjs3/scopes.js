// // Scopes {}  ye curly brasase hi scope hai ye aap ho js me har jagha dikhenga object me fuction me aur baki jaga bhi 

// //  function me use kiye to function ka scope ya object me use kiye to object ka scope .... isse he baki 

// //{
//     JavaScript में "scope" एक ऐसा concept है जो इस बात को निर्धारित करता है कि कौन-सी variables कहां से access की जा सकती हैं। यह मुख्य रूप से तीन प्रकार के होते हैं:

//     Global Scope
//     Function Scope
//     Block Scope (ES6 के बाद)
//     1. Global Scope:
//     Global scope में declare की गई variables को पूरी script में कहीं से भी access किया जा सकता है।
    
//     javascript
//     Copy code
//     var name = "Rehan"; // Global scope
    
//     function greet() {
//         console.log("Hello, " + name); // 'name' को access कर सकते हैं क्योंकि यह global है
//     }
    
//     greet(); // Output: Hello, Rehan
//     2. Function Scope:
//     Function scope के अंदर declare की गई variables सिर्फ उसी function के अंदर accessible होती हैं। बाहर से access नहीं की जा सकतीं।
    
//     javascript
//     Copy code
//     function showAge() {
//         var age = 25; // Function scope
//         console.log("Age is: " + age);
//     }
    
//     showAge(); // Output: Age is: 25
//     console.log(age); // Error: age is not defined (क्योंकि यह function scope में है)
//     3. Block Scope:
//     Block scope का मतलब है कि कोई भी variable जो {} के अंदर declare किया गया है, वह सिर्फ उसी block के अंदर accessible है। JavaScript में let और const keywords का उपयोग block-scoped variables के लिए होता है।
    
//     javascript
//     Copy code
//     if (true) {
//         let city = "Delhi"; // Block scope
//         console.log("City is: " + city); // Output: City is: Delhi
//     }
    
//     console.log(city); // Error: city is not defined (क्योंकि यह block scope में है)
//     Scope कैसे काम करता है?
//     JavaScript में scope एक hierarchy में काम करता है, जिसे scope chain कहा जाता है। जब कोई variable को access किया जाता है, तो JavaScript सबसे पहले current scope में उसे ढूंढती है। अगर नहीं मिलता, तो outer scope में जाती है, और अंत में global scope तक देखती है।
    
//     Scope का सही से इस्तेमाल कैसे करें?
//     जब भी possible हो, variables को block या function scope में define करें, जिससे कि global namespace में clutter न हो।
//     var का इस्तेमाल कम करें क्योंकि यह function-scoped होता है, जो unintended bugs create कर सकता है। इसके बजाय, let या const का इस्तेमाल करें।
//     Variable के नाम unique रखें और सिर्फ उस scope तक सीमित रखें, जहां उसकी ज़रूरत है।
//     Scope समझना ज़रूरी है क्योंकि यह आपके code के structure और performance को improve करता है और bugs को कम करता है।}


// Uper scope ke bare me sabhi batein use ki gai hai


let a = 400;

if (true) {
    let a = 10; 
    console.log(a);
    
}

console.log(a);


// fuctional scope

function one(){


    const username = "Rehan"
    function two(){
          
        const website = "www.youtube.com"
        console.log(username);
        
    }
    // console.log(website);
    // two()
    
}
// one()

// if else me  bhi use karke dekh te hai

// if(true){

//     const username = "Rehan"

//     if(username === "Rehan"){
//         const website = "rehan.com"
//         console.log(username + ' '+ website);
        
//     }

//     // console.log(website);  // error denga kyun ki ye secon if() condition ke bahar hai aur dusra bhi denga wo bhi scope ke bahar hai
    
//     console.log(username);
// }

// // console.log(username);

// *************** Intresting ***************  Hostin 


 // console.log(addOne(50000));  // aise |
 //                                      V

// function addOne(num){
                                          // ye normal function hai ya par aap console log ko fuction ke upar exectue kar sakte hai 
//       return num +1 ;
// }
 
// console.log(addOne(50000));

// expressions

const addTwo = function(num){                            // ye bhi function hai isse expration kahete hai
    return num + 2;
}                                                         // but ya ha console log ko fuction ke upar execute nahi kar sakte

// addOne()
console.log(addOne());
