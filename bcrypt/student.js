const bcrypt=require("bcryptjs")
let student={name:"rakesh",
             id:34,
             course:"computer science engineering",
             email:"pulirakesh@gmail.com",
             password:"123bts$"}
let salt=bcrypt.genSaltSync(3)
let new_password=bcrypt.hashSync(student.password,salt);
console.log(new_password)
 let new_student={...student,password:new_password}
 console.log(new_student)
