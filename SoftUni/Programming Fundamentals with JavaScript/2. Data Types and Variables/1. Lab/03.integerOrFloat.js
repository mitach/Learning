function integerOrFloat(a, b, c) {
    let sum = a + b + c;

    if (Number.isInteger(sum)) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }

}

integerOrFloat(100, 200, 303);