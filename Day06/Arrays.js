//[] -> array
//let info=["testleaf",2026, ,null]
//index value will be start from '0'

//for..of -> assign old variable value will be assigned to new variable

let mentorName=["sai","gauthami","udaya","bhuvanesh","yuvarani"]
console.log(typeof mentorName)
console.log(mentorName[4]+": name is presented in  index 4")
console.log("Length of the of the array :" +mentorName.length)

//add new value to the array with replace
mentorName[4]="Ravi"
console.log(mentorName)
//-> to add and remove 
//push,pop,unshift,shift
//push -> add new in last index
mentorName.push("yuvarani")
console.log(mentorName)
//pop -> remove the value which is present in last index
mentorName.pop()
console.log(mentorName)

mentorName[6]="Dilip"
console.log(mentorName)
console.log(mentorName[5])

//unshift and shift
//unshift -> add the value in '0'
mentorName.unshift("Dinesh")
console.log(mentorName)
//shift -> remove the value in '0'
mentorName.shift()
console.log(mentorName)

// let a=[]
// console.log(a.shift())

mentorName.sort()
console.log(mentorName)

//for..of loop
for(let empName of mentorName){
    console.log(empName)
}

//forEach 
mentorName.forEach((mentorName)=>{
    console.log(mentorName)

})