
// Number and Math's

const score = 400

const balance = new Number(100);
// console.log(balance);

// console.log(score);

// console.log(balance.toString());

// console.log(balance.toFixed(2));

// toPrecision

const  otherNumber = 123.987

// console.log(otherNumber.toPrecision(4));

//toLocaleString

const hundreds = 1000000
// console.log(hundreds.toLocaleString(5));
// console.log(hundreds.toPrecision('en-IN'));

// ************************ Maths ***************************

console.log(Math);

console.log(Math.abs(-4)); // kisi bhi negative value ko positive me convert karnga only negative value ko 
console.log(Math.round(4,3)); // round of value denga jaise 4 aur 3 hai to 3 or 4 aur 6 hai to 5 denga aise
console.log(Math.ceil(9.7));
console.log(Math.ceil(14.7));
 // ceil matalab ye top value choose karenga jaise 4 ya 4 se jada hai to vo value choose karenga Try karke dekho // top value vatalab left hand side vaali top
console.log(Math.floor(4.9)); // ye hamesha bootom value choose karenga
console.log(Math.floor(1.8));

console.log(Math.random()); // random ki value hamesha 0 se 1 ke bhich aayegi
console.log(Math.random() * 10 + 1); // Iss me Value 0 se 1 ke bhich aye gi lekin agar hume chahiye ki jo value hai wo 1 aye na ki 0 to hume 1 ko 10 ya jise bhi aap multiply kar rahe ho uske age + 1 laga na honga to value aab 1 aye gi na ki zero try kar ke dekho

// Ye Thoda Important hai iss me ek Formula hai isse Yad karlena 

const min = 10;
const max = 20;

// Math.random() * (max - min + 1) isse console log ke andar likhe lo  
// but fir hum add karenge floor kyun ki hume bootom ki value chahiye aur hume last me min se + (add) karna honga
// Kyun ki hame value 10 upar chahiye
console.log(Math.floor(Math.random() * (max - min + 1) ) + min);

// try it and practice 

console.log(Math.floor(Math.random() * (max - min + 1) +min));













