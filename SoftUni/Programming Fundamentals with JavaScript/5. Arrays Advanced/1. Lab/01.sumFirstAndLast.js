function sumFirstAndLast(numsAsStringsArr) {
    let first = Number(numsAsStringsArr.shift());
    let last = Number(numsAsStringsArr.pop());

    return first + last;
}