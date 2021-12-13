const ps = require("prompt-sync")
const prompt= ps();
var a=prompt("enter a value");
var b=prompt("enter b value");
var c=prompt("enter c value");
if(a>b&&a>c){
    if(c>b){
        console.log(a,b,c);
    }
    else{
        console.log(a,c,b)
    }
}
else if(b>a&&b>c){
    if(a>c){
        console.log(b,c,a)
    }
    else{
        console.log(b,a,c)
    }
}
else if(c>a&&c>b){
    if(a>b){
        console.log(c,a,b)
    }
    else{
        console.log(c,b,a)
    }
}
