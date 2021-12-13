const ps = require("prompt-sync")
const prompt= ps();
var a=prompt("enter a value");
var b=prompt("enter b value");
var c=prompt("enter c value");
if((a>b)&&(a>c)){
    console.log(a,"is greater than",b,"and",c)
}
if((b>c)&&(b>a)){
    console.log(b,"is greater than",a,"and",c)
}
if((c>b)&&(c>a)){
    console.log(c,"is greater than",b,"and",a)
}