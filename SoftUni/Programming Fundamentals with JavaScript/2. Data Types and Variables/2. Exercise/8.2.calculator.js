function calculator(firstNum, operator, secondNum) {
    console.log(eval(firstNum + operator + secondNum).toFixed(2));
}

calculator(10, '+', 5)