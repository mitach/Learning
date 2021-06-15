function addAndSubtract(a, b, c) {
    let sumFromAdding = add(a, b);
    let generalSum = subtract(sumFromAdding, c);

    console.log(generalSum);

    function add(a, b) {
        return a + b;
    }

    function subtract(sum, c) {
        return sum - c;
    }
}

addAndSubtract(23, 6, 10)