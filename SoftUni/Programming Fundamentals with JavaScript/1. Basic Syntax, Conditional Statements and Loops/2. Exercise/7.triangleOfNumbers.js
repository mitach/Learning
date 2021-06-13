function triangleOfNumbers(num) {
    let result = '';

    for (let i = 1; i <= num; i++) {
        result = '';

        for (let j = 1; j <= i; j++) {
            result += ` ${i}`
        }

        console.log(result);
    }

}

triangleOfNumbers(7);