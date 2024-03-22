// Primitive datatypes

//7 types - String , Number , Boolean , null , undefined , Symbol , BigInt


const score = 100 //number
const scoreValue = 100.3 //number
const isLoggedIn = false  //boolean
const outsideTemp = null //object
let userEmail ; //undefined

const id = Symbol('123') 
const userId = Symbol('123'); 

// console.log(id); ////symbol
// console.log(userId);//symbol

//console.log(id === userId)
const bigNumber = 893874732642373784n; //bigint

//console.log(typeof score, typeof scoreValue, typeof isLoggedIn, typeof outsideTemp ,typeof userEmail,typeof id, typeof userId,typeof bigNumber);

//reference datatypes 

//Array , Object , Functions

const heros = ['shaktiman','superman','batman']; //object

let myObj = {
    name : 'Shivani',
    age : 21,
    city : 'Khalghat'
}             //object

const myFunction = function(params) {
    console.log("Hello World");
} //function object

//console.log(typeof heros, typeof myObj, typeof myFunction);

//***************************************************

//Stack(Primitive datatypes) and Heap(Non primitive datatypes)

let myYoutubeName = 'shividotcom'

let anotherName = myYoutubeName;
anotherName = 'chaiaurcode'

// console.log(anotherName);
// console.log(myYoutubeName);


let userOne = {
    name : 'Shivani',
    email : "shivi@gmail.com"
}
 
let userTwo  = userOne;

userTwo.email = 'priya@gmail.com';

console.log(userOne.email);
console.log(userTwo.email);
