function smallestTwoNumbers(numbers) {
    numbers.sort((a, b) => a - b);

    let smallestTwoNumbers = numbers.slice(0, 2);

    let joined = smallestTwoNumbers.join(' ')

    console.log(joined);
}

smallestTwoNumbers([30, 15, 50, 5])