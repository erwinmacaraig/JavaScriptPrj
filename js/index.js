document.querySelector("div.container").style = "display: none";
setTimeout(function () {
    document.querySelector("div.page-loading-status").style = "display: none";
    document.querySelector("div.container").style = "display: block";
    document.getElementById('screen').focus();
}, 2000);

let twelve, t
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
        s = "0" + s
    }
    document.getElementById("display-time").innerHTML = `${h}:${m}:${s}`;
    t = setTimeout('startMyTime()', 500);
    clearTimeout(twelve)
}


function startMy12HrTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    // prepend 0
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s
    }
    let indications = 'AM'
    if (h > 11) { indications = 'PM' }
    if (h > 12) { h = h - 12 }
    if (h == 0) { h = 12; }
    if (h < 10) { h = "0" + h; }
    document.getElementById("display-time").innerHTML = `${h}:${m}:${s} ${indications}`;
    twelve = setTimeout('startMy12HrTime()', 500);
    clearTimeout(t)
}

let calculator = new Calculator();
let numbers = document.getElementsByClassName('numbers')
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', () => {
        calculator.getOnclickInput(numbers[i].value)
        document.getElementById('screen').value = calculator.nums.join('')
    })
}

document.getElementById('screen').onkeydown = (e) => calculator.bindKey(e)

document.querySelector('input[role="switch"]').onchange = (e) => {
    if (e.target.checked)
        startMy12HrTime()
    else
        startMyTime()
}
