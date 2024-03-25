const actors = ['salman','shahrukh','aamir','shahid']
const actress = ['rani','kajol','priyanka','deepika']

//actors.push(actress)
// console.log(actors);
// console.log(actors[4][1]);


// const newActors = actors.concat(actress)
//console.log(newActors);

const allHeros = [...actors,...actress]
//console.log(allHeros); 


const anotherArr = [1,2,4,[4,5,6],7,[8,9,[3,4]]]
const realAnotherArr = anotherArr.flat(Infinity)
//console.log(realAnotherArr);

// console.log(Array.isArray("Shivani"))  //false
// console.log(Array.from('Shivani'));  // [ 'S', 'h', 'i','v', 'a', 'n','i']
// console.log(Array.from({name:'shivani'}));   //[] - Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));  //[ 100, 200, 300 ]

