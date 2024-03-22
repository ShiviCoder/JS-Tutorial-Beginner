const score = 400;
// console.log(score);


const newScore = new Number(200)
// console.log(newScore);

// console.log(newScore.toString())
// console.log(newScore.toString().length)

//console.log(newScore.toFixed(3)) //200.000

const otherNumber = 32.5443
// console.log(otherNumber.toPrecision(2));  //33
// console.log(otherNumber.toPrecision(4));  //32.54

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000

//++++++++++++++++++++++++++++++   Maths  +++++++++++++++++++++++++++++++++++++++++++


// console.log(Math) //Object 
// console.log(Math.abs(-4)) //4
// console.log(Math.round(5.43)); //5
// console.log(Math.ceil(4.12))   //5 takes upper value
// console.log(Math.floor(3.99)); //3 takes lower value
// console.log(Math.min(3,5,65,32,1));  //1
// console.log(Math.max(32,54,67,31));  //67

//console.log(Math.random());
console.log((Math.random() * 10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min =10
const max = 20

console.log(Math.floor(Math.random()*(max-min*1))+min);
