function travelling(x, y) {
    // x - speed of the first car
    // y - speed of the second car

    let distanceToSecondCarDeparture = x * 2;
    let nextThreeHours = (x - y) * 3;

    let result = distanceToSecondCarDeparture + nextThreeHours;

    console.log(Math.abs(result));
}

travelling(120, 120)