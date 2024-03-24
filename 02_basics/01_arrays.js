//Arrays

const arr = [3,4,6,7,2]
const heros = ['shekhar','rohit','virat','dhoni']
const myArr = new Array(2,3,4,6)
// console.log(heros.length); //4
// console.log(heros[2]);  //virat

// arr.push(89)
// arr.push(90)
// arr.pop()

// arr.unshift(8)
// arr.shift()
// console.log(arr.includes(8)); //false
// console.log(arr.indexOf(4));   //1 otherwise -1



const newArray = myArr.join()
// console.log(newArray); //2,3,4,6

// console.log(typeof newArray); //string


//slice and splice

console.log('A ',myArr);
const myn1= myArr.slice(1,3)
console.log(myn1);

console.log('B ',myArr);
const myn2  = myArr.splice(1,3)
console.log(myn2);
console.log('C ',myArr);
