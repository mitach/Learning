function vegetableMarket(product, day, quantity) {
    let sum = 0;

    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            if (product == 'tomato') {
                sum = 2.50 * quantity;
            } else if (product == 'onion') {
                sum = 1.20 * quantity;
            } else if (product == 'lettuce') {
                sum = 0.85 * quantity;
            } else if (product == 'cucumber') {
                sum = 1.45 * quantity;
            } else if (product == 'pepper') {
                sum = 5.50 * quantity;
            } else {
                console.log('error');
            }
            break;
        case 'Saturday':
        case 'Sunday':
            if (product == 'tomato') {
                sum = 2.80 * quantity;
            } else if (product == 'onion') {
                sum = 1.30 * quantity;
            } else if (product == 'lettuce') {
                sum = 0.85 * quantity;
            } else if (product == 'cucumber') {
                sum = 1.75 * quantity;
            } else if (product == 'pepper') {
                sum = 3.50 * quantity;
            } else {
                console.log('error');
            }
            break;
        default:
            console.log('error');
            break;
    }


    // Тъпа грешка отдолу, но не ми се преправяше кода нагоре, затова принтирал с if XD.
    if (sum > 0) {
        console.log(sum.toFixed(2));
    }
}

vegetableMarket("tomato", "Tuesday", 2)
vegetableMarket("onion", "Sunday", 3)
vegetableMarket("pepper", "Monday", 10)
vegetableMarket("banana", "Friday", 5)
