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