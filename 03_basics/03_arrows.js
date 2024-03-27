const user = {
    username : 'shivani',
    price : 999,
    welcomeMessage : function(params) {
        console.log(`${this.username}, welcome to our website`);
        //console.log(this);   //all object
    }
}

// user.welcomeMessage() //shivani, welcome to our website
// user.username = 'jiya'
// user.welcomeMessage() //jiya, welcome to our website

//console.log(this); //{}


// function chai(){
//     let username = 'shivani'
//     console.log(this.username); //undefined
// }
// chai()


// const chai =function (){
//     let username = 'shivani'
//     console.log(this.username); //undefined
// }
// chai()

// const chai = () => {
//     let username = 'shivani'
//     console.log(this.username); //undefined
//chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2;
// }

//     const addTwo = (num1,num2) => num1 + num2;


//const addTwo = (num1,num2) => (num1 + num2);

// const addTwo = (num1,num2) => ({username : 'shivani '})
console.log(addTwo(8,7)); //15