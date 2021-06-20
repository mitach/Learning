function sumFirstAndLast(numsAsStringsArr) {
    //initiation
    let first = Number(numsAsStringsArr.shift());
    let last = Number(numsAsStringsArr.pop());
    //result
    return first + last;
}