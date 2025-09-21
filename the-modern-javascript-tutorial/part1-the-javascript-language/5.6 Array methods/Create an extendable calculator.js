function Calculator() {
  this.funcByOperator = {
    '+': (a, b) => a + b,
  };

  this.addMethod = function (opeartor, func) {
    this.funcByOperator[opeartor] = func;
  };

  this.calculate = function (str) {
    const split = str.split(' ');

    const operand1 = Number(split[0]);
    const operand2 = Number(split[2]);
    const operator = split[1];

    return this.funcByOperator[operator](operand1, operand2);
  };
}

const calc = new Calculator();
console.log(calc.calculate('3 + 7'));

const powerCalc = new Calculator();
powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('**', (a, b) => a ** b);

console.log(powerCalc.calculate('3 * 4'));
console.log(powerCalc.calculate('3 / 4'));
console.log(powerCalc.calculate('3 ** 4'));
