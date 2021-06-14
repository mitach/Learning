function triangleArea(a, b, c) {
    //calculate the triangle area using its three sides
    let semiPerimeter = (a + b + c) / 2;
    let area = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c))

    console.log(area);
}

triangleArea(2, 3.5, 4)