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

  multiply(firstnum, secondnum){
    return firstnum * secondnum;
  }

  divide(firstnum, secondnum){
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
            this.calMem[i + 1] = this.multiply(this.calMem[i], this.calMem[i +1]);
            break;
          case '/':
          this.calMem[i + 1] = this.divide(this.calMem[i], this.calMem[i +1]);
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

  getInput(num) {
   if(num){
    if(num == 0){
      this.input = parseFloat(document.getElementById('screen').value += String(num));
    }
    else{
      this.input = parseFloat(document.getElementById('screen').value += num);
    }
   }
   else{
    this.input = parseFloat(document.getElementById('screen').value);
   }
  
  }
  
  setCalculatorOperation(op) {
    this.calMem.push(parseFloat(this.input));
    this.operations.push(op);
    document.getElementById('screen').value = '';    
    // document.getElementById('screen').focus();
  }

  cls() { 
    document.getElementById('screen').value = '';
    this.calMem = [];
    this.operations = [];  
    this.input = '';
    this.result = 0;
  }

}

class formatHours{
  constructor(_hours){
    this.Hrs = _hours;
    this.ampm = _hours;
  }

  format12(){
    if(this.Hrs >= 12){
      if(this.Hrs == 12){
        return this.Hrs;
      }
      else{
        return this.Hrs = this.Hrs - 12;
      }
    }else{
      if(this.Hrs == 0){
        return this.Hrs + 12;
      }else{
        return this.Hrs;
      }
    }
    // return this.Hrs - 12;
  }

  amPm(){
    if(this.ampm > 12){
      return this.ampm = "P.M";
    }else if(this.ampm < 12 ){
      return this.ampm = `A.M`;
    }
  }
}
