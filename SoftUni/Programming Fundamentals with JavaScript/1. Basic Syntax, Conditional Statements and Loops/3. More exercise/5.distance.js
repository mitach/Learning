function distance(x1, y1, x2, y2) {

    // let math = Math.pow(5, 2);
    // console.log(math);
    // let math2 = Math.sqrt(25);
    // console.log(math2);

    let result = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) * 1.0);

    console.log(result);
}

distance(2, 4, 5, 0)