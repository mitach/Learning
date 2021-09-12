function diamond(n) {
    for (let i = 1; i <= n; i++) {
        let whiteSpaces = ' '.repeat(n - i);
        let result = '* '.repeat(i);
        console.log(whiteSpaces + result);
    }

    for (let j = n - 1; j > 0; j--) {
        let whiteSpaces = ' '.repeat(n - j);
        let result = '* '.repeat(j);
        console.log(whiteSpaces + result);
    }
}

diamond(5);