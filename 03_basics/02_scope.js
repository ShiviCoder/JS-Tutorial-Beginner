var c = 300
let a = 100
if(true){
    let a = 10
    const b = 20
    //console.log('INNER : ',a);
}

// console.log(a);
// // console.log(b);  
// console.log(c);


function one(){
    const username = 'shivani'

    function two(){
        const website = 'instagram'
        console.log(username);
    }
    // console.log(website);
    two()
}
//one()


if(true){
    const username = 'shivani'
    if(username == 'shivani'){
        const website = ' youtube'
        //console.log(username + website);//shivani youtube
    }
    // console.log(website);
}
// console.log(username);


//console.log(addOne(4)); //5
function addOne(num) {
    return num + 1;
}

//addTwo(5) //Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2;
}
console.log(addTwo(7)); //9