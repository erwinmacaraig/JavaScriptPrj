function processSubmission() { 
    const tr = document.createElement("tr");
    const tdname = document.createElement("td");
    const tdlastname = document.createElement("td");
    const tdgender = document.createElement("td");
    const tdaction = document.createElement("td");
    // const actionBtn = document.createElement("button");
    // actionBtn.setAttribute("id", );
    

    const myFields = document.getElementsByClassName("form-field"); // array of HTML Elements
    tdname.textContent = myFields[0].value;
    myFields[0].value = '';
    tdlastname.textContent = myFields[1].value;
    myFields[1].value = '';
    if (myFields[2].checked) {
        tdgender.textContent = "F";
        myFields[2].checked = false;
    } else if (myFields[3].checked) { 
        tdgender.textContent = "M";
        myFields[3].checked = false;
    }
    let btnDel = document.createElement("button");
    btnDel.setAttribute("type", "submit");
    btnDel.setAttribute("type", "submit");
    btnDel.addEventListener('click', deleteRecord);
    btnDel.textContent = "DELETE";
    tr.appendChild(tdname);
    tr.appendChild(tdlastname);
    tr.appendChild(tdgender); 
    tdaction.appendChild(btnDel);
    tr.appendChild(tdaction);

    const myTableBody = document.querySelector("#parent-div table tbody");

    myTableBody.appendChild(tr);   

}

function deleteRecord(evt) { 
    console.log(evt.target);
    evt.preventDefault();
    
    let childRows = document.querySelectorAll('#parent-div>table tbody tr');
    console.log(typeof(childRows[0]));

    console.log(evt.target);
    let parentElement = document.querySelector("#parent-div>table tbody");

    parentElement.removeChild((evt.target.parentElement).parentElement);

    // let recordIndexToDelete = evt.target.getAttribute("data-record");
   
    // childRows.forEach(function (e) {
    //     if (e.getAttribute("data-record") == recordIndexToDelete) {
    //         parentElement.removeChild(e);
    //     }
    // });

    return false;


}