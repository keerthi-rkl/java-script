class Emp{
    constructor(a,b,c){
        this.name=a;
        this.id=b;
        this.sal=c;
    }
    emp_depart(){
        console.log("testing department")
    }
}
let e1=new Emp("puneeth",34,50000)
console.log(e1)
let e2=new Emp("poogith",23,60000)
console.log(e2)
e1.emp_depart();
