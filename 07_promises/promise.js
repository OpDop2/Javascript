const promiseOne = new Promise(function(resolve, reject){ 
    // DB calls, cryptographic, network
    setTimeout(function() {
        resolve()
        console.log("Async task is completed")
    }, 1000)
})
// then directly have connection with resolve
promiseOne.then(function() {
    console.log("promise consumed")
})
new promise(function(resolve, reject){
    setTimeout(function(){
       console.log("Asycn task two")  
       resolve()
    }, 1000)
}).then(function() {
   console.log("Async 2 two resolved")
})