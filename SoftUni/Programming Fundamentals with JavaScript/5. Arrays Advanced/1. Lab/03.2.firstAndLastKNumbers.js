function firstAndLast(arr) {
    let k = arr.shift();

    let forward = [];
    let backward = [];

    for (let i = 0; i < k; i++) {
        forward.push(arr[i])
    }
    for (let i = arr.length - 1; i >= arr.length - k; i--) {
        backward.unshift(arr[i]);
    }

    console.log(`${forward.join(' ')}${'\n'}${backward.join(' ')}`);

}

firstAndLast([3, 7, 8, 9, 10]);