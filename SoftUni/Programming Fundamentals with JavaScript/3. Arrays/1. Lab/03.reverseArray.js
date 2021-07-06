function reverseArray(n, input) {
    let result = ``;

    for (let i = n; i > 0; i--) {
        result += `${input[i - 1]} `;
    }

    console.log(result);
}

reverseArray(3, [10, 20, 30, 40, 50])