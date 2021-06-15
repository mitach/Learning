function signCheck(a, b, c) {

    if ((a > 0 && b > 0) || (a < 0 && b < 0)) {
        if (c > 0) {
            console.log('Positive');
        } else {
            console.log('Negative');
        }
    } else if ((b > 0 && c > 0) || (b < 0 && c < 0)) {
        if (a > 0) {
            console.log('Positive');
        } else {
            console.log('Negative');
        }
    } else if ((a > 0 && c > 0) || (a < 0 && c < 0)) {
        if (b > 0) {
            console.log('Positive');
        } else {
            console.log('Negative');
        }
    }

}

signCheck(5, 11, -15)