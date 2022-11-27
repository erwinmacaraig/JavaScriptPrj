// let imageContainers = document.querySelectorAll(".dog-img-container");
// console.log(imageContainers);

// for (let i = 0; i < imageContainers.length; i++) { // create new elements
//     let imgEl = document.createElement("img");
//     getMeADog().then(function (serverImg) {
//         imgEl.setAttribute("src", serverImg);
//         imageContainers[i].appendChild(imgEl);  
//     });
// }


function getMeADog() {
    return new Promise(function (resolve, reject) { 
        let req = new XMLHttpRequest();
        let imgSrc = '';
        const dogUrl = 'https://dog.ceo/api/breeds/image/random';
        req.open("GET", dogUrl);
        req.getResponseHeader('Content-type', 'application/json');    

    req.onreadystatechange = function () {
        // if (req.readyState == 3) {
        //     document.getElementById("loading-container").innerHTML = '<p>Loading</p>';

        // }
        if (req.readyState == 4) {
            // setTimeout(() => {
            //     document.getElementById(location).innerHTML = '';
            // }, 800);
            
            
            const resObj = JSON.parse(req.responseText);
            // document.querySelector('#img-dog').src = resObj['message'];
            imgSrc = resObj['message'];
            resolve(imgSrc);
        }
    }
    req.send();

        
    });
    
    
}

function fetchMyDog(parentId) { 
    let req = new XMLHttpRequest();
    let imgSrc = '';
    const dogUrl = 'https://dog.ceo/api/breeds/image/random';
    const parentDiv = document.getElementById(parentId);
    req.open("GET", dogUrl);
    req.getResponseHeader('Content-type', 'application/json');
    if (parentDiv.lastElementChild.nodeName == 'IMG') { 
            parentDiv.removeChild(parentDiv.lastElementChild);
               
    }
    parentDiv.firstElementChild.style = "display: block";
    req.onreadystatechange = function () {        
        if (req.readyState == 4) {
            
            if (parentDiv.lastElementChild.nodeName == 'IMG') { 
             parentDiv.removeChild(parentDiv.lastElementChild);               
            }
            let imgEl = document.createElement("img");            
            const resObj = JSON.parse(req.responseText);           
            imgSrc = resObj['message'];
            imgEl.setAttribute("src", imgSrc);  
            parentDiv.firstElementChild.style = "display: none";
            parentDiv.appendChild(imgEl);    
        }
    }
    req.send();

}

function fetchDogBreed() { 
    let xhr = new XMLHttpRequest();
    let breed = document.getElementById('the-breed').value;

    breed = breed.toLowerCase();
    const dogUri = `https://dog.ceo/api/breed/${breed}/images`;
    xhr.open("GET", dogUri);
    let results;
    const parentContainerEl = document.getElementById('dog-breed-container-results');
    while (parentContainerEl.firstChild) { 
        parentContainerEl.removeChild(parentContainerEl.firstChild);
    }
    xhr.onreadystatechange = function () { 
        if (xhr.readyState == 4 && xhr.status == 200) { 
            results = JSON.parse(xhr.responseText);
            let dogs = results['message'];

            for (let x = 0; x < dogs.length; x++) {
                let cardDiv = document.createElement("div");
                cardDiv.setAttribute("class", "card");
                // cardDiv.setAttribute("style", "width: 18rem;");

                let actualImg = document.createElement("img");
                actualImg.setAttribute("class", "card-img-top");
                actualImg.setAttribute("src", dogs[x]);
                
                let cardBody = document.createElement("div");
                cardBody.setAttribute('class', 'card-body');

                let titleHeading = document.createElement("h5");
                titleHeading.textContent = `Dog Number #${x+1}`;

                let cardDesc = document.createElement("p");
                cardDesc.setAttribute("class", "card-text");

                cardDesc.textContent = `Some quick example text to build on the card title and make up the bulk of the card's content.`;

                cardBody.appendChild(titleHeading);
                cardBody.appendChild(cardDesc);

                cardDiv.appendChild(actualImg);
                cardDiv.appendChild(cardBody);
                parentContainerEl.appendChild(cardDiv);

            }

            

        }
    }
    xhr.send();

}
function getAllCountries() { 
    const xhr = new XMLHttpRequest();
    const url = "https://api.getfestivo.com/v2/countries/?api_key=ed06611c8309b2fbade085a8f5e4fe15";   
    xhr.open("GET", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    let selectEl = document.getElementById("inputGroupSelect01");

    xhr.onreadystatechange = function () { 
        if (xhr.DONE && xhr.status == 200) { 
            // console.log(JSON.parse(xhr.responseText));
            let results = [];            
            results = JSON.parse(xhr.responseText);            
            for (let i = 0; i < results.length; i++) { 
                let countryObj = results[i];               
                let option = document.createElement("option");
                option.setAttribute('value', countryObj['name']);
                option.textContent = countryObj['name'];
                selectEl.appendChild(option);                
            }
        }
    }
    xhr.send();
}