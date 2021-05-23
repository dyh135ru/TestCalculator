/* test('Calculate for me', () => {
    const num1 = 6;
    const num2 = 2;
    expect(num1+num2).toBe(8);
    expect(num1-num2).toBe(4);
    expect(num1*num2).toBe(12);
    expect(num1/num2).toBe(3);
}); */

const { test } = require("@jest/globals")

describe("Calculate for me", () => {
    test("Add for me", () => {
        const num1 = 6;
        const num2 = 2;
        expect(num1+num2).toBe(8);
    });
    test("Subtract for me", () => {
        const num1 = 6;
        const num2 = 2;
        expect(num1-num2).toBe(4);
    });
    test("Multiply for me", () => {
        const num1 = 6;
        const num2 = 2;
        expect(num1*num2).toBe(12);
    });
    test("Divide for me", () => {
        const num1 = 6;
        const num2 = 2;
        expect(num1/num2).toBe(3);
    });
});