function negativeOrPositive(numsArr) {
    let result = [];

    for (let num of numsArr) {
        num < 0 ? result.unshift(num) : result.push(num);
    }

    console.log(result.join('\n '));
}

negativeOrPositive([7, -2, 8, 9])