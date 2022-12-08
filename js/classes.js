class Calculator {
  constructor() {       
    this.result = 0;
    this.calMem = [];
    this.operations = [];    
    this.input = '';
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
    this.calMem.push(parseFloat(this.input));
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
    this.calMem = [];
    this.operations = [];  
    this.input = '';
  }

  getInput() {
    this.input = parseFloat(document.getElementById('screen').value);
  }
  
  setCalculatorOperation(op) {
    this.calMem.push(parseFloat(this.input));
    this.operations.push(op);
    document.getElementById('screen').value = '';    
    document.getElementById('screen').focus();
    this.input = '';
  }

  cls() { 
    document.getElementById('screen').value = '';
    this.calMem = [];
    this.operations = [];  
    this.input = '';
    this.result = 0;
    console.log(this.input);
  }

  numberInput(num) {
    this.input = this.input + num;
    document.getElementById('screen').value = `${this.input}`;
  }

  keyPress(event) {
    console.log(event);
    const key = event.key;
    console.log(key);
    switch (key) {
      case 'c':
      case 'C':
      case 'Escape':
      case 'Delete':
        this.cls();
        break;
      
      case 'Enter':
      case '=':
        this.displayResults();
        break;

      case '/':
      case '*':
      case '-':
      case '+':
        this.setCalculatorOperation(key);
        break;
    }
  }

}
