function square(n) {
    let result = '';
    for (let rows = n; rows > 0; rows--) {
        for (let col = n; col > 0; col--) {
            result += `* `
        }

        console.log(result);
        result = '';
    }
}

square(1);
square(2);
square(3);
square(4);
square(5);
