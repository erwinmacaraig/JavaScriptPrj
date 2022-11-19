class Calculator {
  constructor() {
    this.result = 0;
    this.calMem = [];
    this.operations = [];
    this.input = 0;
  }
  add(firstnum, secondnum) {
    return firstnum + secondnum;
  }

  subtract(firstnum, secondnum) {
    return firstnum - secondnum;
  }

  multiply(firstnum, secondnum) {
    return firstnum * secondnum;
  }

  divide(firstnum, secondnum) {
    return firstnum / secondnum;
  }

  getOperationResults() {
    return this.result;
  }

  displayResults() {
    this.getInput();

    this.calMem.push(parseInt(this.input));
    this.result = 0;
    for (let i = 0; i < this.calMem.length - 1; i++) {
      if (this.operations[i]) {
        switch (this.operations[i]) {
          case "+":
            this.calMem[i + 1] = this.add(this.calMem[i], this.calMem[i + 1]);
            break;
          case "-":
            this.calMem[i + 1] = this.subtract(
              this.calMem[i],
              this.calMem[i + 1]
            );
            break;
          case "*":
            this.calMem[i + 1] = this.multiply(
              this.calMem[i],
              this.calMem[i + 1]
            );
            break;
          case "/":
            this.calMem[i + 1] = this.divide(
              this.calMem[i],
              this.calMem[i + 1]
            );
            break;
        }
      }
    }

    document.getElementById("screen").value =
      this.calMem[this.calMem.length - 1];
    console.log(this.calMem[this.calMem.length - 1]);
    this.result = this.calMem[this.calMem.length - 1];
    this.calMem = [];
    this.operations = [];
    this.input = "";
  }

  getInput() {
    this.input = parseInt(document.getElementById("screen").value);
  }

  setCalculatorOperation(op) {
    this.getInput();
    this.calMem.push(parseInt(this.input));
    this.operations.push(op);
    document.getElementById("screen").value = "";
  }

  digitClicked(no) {
    console.log(no);
    document.getElementById("screen").value += no;
  }

  cls() {
    document.getElementById("screen").value = "";
    this.calMem = [];
    this.operations = [];
    this.input = "";
    this.result = 0;
  }
}

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  run() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let toggle = document.getElementById("clock-switch");
    let display = document.getElementById("display-time");
    if (toggle.checked == false) {
      if (hours > 12) {
        hours = hours % 12;
        let output = this.template
          .replace("h", hours)
          .replace("m", mins)
          .replace("s", secs)
          .replace("x", "PM");
        display.innerHTML = output;
      } else {
        let output = this.template
          .replace("h", hours)
          .replace("m", mins)
          .replace("s", secs)
          .replace("x", "AM");
        display.innerHTML = output;
      }
    } else {
      let output = this.template
        .replace("h", hours)
        .replace("m", mins)
        .replace("s", secs)
        .replace("x", "");
      display.innerHTML = output;
    }
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.run();
    this.timer = setInterval(() => this.run(), 500);
  }
}
