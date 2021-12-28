var emp=[{"id":1,"first_name":"Pammie","last_name":"Coslett","email":"pcoslett0@sphinn.com"},
{"id":2,"first_name":"Kerry","last_name":"Bake","email":"kbake1@slashdot.org"},
{"id":3,"first_name":"Dunn","last_name":"Allam","email":"dallam2@icio.us"},
{"id":4,"first_name":"Clarine","last_name":"De la Barre","email":"cdelabarre3@sfgate.com"},
{"id":5,"first_name":"Pat","last_name":"Reader","email":"preader4@huffingtonpost.com"},
{"id":6,"first_name":"Roxi","last_name":"O'Noulane","email":"ronoulane5@spiegel.de"},
{"id":7,"first_name":"Yule","last_name":"Coggeshall","email":"ycoggeshall6@bloomberg.com"},
{"id":8,"first_name":"Trish","last_name":"Brinson","email":"tbrinson7@51.la"},
{"id":9,"first_name":"Lotti","last_name":"Latour","email":"llatour8@amazon.co.uk"},
{"id":10,"first_name":"Norry","last_name":"Emanuel","email":"nemanuel9@furl.net"}];
function display(){
    
    let rows="";
    for(empl of emp){
        rows=rows+
        `<tr>
        <td>${empl.id}</td>
        <td>${empl.first_name}</td>
        <td>${empl.last_name}</td>
        </tr>`
    }
    document.getElementById("one").innerHTML=rows;
}