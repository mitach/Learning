function oddAndEvenSum(number) {
    let numberAsStr = number.toString();
    let oddSum = 0;
    let evenSum = 0;

    for (let digit of numberAsStr) {
        if (Number(digit) % 2 == 0) {
            evenSum += Number(digit)
        } else {
            oddSum += Number(digit)
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(100345);