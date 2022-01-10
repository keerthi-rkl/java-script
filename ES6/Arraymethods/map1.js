let emp=[{name:"puneeth",id:23,sal:45000},{name:"rakesh",id:12,sal:55000},{name:"pooojith",id:24,sal:40000},{name:"gnaneswar",id:45,sal:75000}]
//emp.map((emp)=>{console.log("good morning")})
emp.map((emp)=>{console.log(emp)})
let employees=emp.map((emp)=>{return emp});
console.log(employees)