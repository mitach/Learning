function processOddNums(nums) {
    let result = [];

    for (let num of nums) {
        if (nums.indexOf(num) % 2 == 1) {
            result.push(num * 2)
        }
    }
    result.reverse()
    console.log(result.join(' '));
}

processOddNums([10, 15, 20, 25])