document.querySelector("div.container").style = "display: none";

setTimeout(function () { 
    document.querySelector("div.page-loading-status").style = "display: none";
    
    document.querySelector("div.container").style = "display: block";
}, 2000);


function startMyTime() { 
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    
    // prepend 0
    if (m < 10) { 
        m = "0" + m;
    }
    if (s < 10) { 
        s = "0" + s;
    }
    

    let regular = new formatHours(h, m, s);
    let chosenFormat = document.getElementById('hourFormat').value;
    if(chosenFormat == "regular"){
        let regularHrs = regular.format12();
        let amOrPm = regular.amPm();
        document.getElementById("display-time").innerHTML = `${regularHrs}:${m}:${s}`;
        document.getElementById('ampm').innerHTML = `${amOrPm}`;
        t = setTimeout('startMyTime()', 500);
    }
    else{
        document.getElementById("display-time").innerHTML = `${h}:${m}:${s}`;
        t = setTimeout('startMyTime()', 500);
    }
}

let calculator = new Calculator();