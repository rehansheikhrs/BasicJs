// String 

const name = "Rehan"
const repoCount = 50

 // console.log(name + repoCount + " Value"); Don't use it beacause it old method go with new method

 console.log(`Hello My Name Is ${name} and my repo Count ${repoCount}` );

 const gameName = new String("Ramesh Gedam");

 console.log(gameName.__proto__);
 console.log(gameName.concat());
 console.log(gameName.endsWith("Ramesh"));
 console.log(gameName.substring(4,7));

 const newString = gameName.substring(3,5)
//  console.log(newString);

 const slicString = gameName.slice(3,4);
 console.log(slicString);

 // trim()

 const newStrin = "   Amol  "
 console.log(newStrin.trim());

 // url Replace 

 const url = 'http//rehansheikhrrs.com'

 console.log(url.replace('rrs', 'rs'));

 // ask url the word is availble or not

 console.log(url.includes('rehan'));

 // split converted into Array

 const gameWon = new String('Haldiram-Ramayan-Mahabarat-Hatim');
 console.log(gameWon.split('-'));
 

 
 
 
 
 
 
 
 
 