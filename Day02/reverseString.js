let browser="chrome" //emorhc

let rev=""//empty string variable
for(let i=browser.length;i>=0;i--){
    rev=rev+browser.charAt(i)
    //rev+=browser.charAt(i)
    console.log(browser.charAt(i))
}
console.log(rev)
//e,m,o,r,h,c-> emorch

let m="playwright"
let reverse=m.split("").reverse().join("")
console.log(reverse)