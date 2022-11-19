document.querySelector("div.calculator").style = "display: none";
document.querySelector("div.container").style = "display: none";

setTimeout(function () {
  document.querySelector("div.page-loading-status").style = "display: none";

  document.querySelector("div.calculator").style = "display: block";
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

  var checkBox = document.getElementById("clock-switch");
  if (checkBox.checked == false) {
    if (h > 12) {
      h = h % 12;
      document.getElementById("display-time").innerHTML = `${h}:${m}:${s} PM`;
    } else {
      document.getElementById("display-time").innerHTML = `${h}:${m}:${s} AM`;
    }
  } else {
    document.getElementById("display-time").innerHTML = `${h}:${m}:${s}`;
  }

  t = setTimeout("startMyTime()", 500);
}

let calculator = new Calculator();

function hourformat24() {
  var checkBox = document.getElementById("clock-switch");
  if (checkBox.checked == false) {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    if (m < 10) {
      m = "0" + m;
    }
    if (s < 10) {
      s = "0" + s;
    }
    if (h > 12) {
      var hour = h % 12;
      document.getElementById("display-time").innerHTML = `${hour}:${m}:${s}`;
      t = setTimeout("startMyTime()", 500);
    }
  } else {
    text.style.display = "none";
  }
}

window.addEventListener("keypress", function (event) {
  var isNumber = isFinite(event.key);
  event.preventDefault();
  if (isNumber) {
    calculator.digitClicked(`${event.key}`);
  } else if (event.key == "Enter") {
    calculator.displayResults();
  } else if (
    event.key == "+" ||
    event.key == "-" ||
    event.key == "/" ||
    event.key == "*"
  ) {
    calculator.setCalculatorOperation(`${event.key}`);
  } else if (event.key == "C" || event.key == "c") {
    calculator.cls();
  }
});
