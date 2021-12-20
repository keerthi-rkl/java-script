const ps = require("prompt-sync");
const prompt = ps();
const a=prompt('enter value:  ');
const b=prompt("enter value:  ");
const c=prompt("enter value:  ");
if((a>b)&&(a>c)){
    console.log(a,"is bigger than",b,"and" ,c)
}
if((b>a)&&(b>c)){
    console.log(b,"is bigger than",a,"and",c)
}
if((c>a)&&(c>b)){
    console.log(c,"is bigger than",a,"and",b)
}