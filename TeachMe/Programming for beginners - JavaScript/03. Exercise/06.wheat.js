function wheat(area, ratio, neededFlour, workers) {
    let wheat = area * ratio * 0.4;
    let flour = wheat / 2.5;

    if (flour >= neededFlour) {
        console.log(`Good harvest this year! Total flour: ${Math.floor(flour)} kilos.`);
        console.log(`${Math.ceil(flour - neededFlour)} kilos left -> ${Math.ceil((flour - neededFlour) / workers)} kilos per person.`);
    } else {
        console.log(`It will be tough winter! More ${Math.floor(neededFlour - flour)} kilos flour needed.`);
    }
}

wheat(650, 2, 175, 3)
wheat(1020, 1.5, 425, 4)
