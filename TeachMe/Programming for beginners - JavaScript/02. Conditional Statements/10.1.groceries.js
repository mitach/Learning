function groceries(product, city, quantity) {
    let sum = 0;

    if (city == 'Sofia') {
        switch (product) {
            case 'coffee':
                sum = 0.50 * quantity;
                break;
            case 'water':
                sum = 0.80 * quantity;
                break;
            case 'juice':
                sum = 1.20 * quantity;
                break;
            case 'sweets':
                sum = 1.45 * quantity
                break;
            case 'chips':
                sum = 1.60 * quantity;
                break;
        }
    } else if (city == 'Plovdiv') {
        switch (product) {
            case 'coffee':
                sum = 0.40 * quantity;
                break;
            case 'water':
                sum = 0.70 * quantity;
                break;
            case 'juice':
                sum = 1.15 * quantity;
                break;
            case 'sweets':
                sum = 1.30 * quantity
                break;
            case 'chips':
                sum = 1.50 * quantity;
                break;
        }
    } else if (city == 'Varna') {
        switch (product) {
            case 'coffee':
                sum = 0.45 * quantity;
                break;
            case 'water':
                sum = 0.70 * quantity;
                break;
            case 'juice':
                sum = 1.10 * quantity;
                break;
            case 'sweets':
                sum = 1.35 * quantity
                break;
            case 'chips':
                sum = 1.55 * quantity;
                break;
        }
    }

    console.log(sum.toFixed(2));
}

groceries("coffee", "Varna", 2);
groceries("chips", "Plovdiv", 1);
groceries("juice", "Sofia", 6);
