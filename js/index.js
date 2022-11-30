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

document.getElementById("time-format").innerHTML = `24-Hour Format`;

function clockFormat() {
    format = document.getElementById("format-switch").checked;
    document.getElementById("time-format").innerHTML = "";
    if (format) {
        document.getElementById("time-format").innerHTML = `12-Hour Format`;
        clearTimeout(t);
        document.getElementById("display-time").innerHTML = "";
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        if (h > 12) {
            h12 = h - 12;
            amPm = `PM`;
        } else if (h == 0) {
            h12 = 12;
            amPm =`AM`;
        } else {
            h12 = h;
            amPm `AM`;
        }
        // prepend 0
        if (m < 10) { 
            m = "0" + m;
        }
        if (s < 10) { 
            s = "0" + s;
        }
        document.getElementById("display-time").innerHTML = `${h12}:${m}:${s} ${amPm}`;
        t = setTimeout('clockFormat()', 500);

    } else {
        document.getElementById("time-format").innerHTML = `24-Hour Format`;
        clearTimeout(t);
        startMyTime();
    };
}



