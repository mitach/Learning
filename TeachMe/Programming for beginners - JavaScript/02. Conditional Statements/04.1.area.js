function area(figure, a, b) {
    let area = 0;

    if (figure == "square") {
        area = a * a;
    } else if (figure == "rectangle") {
        area = a * b;
    } else if (figure == "triangle") {
        area = (a * b) / 2;
    } else if (figure == "circle") {
        area = Math.PI * (a ** 2);
    }

    console.log(area.toFixed(2));
}

area("square", 5)
area("rectangle", 10, 3.5)
area("triangle", 4.5, 20)
area("circle", 10)
