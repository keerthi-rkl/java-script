var emp=[{id:1,name:"rakesh"},
    {id:2,name:"puneeth"},
    {id:3,name:"venkat"},
    {id:4,name:"vikas"},
    {id:5,name:"poojith"}]
let play = () => {
    console.log("Test Case 123")
    let rows="";
    for(let i = 0; i <= emp.length - 1; i++) {
        rows =
         rows +
          `<tr> 
          <td>${emp[i].id}</td>
          <td>${emp[i].name}</td>
           </tr>`;
    }
    document.getElementById("test").innerHTML = rows;

};