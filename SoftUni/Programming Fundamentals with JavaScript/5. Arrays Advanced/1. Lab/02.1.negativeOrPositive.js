function negativeOrPositive(numsArr) {
    //variable to store result
    let result = [];

    //iterate through all input elements (use loop) 
    for (let num of numsArr) {
        let current = numsArr[num]

        if (num < 0) { //- negative number -> prepend to result (.unshift())
            result.unshift(num)
        } else { //- otherwise - apend to result (.push())
            result.push(num)
        }


    }

    //iterate through all result elements (use loop)
    for (let num of result) {
        console.log(num);
    }

}

negativeOrPositive([7, -2, 8, 9])