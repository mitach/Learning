function amazingNumber(num) {
    //find the sum of the num
    let numAsStr = num.toString();
    let sum = 0;

    for (let i = 0; i < numAsStr.length; i++) {
        sum += Number(numAsStr[i])
    }

    //check if the sum contains 9
    let sumAsStr = sum.toString();
    let hasNine = false;

    for (let i = 0; i < sumAsStr.length; i++) {
        if (sumAsStr[i] == '9') {
            hasNine = true;
            break;
        }
    }

    //print result
    console.log(`${num} Amazing? ${hasNine ? 'True' : 'False'}`)
}

amazingNumber(1233);
amazingNumber(999);
amazingNumber(333);