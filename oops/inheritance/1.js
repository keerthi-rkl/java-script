class Product{
    constructor(a,b,c){
        this.mobile_1=a;
        this.mobile_2=b;
        this.mobile_3=c;
    }
}
class Product_details extends Product{
    constructor(e,f,g){
        super();
        this.mobile_1=e;
        this.mobile_2=f;
        this.mobile_3=g;
        
    }
}
let p1=new Product("redmi 9A","oppo","realme") ;
console.log(p1)
let p2=new  Product_details("interstellar black,4GB RAM,64GB storage","nature green, 2GB RAM,32GB storage","carbon black 4GB RAM+64GB storage")
console.log(p2)