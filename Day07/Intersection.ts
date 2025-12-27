//let statusCode:number&string

//value of an intersection type must satisfy all constituent types
type a={
empName:string
empCode:number
} 

type b={
    adminName:string
    adminCode?:number
}

type c= a&b

let details:c={

empName:"Kumar",
empCode:1234,
adminName:"Ravi",
//adminCode:45
}

console.log(details)

//value?-> option value or parameter  -> ends with? and its give at last 
function v(a:string,b?:number){

}