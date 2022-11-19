document.querySelector("div.calculator").style = "display: none";
document.querySelector("div.container").style = "display: none";

setTimeout(function () {
  document.querySelector("div.page-loading-status").style = "display: none";

  document.querySelector("div.calculator").style = "display: block";
  document.querySelector("div.container").style = "display: block";
}, 2000);

let calculator = new Calculator();
let clock = new Clock({
  template: "h:m:s x",
});
clock.start();

window.addEventListener("keypress", function (event) {
  var isNumber = isFinite(event.key);
  event.preventDefault();
  if (isNumber) {
    calculator.digitClicked(`${event.key}`);
  } else if (event.key == "Enter" || event.key == "=") {
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
