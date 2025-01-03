const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this//this refer to currentContext
            .username}, welcome to the website`);
        }
}
// function chai () {
//     let username = "harsh"
//      console.log(this.username)
//   }
//  chai()
 const chai = () => { //this is called arrow function
     let username = "hitesh"
     console.log(this.username)
 }

 chai()

const AddTwo = (Num1, Num2) => ({username: "hitesh"})

console.log(AddTwo(3,4))
const MyArray = [2,5,3,7,8]
MyArray.forEach(() => ())