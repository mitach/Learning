function equal(input) {



    for (let i = 0; i < input.length; i++) {
        let counter = 0
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] === input[i + 1][j]) {
                counter = counter + 1;
            }
        }
        if (!counter == 0) {
            console.log(counter);
        }

    }


}

equal([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '3', '2'],
    ['9', '8', '7', '5', '4']
]);