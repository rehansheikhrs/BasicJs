// Object

const tinderUser = new Object();

tinderUser.id = "1235dfdf"
tinderUser.name = "Rehna Sheikh"
tinderUser.phone = "78555412255"

// console.log(tinderUser);

const useName = {
    email : "rehansheikh33@google.com",

    fullname : {
        userfullname : {
            firstName : "Rehna",
            lastName : "Sheikh"

        }
    }
}

// console.log(useName.fullname.userfullname);

const obj1 = {1: "1", 2: "2"}
const obj2 = {3: "2", 3: "4"}

// const obj3 = {obj1, obj2} // isse result pahile jo array dekhe te waise hi ayenga 

// const obj3 = Object.assign(obj1,obj2) // ye bhi likh sakte hai ya fir

// const obj3 = Object.assign({}, obj1,obj2); // iss ka matalab hai ki {} iss me value expected hi ayegi 
// ye obj3 => (target, source ) par kam karata hai {} target hai aur , baki source hai Ek baar MDN ka syntax theory padh lena samz jaonge
 // but hum ... vala hi use karna hai Spred karne ke liye

 const obj3 = {...obj1,...obj2}


// console.log(obj3);

// object aur Arrays

const users = [
    {
        id : 1,
        email : "rehna2@gmail.com"
    },
    {},
    {

    },{
        
    }
];

// users[1].email
// console.log(tinderUser);

// Imp Point

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// // property check 

// console.log(tinderUser.hasOwnProperty('id'));


// Object de-structure and JSON API intro 

const course = {
    courseName : "Js in Hindi",
    price : "999",
    courseInstructor : "Rehan Sheikh" 
}

// course.courseInstructor   // ye bhi sahi tari ka hai but hum bar bar ye nahi likh sakte na course.courseInstructor/ course.courseName like to hum destructuring ka use karenge dekho kaise 

// model of de - structure const {} = course //  iss me {} ka matalab hai ki kaya value extract karni hai aur = course ka matalab hai ki hume corse se value extract karni hai ok rehan aab age dekhte hai

const {courseInstructor} = course

console.log(courseInstructor);  // ye check kar ke dekho

// aab hum courseInstructor ko bhi change kar sakte hai dekh te hai kaise jab 

const {courseInstructor: Instructor} = course // ya ha par humne courseInstructor ko destructure kar diya hai Instructor me aab hum Instructor ko hi direct use kar sakte hai dekho kaise

console.log(Instructor); // same value aye gi

// Only for understanding as way of react js

// const navbar = ({company})=>  {

// }

// navbar(company ='Rehan')  // jab bhi aap ye dekhe ki {} ka use kiya hai aise function me to samz lena destructring ki ja rahi hai


// ********************** JASON ****************************

// jason Object ki tarah dikh ta hai bu use me object ka name nahi hota aur key and value String format me hoti hai

// {
//     "name" : "Rehan",
//     "age" : "33",
//     "location" : "Hyderabad"
// }

// Jason ko samaz ne ke liye JSON format kar ke website hai waha par randomuse api se api ya tumhara api ka format copy pase kardo aur formate me par click kar ke padh lo







