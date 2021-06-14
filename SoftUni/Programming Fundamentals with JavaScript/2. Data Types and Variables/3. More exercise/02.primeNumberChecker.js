function primeNumberChecker(number) {
    let isPrime = true;

    if (number !== 2 && number % 2 == 0) {
        isPrime = false;
    } else {
        for (let i = 2; i <= number / 2; i++) {
            if (number % i == 0) {
                isPrime = false;
                console.log(false);
                break;
            }
        }
    }

    console.log(isPrime);


}

primeNumberChecker(7);
primeNumberChecker(8);