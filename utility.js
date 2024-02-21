function printName(firstName, lastName) {
    console.log(`Hi, my name is ${firstName} ${lastName} and I study at Georgian@ILAC.`);
}

function convertMeasurement(value, fromUnit, toUnit) {
    const conversionFactors = {
        inches: 39.3701, 
        meters: 1, 
    };


   
    if (conversionFactors[fromUnit] && conversionFactors[toUnit]) {
        return value * conversionFactors[fromUnit] / conversionFactors[toUnit];
    } else {
        return "Invalid units provided for conversion.";
    }
}


function doMathOperation(...values) {
    const operator = values.pop();
    
    if (['+', '-', '*', '/'].includes(operator)) {
        switch(operator) {
            case '+':
                return values.reduce((acc, val) => acc + val, 0);
            case '-':
                return values.reduce((acc, val) => acc - val);
            case '*':
                return values.reduce((acc, val) => acc * val, 1);
            case '/':
                return values.reduce((acc, val) => acc / val);
        }
    } else {
        return "Invalid operator provided for math operation.";
    }
}

function generateRandomPassword(length = 8, options = {}) {
    const defaultCharset = {
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        numbers: '0123456789',
        symbols: '!@#$%^&*()-=_+[]{}|;:,.<>?'
    };

    const mergedOptions = { ...defaultCharset, ...options };

    let charset = '';
    for (let key in mergedOptions) {
        if (mergedOptions[key]) {
            charset += mergedOptions[key];
        }
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    return password;
}

module.exports = {
    printName,
    convertMeasurement,
    doMathOperation,
    generateRandomPassword
};
