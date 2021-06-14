function cone(radius, height) {
    let volume = ((1 / 3) * (height * Math.PI * (radius ** 2))).toFixed(4);
    let area = Math.PI * (radius ** 2);
    let stena = Math.sqrt((radius * radius) + (height * height));
    let b = Math.PI * radius * stena;
    let s1 = (area + b).toFixed(4);

    console.log(`volume = ${volume}`);
    console.log(`area = ${s1}`);
}

cone(3, 5)