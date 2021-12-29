class Bank{
    constructor(a,b,c,d){
        this.name=a;
        this.acc_num=b;
        this.bal=c;
        this.ifsc=d;
    }
    get_balance(){
        return this.bal;
        
    }
    change_phno(){
        console.log("enter your previous mobile number:")
    }
    get_loan(){
        console.log("enter account number:")
        console.log("enter ammount:")
    }
    withdraw_ammount(){
        console.log("enter ammount for withdraw :")
    }
    

    
}
let b1=new Bank("rakesh",564523,10000,"bsk34567890");
console.log(b1)
console.log(b1.get_balance());
b1.change_phno();
b1.get_loan();
b1.withdraw_ammount();

