function sayMyName(){
    console.log('S')
    console.log('H')
    console.log('I')
    console.log('V')
    console.log('A')
    console.log('N')
    console.log('I')
}
//sayMyName //Reference
//sayMyName()  //print my name

// function addTwoNumber(num1 , num2)//(parameters)
//  {
//     console.log(num1 + num2)
// }

function addTwoNumber(num1 , num2)//(parameters)
 {
    // let result = num1 + num2;
    // return result
    return num1 + num2;
}
// addTwoNumber()//arguments //Nan
// addTwoNumber(3,4) //7
// addTwoNumber(3,'e') //3e
// addTwoNumber(4,null) //4

const result = addTwoNumber(4,5)
//console.log(result);  //9




function registerUser(username = 'shivani'){ //shivani just logged in
    if(!username){
        console.log('please enter username');
        return;
    }
    return `${username} just logged in`
}
//console.log(registerUser('choudhary')); //choudhary just logged in



function calculateCartPrize(val1,val2,...num){
    return num;
}
//console.log(calculateCartPrize(300,400,200,43000)) //[ 300, 400, 200, 43000 ]
/*
val1 => 300
val2 => 400
...num => 200,43000
*/


const user = {
    name:'shivani',
    prize: 1999
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.name} and prize is ${anyObject.prize}`)
}
//handleObject(user)

// handleObject({
//     name : 'sam',
//     prize : 2000
// })


const myArray = [100,200,300,400]
function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myArray)); //200

//console.log(returnSecondValue([10,20,30,40])); //20