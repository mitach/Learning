function addAndSubtract(input) {
    let originalSum = 0;
    let newSum = 0;

    for (let i = 0; i < input.length; i++) {
        originalSum += input[i];
    }

    for (let i = 0; i < input.length; i++) {
        if (input[i] % 2 === 0) {
            input[i] += i;
        } else {
            input[i] -= i;
        }
    }

    for (let i = 0; i < input.length; i++) {
        newSum += input[i];
    }

    console.log(input);
    console.log(originalSum + '\n' + newSum);
}

addAndSubtract([5, 15, 23, 56, 35])