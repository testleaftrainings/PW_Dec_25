//syntax 
let promise =new Promise((resolve,reject)=>{

console.log("order food")
setTimeout(()=>{
    resolve("food is ready")
    reject("no delivery")
},6000)
})

promise.then(result=>console.log(result)).catch(error=>console.log(error))
//then().then()
//2017 ->async/await -> playwright
//await => promise

//avoid callback,cleaner then .then(),easy write and ready,

async function data(){
    await promise()
}