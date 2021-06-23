function area(figure, a, b) {
    let area = 0;

    switch (figure) {
        case 'square':
            area = a * a;
            break;
        case 'rectangle':
            area = a * b;
            break;
        case 'triangle':
            area = (a * b) / 2;
            break;
        case 'circle':
            area = Math.PI * (a ** 2);
            break;
    }

    console.log(area.toFixed(2));
}

area("square", 5)
area("rectangle", 10, 3.5)
area("triangle", 4.5, 20)
area("circle", 10)
