var employee=[{id:1,name:"rakesh"},
    {id:2,name:"puneeth"},
    {id:3,name:"venkat"},
    {id:4,name:"vikas"},
    {id:5,name:"poojith"}]
let play = () => {
    let tbody=document.getElementById("ok");
   
    let rows="";
    for(emp of employee) {
        rows =
         rows +
          `<tr> 
          <td>${emp.id}</td>
          <td>${emp.name}</td>
           </tr>`;
    }
    tbody.innerHTML = rows;

};