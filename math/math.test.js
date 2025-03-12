const { describe } = require("node:test");
const { add, subtract, multiply, divide, square, max } = require("./math")

describe("testing the add function", () => {
    test("should add a and b together", () => {
        expect(add(1,2)).toBe(3)   
    })
})

describe("testing the subtract function", () => {
    test("should subtract a and b from each other", () => {
        expect(subtract(5,3)).toBe(2)   
    })
})

describe("testing the multiply function", () => {
    test("should multiply a and b together", () => {
        expect(multiply(2, 3)).toBe(6)
    })
})

describe("testing the divide function", () => {
    test("should divide a by b", () => {
        expect(divide(10, 2)).toBe(5)
    })
})

describe("testing the square function", () => {
    test("should square a number", () => {
        expect(square(4)).toBe(16)
    })
})

describe("testing the max function", () => {
    test("should return the bigger of two numbers", () => {
        expect(max(3, 9)).toBe(9)
    })
})