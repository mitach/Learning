function exchange(amount) {
    let counter = 0;
    while (amount > 0) {
        if (amount >= 5) {
            amount -= 5;
            counter++;
        } else if (amount >= 2) {
            amount -= 2;
            counter++;
        } else if (amount >= 1) {
            amount -= 1;
            counter++;
        } else if (amount.toFixed(2) >= 0.5) {
            amount -= 0.5;
            counter++;
        } else if (amount.toFixed(2) >= 0.2) {
            amount -= 0.2;
            counter++;
        } else if (amount.toFixed(2) >= 0.1) {
            amount -= 0.1;
            counter++;
        } else if (amount.toFixed(2) >= 0.05) {
            amount -= 0.5;
            counter++;
        } else if (amount.toFixed(2) >= 0.02) {
            amount -= 0.02;
            counter++;
        } else if (amount.toFixed(2) >= 0.01) {
            amount -= 0.01;
            counter++;
        }
    }

    console.log(counter);
}

exchange(1.23);
