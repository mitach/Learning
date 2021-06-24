function sea(days, room, rating) {
    let totalPrice = 0;

    switch (room) {
        case 'single room':
            totalPrice = (days - 1) * 25;
            break;
        case 'apartment':
            totalPrice = (days - 1) * 50;

            if (days < 10) {
                totalPrice *= 0.7;
            } else if (days >= 10 && days <= 15) {
                totalPrice *= 0.65;
            } else if (days > 15) {
                totalPrice *= 0.5;
            }

            break;
        case 'president apartment':
            totalPrice = (days - 1) * 100;

            if (days < 10) {
                totalPrice *= 0.9;
            } else if (days >= 10 && days <= 15) {
                totalPrice *= 0.85;
            } else if (days > 15) {
                totalPrice *= 0.8;
            }

            break;
    }

    if (rating == 'positive') {
        totalPrice = totalPrice + (totalPrice * 0.25);
    } else if (rating == 'negative') {
        totalPrice = totalPrice - (totalPrice * 0.1)
    }

    console.log(totalPrice.toFixed(2));

}

sea(11, "apartment", "positive");
sea(30, "president apartment", "negative");
sea(12, "single room", "positive");
sea(2, "apartment", "positive");
