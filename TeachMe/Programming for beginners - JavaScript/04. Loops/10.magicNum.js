function magicNum(a, b, magicNum) {
    let sum = 0;
    let count = 0;
    let combinations = 0;

    for (let i = a; i <= b; i++) {
        for (let j = a; j <= b; j++) {
            sum = i + j;
            count++;

            if (sum == magicNum) {
                console.log(`Combination ${count} - (${i} + ${j} = ${sum})`);
                return;
            }
        }
    }

    if (combinations == 0) {
        console.log(`${count} combinations - neither equals ${magicNum}`);
    }
}

magicNum(1, 10, 5);
magicNum(23, 24, 20);
magicNum(1, 2, 3);