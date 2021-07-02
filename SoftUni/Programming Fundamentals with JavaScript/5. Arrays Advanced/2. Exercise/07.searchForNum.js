function searchForNum(nums, commands) {
    let takeNums = commands[0];
    let deleteNums = commands[1];
    let findNum = commands[2];

    let newArr = [];

    let count = 0;

    for (let i = 0; i < takeNums; i++) {
        newArr.push(nums.shift());
    }

    for (let i = 0; i < deleteNums; i++) {
        newArr.shift()
    }

    while (newArr.includes(findNum)) {
        let start = newArr.indexOf(findNum);
        newArr.splice(start, 1);
        count++;
    }

    console.log(`Number ${findNum} occurs ${count} times.`);
}

searchForNum([5, 2, 3, 4, 1, 6], [5, 2, 3]);