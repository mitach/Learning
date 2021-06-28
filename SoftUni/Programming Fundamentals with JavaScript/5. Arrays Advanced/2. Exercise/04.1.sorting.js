function sorting(input) {
    let newArr = [];
    let numbersLength = input.length;

    input.sort((a, b) => a - b);

    for (let i = 0; i < numbersLength; i++) {
        let number;

        if (i % 2 == 0) {
            number = Math.max(...input);
        } else {
            number = Math.min(...input);
        }

        newArr.push(number);
        input.splice(input.indexOf(number), 1)
    }

    console.log(newArr.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);