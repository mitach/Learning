function calculator(firstNum, secondNum, operator) {
    let sum = 0;

    if (operator == 'add') {
        sum = firstNum + secondNum;
    } else if (operator == 'subtract') {
        sum = firstNum - secondNum;
    } else if (operator == 'divide') {
        sum = firstNum / secondNum;
    } else if (operator == 'multiply') {
        sum = firstNum * secondNum;
    }

    console.log(sum.toFixed(2));
}

calculator(5, 5, "add");
calculator(10, 12, "subtract");
calculator(9, 3, "divide");
calculator(5, 2, "divide");
calculator(3.1, 0.1, "multiply");
