// let array = [1,2,2,3,3,4,4,4,4,2,1,7,8,6,4];

// let seen = []
// let dupli = []

// array.map((n)=>{
//   if(seen.find((s)=> s==n)){
//     console.log(n);
//     dupli.push(n)
//   }
//   seen.push(n)
// })

// console.log(dupli);




// let string = 'hello balwant welcome to JS'
// // console.log(string.length)
// let count = 0;
// for(item of string){
//   if(item !== " "){
//     count++
//   }
// }
// console.log(count)

//  let newString = string.replace("hello", "hey");
// console.log(newString)

// Search an element in an array
// let array = [25, 30, 34, 40, 50, 60, 70, 80, 90];
// let x = [30,34];
// for(item of array){
//   if(item === x){
// console.log(item);
//   }
//   }
// console.log()

//Find maximum in an Array

// let array = [15, 20, 70, 45, 60, 50, 5, 80,];
// let max = [0];
// for(let i = 1; i < array.length; i++){
//   if(array[i] > max)
//   max = array[i];
// }
// console.log(max);


// Date Function 

const targetdate = new Date('2026-05-15'); // set target date 
// console.log(targetdate);

const currentDate = new Date(); // current date 
// console.log(currentDate);

const leftTime = Math.abs(currentDate - targetdate); // ye in inko substract krke miliseconds me value positive benake dega
console.log(leftTime)
const leftDays = Math.ceil(leftTime / (1000 * 60 * 60 * 24)); //ye jo miliseconds aaye he un ko days me convert kare ga or ceil value ko round figer me dega
const leftHours = Math.ceil(leftTime % (1000 * 60 * 60 * 24)/ (1000*60*60)); //ye jo miliseconds aaye he un ko Hour me convert kare ga or ceil value ko round figer me dega
const leftMinutes = Math.ceil(leftTime % (1000 * 60 * 60)/ (1000*60));//ye jo miliseconds aaye he un ko Minutes me convert kare ga or ceil value ko round figer me dega

const leftSeconds = Math.ceil(leftTime % (1000 * 60)/ (1000)); //ye jo miliseconds aaye he un ko Seconds me convert kare ga or ceil value ko round figer me dega


console.log(`${leftDays} days ${leftHours} Hours ${leftMinutes} Minutes${leftSeconds} Seconds`);





