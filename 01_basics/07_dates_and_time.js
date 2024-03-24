//Dates 

let mydate  = new Date()
// console.log(mydate);  //2024-03-24T14:40:41.856Z
// console.log(mydate.toString()); //Sun Mar 24 2024 14:40:41 GMT+0000 (Coordinated Universal Time)
// console.log(mydate.toDateString()); //Sun Mar 24 2024
// console.log(mydate.toLocaleString());  //3/24/2024, 2:40:41 PM
// console.log(typeof mydate);  //object

let myCreatedDate = new Date(2023,2,23)
// console.log(myCreatedDate.toISOString());   //2023-01-31T00:00:00.000Z
// console.log(myCreatedDate.toJSON());
// console.log(myCreatedDate.toTimeString());  //14:43:22 GMT+0000 (Coordinated Universal Time)


// let myDate = new Date(2024,3,24,6,5)

let myDate = new Date('2024-03-24')
// console.log(myDate);  //2024-04-24T06:05:00.000Z
// console.log(myDate.toLocaleString());  //4/24/2024, 6:05:00 AM


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate)
console.log(newDate.getDate()); //24
console.log(newDate.getDay());  //0-Sunday
console.log(newDate.getMonth() + 1); //3 - march
