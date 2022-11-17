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
    this.calMem.push(parseInt(this.input));
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
        }
      }
    }

    document.getElementById('screen').value = this.calMem[this.calMem.length - 1];
    this.result = this.calMem[this.calMem.length - 1];
    this.calMem = [];
    this.operations = [];
    this.input = '';
  }

  getInput() {
    this.input = parseInt(document.getElementById('screen').value);
  }

  setCalculatorOperation(op) {
    this.calMem.push(parseInt(this.input));
    this.operations.push(op);
    document.getElementById('screen').value = '';
    document.getElementById('screen').focus();
  }

  cls() {
    document.getElementById('screen').value = '';
    this.calMem = [];
    this.operations = [];
    this.input = '';
    this.result = 0;
  }

}