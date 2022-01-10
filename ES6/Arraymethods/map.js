let size=[34,35,38,40];
//size.map((size)=>{console.log("good night")})
size.map((size)=>{console.log(size)})
function new_size(size){
    return size+1;//return new ARRAY
}
let result=size.map(new_size);//map method create a new array while calling a function
console.log(result)