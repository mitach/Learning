function calculator(firstNum, secondNum, operator) {
    let sum = 0;

    switch (operator) {
        case 'add':
            sum = firstNum + secondNum;
            break;
        case 'subtract':
            sum = firstNum - secondNum;
            break;
        case 'divide':
            sum = firstNum / secondNum;
            break;
        case 'multiply':
            sum = firstNum * secondNum;
            break;
    }

    console.log(sum.toFixed(2));
}

calculator(5, 5, "add");
calculator(10, 12, "subtract");
calculator(9, 3, "divide");
calculator(5, 2, "divide");
calculator(3.1, 0.1, "multiply");
