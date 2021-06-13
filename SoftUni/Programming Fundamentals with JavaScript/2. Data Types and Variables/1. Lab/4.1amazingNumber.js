function amazingNumber(number) {
    let numberAsString = number.toString();
    let sum = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        sum += Number(numberAsString[i])
    }

    if (sum.toString().includes('9')) {
        console.log(`${number} Amazing? True`);
    } else {
        console.log(`${number} Amazing? False`);
    }

}

amazingNumber(12133);