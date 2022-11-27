function saveRecord() { 
    
    let xhr = new XMLHttpRequest();
    let dbUrl = 'https://fir-fb-db-a6d4f-default-rtdb.asia-southeast1.firebasedatabase.app/person.json';
    xhr.open('POST', dbUrl);
    xhr.setRequestHeader("Content-Type", "application/json");
    const myFields = document.getElementsByClassName("form-field");
    let gender = "M"; // default value
    if (myFields[3].checked) {
        gender = "F";        
    }
    let country = myFields[4].value;

    const person = {
        "firstname": myFields[0].value,
        "lastname": myFields[1].value,
        "gender": gender,
        "country": country
    };
    

    xhr.onreadystatechange = function () { 
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            renderUI();
            localStorage.setItem('person', JSON.stringify(person));
         }
    }

    xhr.send(JSON.stringify(person));
    return false;

}


function renderUI() {
    const tr = document.createElement("tr");
    const tdname = document.createElement("td");
    const tdlastname = document.createElement("td");
    const tdgender = document.createElement("td");
    const tdaction = document.createElement("td");
    const tdcountry = document.createElement("td");
    const myFields = document.getElementsByClassName("form-field"); // array of HTML Elements
    tdname.textContent = myFields[0].value;
    tdcountry.textContent = myFields[4].value;
    myFields[0].value = '';
    tdlastname.textContent = myFields[1].value;
    myFields[1].value = '';
    if (myFields[3].checked) {
        tdgender.textContent = "F";
        myFields[3].checked = false;
    } else if (myFields[2].checked) {
        tdgender.textContent = "M";
        myFields[2].checked = false;
    }
    let btnDel = document.createElement("button");    
    btnDel.setAttribute("type", "submit");
    btnDel.addEventListener('click', deleteRecord);
    btnDel.textContent = "DELETE";
    tr.appendChild(tdname);
    tr.appendChild(tdlastname);
    tr.appendChild(tdgender);
    tr.appendChild(tdcountry);
    tdaction.appendChild(btnDel);
    tr.appendChild(tdaction);

    const myTableBody = document.querySelector("#parent-div table tbody");

    myTableBody.appendChild(tr);

}

function deleteRecord(evt) {
    evt.preventDefault();
    let xhr = new XMLHttpRequest();
    let dbUrl = `https://fir-fb-db-a6d4f-default-rtdb.asia-southeast1.firebasedatabase.app/person/${evt.target.value}.json`;
    xhr.open('DELETE', dbUrl);

    console.log(evt.target.value);
    
    let parentElement = document.querySelector("#parent-div>table tbody");
    xhr.onreadystatechange = function () { 
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
             parentElement.removeChild((evt.target.parentElement).parentElement);
         }
    }
    xhr.send();
    return false;

}

function retrieveAllRecords() { 
    let xhr = new XMLHttpRequest();
    let dbUrl = `https://fir-fb-db-a6d4f-default-rtdb.asia-southeast1.firebasedatabase.app/person.json`
    xhr.open("GET", dbUrl);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onreadystatechange = function () { 
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const persons = JSON.parse(xhr.responseText);
            buildUI(persons);
         }
    }
    xhr.send();
}

function buildUI(persons) {
    console.log(persons);
    const myTableBody = document.querySelector("#parent-div table tbody");
    for (key in persons) {
        let tr = document.createElement("tr");
        let tdname = document.createElement("td");
        let tdlastname = document.createElement("td");
        let tdgender = document.createElement("td");
        let tdaction = document.createElement("td");  
        let tdcountry = document.createElement("td"); 
        let btnDel = document.createElement("button");
        tdname.textContent = persons[key]['firstname'];
        tdlastname.textContent = persons[key]['lastname'];
        tdgender.textContent = persons[key]['gender'];
        tdcountry.textContent = persons[key]['country'];
        btnDel.addEventListener('click', deleteRecord);
        btnDel.setAttribute("type", "button");
        btnDel.setAttribute("value", key);
        btnDel.textContent = 'DELETE';
        tdaction.appendChild(btnDel);
        tr.appendChild(tdname);
        tr.appendChild(tdlastname);
        tr.appendChild(tdgender);
        tr.appendChild(tdcountry);
        tr.appendChild(tdaction);
        myTableBody.appendChild(tr);

     }
    

    // ed06611c8309b2fbade085a8f5e4fe15

    /*
const axios = require('axios');

axios.get('https://api.getfestivo.com/v2/countries', {
  params: {
    api_key: "XXXXXX-XXXX-XXXX-XXXX-XXXXXXXXX"
  }
})
.then(function (response) {
  // handle success
  console.log(response)
})
.catch(function (error) {
  // handle error
  console.log(error)
})
.then(function () {
  // always executed
})
    */
}


