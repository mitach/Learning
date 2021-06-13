function rounding(x, y) {
    if (y > 15) {
        y = 15
    }
    let num = parseFloat(x.toFixed(y))
    console.log(num);
}

rounding(3.5, 5)