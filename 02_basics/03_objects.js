//singleTon 
//Object.create

//Object literals

const symbol = Symbol('key1')
const JsUser = {
    name:'Shivani',
    age: 21,
    [symbol]:'myKey1',
    'Full Name':'Shivani Choudhary',
    email:'shivani@gmail.com',
    location: 'khalghat',
    isLoggedIn : true
}

// console.log(JsUser.email);  //shivani@gmail.com
// console.log(JsUser["email"]);  //shivani@gmail.com
// console.log(JsUser["Full Name"]);  //Shivani Choudhary

//console.log(JsUser[symbol]); 

//JsUser.email = 'shivi@gamil.com'
//console.log(JsUser);
//Object.freeze(JsUser)
//JsUser.email = 'shivani@whatsapp.com'
//console.log(JsUser);

JsUser.greeting = function(){
    console.log('Hello JSUser');
}

console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JsUser ${this.name}`);
}

console.log(JsUser.greetingTwo());