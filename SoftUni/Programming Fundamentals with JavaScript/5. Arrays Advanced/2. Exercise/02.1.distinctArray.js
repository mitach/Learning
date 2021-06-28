function distinctArray(input) {

    let newArr = []
    newArr.push(input[0]);

    for (let i = 0; i < input.length; i++) {
        if (!(newArr.includes(input[i]))) {
            newArr.push(input[i])
        }
    }

    console.log(newArr.join(' '));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);