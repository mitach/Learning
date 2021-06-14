function division(input) {
    let number = input;
    let divisibleNum = 0;

    if (number % 2 == 0) {
        divisibleNum = 2;
    }
    if (number % 3 == 0) {
        divisibleNum = 3;
    }
    if (number % 6 == 0) {
        divisibleNum = 6;
    }
    if (number % 7 == 0) {
        divisibleNum = 7;
    }
    if (number % 10 == 0) {
        divisibleNum = 10;
    }


    if (divisibleNum == 0) {
        console.log('Not divisible');
    } else {
        console.log(`The number is divisible by ${divisibleNum}`);
    }
}

division(3)