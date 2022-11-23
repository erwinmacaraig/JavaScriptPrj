class Calculator {
  constructor() {
    this.result = 0;
    this.calMem = [];
    this.operations = [];
    this.input = 0;
    this.nums = []
    this.count = 0
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
    this.calMem.push(parseInt(this.input));
    this.showValue(this.input)
    this.result = 0;

    for (let i = 0; i < this.calMem.length - 1; i++) {
      if (this.operations[i]) {
        switch (this.operations[i]) {
          case '+':
            this.calMem[i + 1] = this.add(this.calMem[i], this.calMem[i + 1]);
            break;
          case '-':
            this.calMem[i + 1] = this.subtract(this.calMem[i], this.calMem[i + 1]);
            break;
          case '*':
            this.calMem[i + 1] = this.multiply(this.calMem[i], this.calMem[i + 1]);
            break;
          case '/':
            this.calMem[i + 1] = this.divide(this.calMem[i], this.calMem[i + 1]);
            break;
        }
      }
    }
    document.getElementById('screen').value = this.calMem[this.calMem.length - 1];
    this.result = this.calMem[this.calMem.length - 1];
    this.showValue(`= ${this.result}`)
    this.calMem = [];
    this.operations = [];
    this.input = '';
    this.nums = []
    setTimeout(() => {
      document.getElementById('results').innerHTML = ''
      this.clearScreen()
    }, 3000);
  }
  getInput(e) {
    this.input = parseInt(e.replace(/\D/g, ''));
  }
  getOnclickInput(e) {
    this.nums.push(e)
    this.getInput(this.nums.join(''))
  }

  setCalculatorOperation(op) {
    this.nums = []
    this.calMem.push(parseInt(this.input));
    this.operations.push(op);
    this.clearScreen()
    this.showValue(this.input)
    this.showValue(op)
  }
  cls() {
    document.getElementById('screen').value = '';
    this.calMem = [];
    this.operations = [];
    this.input = '';
    this.result = 0;
    document.getElementById('results').innerHTML = ''
  }
  clearScreen() {
    document.getElementById('screen').value = '';
    document.getElementById('screen').focus();
  }

  showValue(value) {
    console.log(value)
    document.getElementById('results').appendChild(document.createTextNode(value + ' '))
  }

  bindKey(e) {
    if (e.target.value !== '') {
      switch (e.key) {
        case '+':
          calculator.setCalculatorOperation('+')
          calculator.clearScreen()
          break
        case '-':
          calculator.setCalculatorOperation('-')
          calculator.clearScreen()
          break
        case '*':
          calculator.setCalculatorOperation('*')
          calculator.clearScreen()
          break
        case '/':
          calculator.setCalculatorOperation('/')
          calculator.clearScreen()
          break
        case 'Enter':
          calculator.displayResults()
          break
        case 'Delete':
          calculator.clearScreen()
          break
      }
    }
  }
}