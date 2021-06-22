function folkloreArena(l, w, a) {
    let areaInSm = (l * 100) * (w * 100);
    let benchPlace = (a * 100) * (a * 100);
    let wardrobePalce = areaInSm / 10;

    let freeSpaceInSm = areaInSm - (benchPlace + wardrobePalce);
    let availableDancers = freeSpaceInSm / (40 + 7000);

    console.log(Math.floor(availableDancers));
}

folkloreArena(50, 25, 2);
folkloreArena(100, 30.30, 12.5);
folkloreArena(10, 10, 2);
