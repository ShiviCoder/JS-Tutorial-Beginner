const name = 'shivani '
const score  = 90;

//console.log(name + score + ' hello');

//console.log(`Hello my name is ${name} and my score is ${score}`);

const gameName = new String('Shivanich')

console.log(gameName[4]);

console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('S'))
const newString  = gameName.substring(0,6)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const anotherOne = '           shivani    '
console.log(anotherOne);
console.log(anotherOne.trim());

const url = 'https://shivani%20choudhary'
console.log(url);
console.log(url.replace('%20'," "));
console.log(url.includes('shivani'))


const anotherName = 'shivani-dot-com';
console.log(anotherName.split('-'));