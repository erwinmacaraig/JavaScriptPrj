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
    document.getElementById("display-time").innerHTML = `${h}:${m}:${s}`;
    t = setTimeout('startMyTime()', 500);
}
let calculator = new Calculator();