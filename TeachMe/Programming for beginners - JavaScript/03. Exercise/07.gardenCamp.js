function gardenCamp(season, type, childrensCount, days) {
    let price = 0;
    let sport = '';
    let discount = 0;
    let total;

    if (childrensCount > 9 && childrensCount < 20) {
        discount = 0.95;
    } else if (childrensCount > 19 && childrensCount < 50) {
        discount = 0.85;
    } else if (childrensCount > 49) {
        discount = 0.5;
    }

    switch (season) {
        case 'winter':
            if (type === 'mixed') {
                price = 10 * days;
                sport = 'Snowboard';
            } else {
                price = 9.60 * days;
                if (type === 'boys') {
                    sport = 'Box';
                } else {
                    sport = 'Gymnastics';
                }
            }

            break;
        case 'spring':
            if (type === 'mixed') {
                price = 9.50 * days;
                sport = 'Cycling';
            } else {
                price = 7.20 * days;
                if (type === 'boys') {
                    sport = 'Tennis';
                } else {
                    sport = 'Aerobics';
                }
            }

            break;
        case 'summer':
            if (type === 'mixed') {
                price = 20 * days;
                sport = 'Swimming';
            } else {
                price = 15 * days;
                if (type === 'boys') {
                    sport = 'Football';
                } else {
                    sport = 'Voleyball';
                }
            }

            break;
    }

    if (discount == 0) {
        total = price * childrensCount
    } else {
        total = price * childrensCount * discount
    }

    console.log(`${sport} ${(total).toFixed(2)} BGN`);
}

gardenCamp("spring", "girls", 20, 7)
gardenCamp("winter", "mixed", 9, 15)
gardenCamp("winter", "boys", 10, 15)
gardenCamp("spring", "mixed", 17, 14)
