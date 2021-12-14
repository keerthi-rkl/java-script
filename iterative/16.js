let num=17;
let n1=0;
let n2=1;
let next;
for(let i=1;i<=num;i++){
    console.log(n1);
    next=n1+n2;
    n1=n2;
    n2=next;
}