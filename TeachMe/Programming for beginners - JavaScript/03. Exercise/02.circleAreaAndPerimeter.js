function circleAreaAndPerimeter(r) {
    let perimeter = 2 * Math.PI * r;
    let area = Math.PI * (r ** 2);

    console.log(perimeter.toFixed(2));
    console.log(area.toFixed(2));
}

circleAreaAndPerimeter(3);
circleAreaAndPerimeter(4);
