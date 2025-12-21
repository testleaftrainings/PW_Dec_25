let num=[32,34,12,78,90,78,20,21,34,78]
//for -loop -> nested for loop
//1st forloop -> take value i=32,34
//2nd forloop -> compare with remaining values 
//if condition (i===j)
//print duplicate 

//i=78
//j=78

for(let i=0;i<num.length;i++){

    for(let j=i+1;j<num.length;j++){

        if(num[i]===num[j]){
            console.log("Duplicate values :"+num[j])
        }
    }

}