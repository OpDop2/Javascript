//for of 

const arr = [1,2,3,4,5]

for (const num of arr ) {
    console.log(num)
    
}

const greeting = "hellow word"
for (const greet of greeting) {
    console.log(`Each character is ${greet}`)
}
//maps

const map = new Map()
map.set("IN", "India")
map.set("USA", "United states of america")
map.set("FR", "France")

console.log(map.get('IN'))
console.log(map.get('FR'))

for (const [key, value] of map) {
    console.log(key, value)
}
const myObject = {
    GameName: "NFS",
    PlayerName: "Anone",
    Level: 33,
    Goal: 555

}
// for (const [key, value] of myObject) {
//     console.log(key, value)
// }

