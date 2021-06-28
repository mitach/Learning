function sorting(input) {
    let sortedNumbers = [];

    input.sort((a, b) => a - b)

    while (input.length !== 0) {
        sortedNumbers.push(input[input.length - 1]);
        input.pop();
        sortedNumbers.push(input[0]);
        input.shift();
    }

    console.log(sortedNumbers.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);