// Date And Time

const mydate = new  Date();

// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleDateString());
// console.log(typeof mydate);

let myCreatedDate = new Date (2024, 0, 7);
// console.log(myCreatedDate.toDateString());

// console.log(myCreatedDate.toLocaleDateString());

// let myTimeStamp = Date.now();

// console.log(myTimeStamp); // ye jo time denag wo mili seconds me denga joki jan se abhi tak ka honga...

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // bass Date.now()/1000 Math.floor me add kardo

let newDate = new Date();

// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMonth());
// console.log(newDate.getFullYear());

//* ` ${newDate.getDay()}` and the time */

 newDate.toLocaleString('default', {
         weekday: "long"
 });













