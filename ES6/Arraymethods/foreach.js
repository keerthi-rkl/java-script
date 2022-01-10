let product=[{name:"techno spark 8T",brand:"tecno",color:"Atlantic blue",memorystorage:"64GB",cost:"10000"}];
//product.forEach((product)=>{console.log(product)});
let product_details=product.forEach((product)=>{return product})
console.log(product_details) //undefined, foreach can`t return new array