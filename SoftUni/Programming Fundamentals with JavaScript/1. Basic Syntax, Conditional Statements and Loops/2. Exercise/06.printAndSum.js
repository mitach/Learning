function printAndSum(a, b) {
    let sum = 0;
    let resultString = '';

    for (let i = a; i <= b; i++) {
        resultString += i + ' ';
        sum += i
    }
    console.log(resultString);
    console.log(`Sum: ${sum}`);
}
printAndSum(0, 26)