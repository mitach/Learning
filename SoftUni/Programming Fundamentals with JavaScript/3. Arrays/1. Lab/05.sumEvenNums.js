function sumEvenNums(input) {
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        let currNum = Number(input[i]);

        if (currNum % 2 == 0) {
            sum += currNum;
        }
    }

    console.log(sum);
}

sumEvenNums(['1', '2', '3', '4', '5', '6']);
sumEvenNums(['1', '3', '5']);