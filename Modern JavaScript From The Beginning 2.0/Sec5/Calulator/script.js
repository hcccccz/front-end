function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'operaotor invalid';
    }
    return result;
}

const num1 = 3;
const num2 = 5;
const operator = '+';
console.log(calculator(num1, num2, operator));
