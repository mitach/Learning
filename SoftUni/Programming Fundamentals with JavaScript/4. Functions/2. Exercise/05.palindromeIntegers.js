function palindromeIntegers(listOfNumbers) {

    for (let number of listOfNumbers) {
        let numberAsStr = number.toString();
        let reversedNumberAsStr = numberAsStr.split('').reverse().join('')

        if (numberAsStr == reversedNumberAsStr) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}

palindromeIntegers([123, 323, 421, 121])