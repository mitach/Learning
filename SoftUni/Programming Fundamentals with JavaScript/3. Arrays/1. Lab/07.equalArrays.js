function equalArrays(arr1, arr2) {
    let areIdentical = true;

    for (let i = 0; i < arr1.length; i++) {
        let numOne = Number(arr1[i]);
        let numTwo = Number(arr2[i]);

        if (numOne !== numTwo) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areIdentical = false;
        }
    }

    if (areIdentical) {
        let sum = 0;
        for (let num of arr1) {
            sum += Number(num);
        }
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArrays([10, 20, 30], [10, 20, 30])