//replace->replaces a specified value with another value in a string
let value="Java Script Java"
let newValue=value.replace("Java","Type")
//JAvA Script or JAva Script
console.log(newValue)

//replaceAll->replaces all occurrences of a specified value with another value in a string
let val="Java Script Java"
let newVal=val.replaceAll("a","Type")
console.log(newVal)

let data ="2025 wlecome to 2026 TEST @%^&"
let newData=data.replaceAll(/[a-zA-Z]/g,"")
//^ -> retain the values mentioned after ^
console.log(newData)

//substring-> extracts the characters from a string, between two specified indices and returns the new sub string
//print the value based on the index values
//going to take +ve index values only
let str="Playwright"
console.log(str.substring(2))//aywright
console.log(str.substring(4,10))//end value -1

//slice-> extracts the parts of a string and returns the extracted parts in a new string
//can take both +ve & -ve index values also
let str1="Automation"
console.log(str1.slice(-4))
//10-4=6
console.log(str1.slice(-4,-1))
//10-4 =6,10-1=9(6,9-1)

let price="8908"
let num=parseInt(price)
console.log(typeof num  +num)