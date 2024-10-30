// Arrays 2

const marvel_Heros = ["Iron Man", "Thor","SpiderMan","Capton America","Dr.Strange","Hulk","Black Widow","Ant-man"];

const DC_Heros = ["SuperMan","Wonder Woman", "Flash","aquaMan"]; 

// marvel_Heros.push(DC_Heros);
// console.log(marvel_Heros);

const AllHeros = marvel_Heros.concat(DC_Heros); // ye hum dono heros ko merge karte hai 

console.log(AllHeros);

// waise hi hum spred ka use karenge ...  use hota hai spred me ye bhi same value denga iss ka use jada hota hai

const all_heros_Dc_McU = [...marvel_Heros,...DC_Heros];
// console.log(all_heros_Dc_McU);

// Another Array

const use_another_array = [1,2,3,4,5,[6,7,8],9,10,11,[12,13,14,[15,16,17]]]

console.log(Array.isArray("Rehan"));
console.log(Array.from("Rehan"));
console.log(Array.from({name:"Neha"}));; // intersting ask in interview

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3));







