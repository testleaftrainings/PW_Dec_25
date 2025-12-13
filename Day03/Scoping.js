//var, let,const
//var -> global and function scoping
//let , const -> block level scoping {}

var week1="JavaScript" 
//let val=78

function playwright(){
    //let val=65
if(week1==="JavaScript"){
    console.log("inside the function :"+week1)
    let val=45
    console.log("inside the function let value :"+val)
     const a ="Play"
     console.log("inside the function const value :"+a)
}
console.log("inside the function let value :"+val)
}
console.log("Out side the function :"+week1)
//console.log("Out side the function let value :"+val)


playwright()