//const tinderUser = { }

const tinderUser = new Object()

tinderUser.id = '123abc'
tinderUser.name = 'shivani'
tinderUser.isLoggedIn = false

// console.log(tinderUser)


const regularUser = {
    email: 'some@gmail.com',
    fullName : {
        userFullName:{
            firstName:'shivani',
            lastName : 'choudhary'
        }
    }
}

//console.log(regularUser.fullName.userFullName.firstName) //shivani


const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}
const obj4 = {5:'e',6:'f'}

//const obj3 = {obj1,obj2}
//console.log(obj3)    //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

//const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2,...obj4} //same output
//console.log(obj3);  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const users = [{
    id: '1',
    email:'s@gmail.com'
},
{
    id: '1',
    email:'s@gmail.com'
},
{
    id: '1',
    email:'s@gmail.com'
}]

// console.log(users[1].email);  //s@gmail.com

// console.log(tinderUser)  //{ id: '123abc', name: 'shivani', isLoggedIn: false }
// console.log(Object.keys(tinderUser))   //[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser))  //[ '123abc', 'shivani', false ]
// console.log(Object.entries(tinderUser));  //[ [ 'id', '123abc' ], [ 'name', 'shivani' ], [ 'isLoggedIn', false ] ]
// console.log(tinderUser.hasOwnProperty('isLoggedIn')) //true
// console.log(tinderUser.hasOwnProperty('isLogged')) //false



const course = {
    courseName : 'JS in hindi',
    courseTecher : 'shivani'
}

//course.courseTecher //shivani
const {courseTecher : CT} = course;
console.log(CT);  //shivani