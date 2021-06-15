function simpleCalculator(a, b, operator) {
    let result = 0;

    switch (operator) {
        case 'multiply':
            result = a * b;
            break;
        case 'divide':
            result = a / b;
            break;
        case 'add':
            result = a + b;
            break;
        case 'subtract':
            result = a - b;
            break;
    }

    console.log(result);

}

simpleCalculator(5, 5, 'multiply')