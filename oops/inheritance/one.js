class One{
    constructor(a,b,c){
        this.student_name=a;
        this.student_id=b;
        this.course=c;
    }
}
class Two extends One{
    get_studentdetails(){
        console.log("harry from bca")
    }
    
}
let s1=new Two("harry",45,"BCA");
console.log(s1)
let s2=new Two("nail",12,"BSC")
console.log(s2)
s1.get_studentdetails();