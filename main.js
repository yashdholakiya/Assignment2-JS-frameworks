const { printName, convertMeasurement, doMathOperation, generateRandomPassword } = require('./utility');

printName("Jay", "Vaghasiya");
printName("Yashkumar", "Dholakiya");
printName("Himanshi", "Jadiya");

console.log(convertMeasurement(10, "inches", "meters")); 
console.log(doMathOperation(10, 5, '/'));
console.log(generateRandomPassword());
