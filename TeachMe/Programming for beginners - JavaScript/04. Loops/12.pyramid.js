function pyramid(num) {
    let result = ``;
    let curr = 1;

    for (let rows = 1; rows <= num; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            result += `${curr} `
            curr++;
            if (curr > num) {
                break;
            }
        }

        console.log(result);
        result = ``;

        if (curr > num) {
            break;
        }
    }

}

pyramid(7)