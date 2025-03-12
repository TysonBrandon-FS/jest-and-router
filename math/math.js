const add = (a,b) => {
    return a + b;
}

const subtract = (a,b) => {
    return a - b;
}

const multiply = (a,b) => {
    return a * b;
}

const divide = (a,b) => {
    return a / b;
}

const square = (a) => {
    return a * a
}

const max = (a,b) => {
    return Math.max(a,b)
}


module.exports = {add, subtract, multiply, divide, square, max}