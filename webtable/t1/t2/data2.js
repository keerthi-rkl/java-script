var employee=[{id:2,name:"rakesh"},
    {id:3,name:"puneeth"},
    {id:4,name:"venkat"},
    {id:5,name:"vikas"},
    {id:6,name:"poojith"}];
let play=()=>{
    let rows="";
    for(let i=0;i<=employee.length-1;i++){
        rows=rows+
        `<tr><td>${employe[i].id}</td>
            <td>${employee[i].name}</td>
        </tr>`;
    }
    document.getElementById("test").innerHTML=rows;

}