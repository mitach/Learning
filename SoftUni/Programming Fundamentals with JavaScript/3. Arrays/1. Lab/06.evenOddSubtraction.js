function evenOddSubtraction(input) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < input.length; i++) {
        let num = Number(input[i]);

        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    let subtraction = evenSum - oddSum;

    console.log(subtraction);
}

evenOddSubtraction([1, 2, 3, 4, 5, 6])