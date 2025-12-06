//var -> resign value and redeclare
//resign value -> allowed
var userName="dilikumar@testleaf.com"
userName=123
console.log(typeof userName +"  "+ userName)
//redeclare -> allowed
var count =10
var count = true
//output -10 ,true
console.log(typeof count +"  "+ count)


//ES6 -> 2015 -> let and const
//let -> resign value allowed , redeclare not allowed
let batchCount = 110
batchCount=122347987654324n
console.log(typeof batchCount +"  "+ batchCount)

//let userName="dilip"
//let batchCount =120
//output - error -> redeclare not allowed

//const -> resign value not allowed , redeclare not allowed
const pi=3.14
pi=3.1434
console.log(typeof pi +"  "+ pi)