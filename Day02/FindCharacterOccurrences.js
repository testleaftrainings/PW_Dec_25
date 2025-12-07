let val="character"
let char="a"
let count=0

for(let i=0;i<val.length;i++){
    if(val[i]===char){
        count++ //count=count+1
    }
}
console.log("total number of 'a' occurrences :"+count)