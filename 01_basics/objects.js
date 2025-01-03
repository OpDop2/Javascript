// const tinderUser = new Object -> this is called single ton object
const tinderUser = {}// this is called non single ton object

tinderUser.id = "123abc"
tinderUser.Name = "Sammmy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "Some@gmail.com",
    password: "single",
    Fullname: {
    usefullname: {
    firstName: "noob",
    lastName: "da"
    }},
}
// console.log(regularUser.Fullname.usefullname.firstName)
const course = {
    Instructor: "Anone",
    CourseTittle: "java script in 10 days",
    price: 99 
}
// const {Instructor: short} = course 
// this is called object destructuring
// console.log(short)