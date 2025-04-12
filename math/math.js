const fs = require('fs');

// Helper function 
const saveToJson = (operation) => {
    let results = [];
    try {
        results = JSON.parse(fs.readFileSync('math.json'));
    } catch {
        results = [];
    }
    results.push(operation);
    fs.writeFileSync('math.json', JSON.stringify(results, null, 2));
}

const add = (a,b) => {
    const result = a + b;
    saveToJson(`${a} + ${b} = ${result}`);
    return result;
}

const subtract = (a,b) => {
    const result = a - b;
    saveToJson(`${a} - ${b} = ${result}`);
    return result;
}

const multiply = (a,b) => {
    const result = a * b;
    saveToJson(`${a} * ${b} = ${result}`);
    return result;
}

const divide = (a,b) => {
    const result = a / b;
    saveToJson(`${a} / ${b} = ${result}`);
    return result;
}

const square = (a) => {
    const result = a * a;
    saveToJson(`${a}² = ${result}`);
    return result;
}

const max = (a,b) => {
    const result = Math.max(a,b);
    saveToJson(`max(${a}, ${b}) = ${result}`);
    return result;
}

module.exports = {add, subtract, multiply, divide, square, max}