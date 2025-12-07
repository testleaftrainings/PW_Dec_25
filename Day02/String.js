let companyName="TestLeaf@2025 "
let comName=new String("TestLeaf")

//find length of the string
console.log("total no.of chars : "+companyName.length)
// 0 to 13 -> index value will be start from '0'

//chartAt -> Print the value based on index
console.log("CharAt Method :"+companyName.charAt(5))

//indexof -> its going print character in which index its presented
let data="javascript"
console.log("First character index :"+data.indexOf("a"))
console.log("Last index:"+data.lastIndexOf("a"))

//touppercase and tolowercase
let cc="playWriGht"
console.log(cc.toUpperCase())
console.log(cc.toLowerCase())

//split ->split string value into words
//-> will be delimiter to break the string into words
let val="Amazon big million sales"
//Amazon,big,million,sales
//console.log(val.split(" "))
let sp=val.split(" ")
for(let i=0;i<sp.length;i++){
    console.log(sp[i])
}

let a="Dilip"
let b="Kumar"
console.log(a.concat(b))

//strict equality(===) -> no type convertion ->  both value and type
//loose equality(==) -> try compare both values to a common type and then compare
'5'==5 //string convert to number -> 5==5
console.log('5'==5)

console.log('5'===5) //string === number
console.log(7===7)