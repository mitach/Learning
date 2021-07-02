function bombNumbers(numbers, bombPower) {
    let bomb = bombPower[0];
    let power = bombPower[1];

    let sum = 0;

    while (numbers.includes(bomb)) {
        let index = numbers.indexOf(bomb);
        let start = index - power;
        if (start >= 0) {
            numbers.splice(start, ((power * 2) + 1))
        } else {
            numbers.splice(0, ((power * 2) + 1))
        }
    }

    for (let num of numbers) {
        sum += num;
    }

    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);