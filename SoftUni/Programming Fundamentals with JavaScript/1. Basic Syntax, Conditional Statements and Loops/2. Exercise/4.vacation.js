function vacation(group, type, day) {
    let price = 0;

    if (type == "Students") {

        if (group >= 30) {
            if (day == "Friday") {
                price = (group * 8.45) - ((group * 8.45) * 0.15);
            } else {
                price = (group * 8.45);
            }
            if (day == "Saturday") {
                price = (group * 9.80) - ((group * 9.80) * 0.15);
            } else {
                price = (group * 9.80);
            }
            if (day == "Sunday") {
                price = (group * 10.46) - ((group * 10.46) * 0.15);
            } else {
                price = (group * 10.46);
            }
        } else {
            if (day == "Friday") {
                price = (group * 8.45);
            } else if (day == "Saturday") {
                price = (group * 9.80);
            } else if (day == "Sunday") {
                price = (group * 10.46);
            }
        }
    }

    if (type == "Business") {

        if (group >= 100) {
            if (day == "Friday") {
                price = (group * 10.90) - (10 * 10.90);
            } else {
                price = (group * 10.90);
            }
            if (day == "Saturday") {
                price = (group * 15.60) - (10 * 15.60);
            } else {
                price = (group * 15.60);
            }
            if (day == "Sunday") {
                price = (group * 16) - (10 * 16);
            } else {
                price = (group * 16);
            }
        } else {
            if (day == "Friday") {
                price = (group * 10.90);
            } else if (day == "Saturday") {
                price = (group * 15.60);
            } else if (day == "Sunday") {
                price = (group * 16);
            }
        }
    }
    if (type == "Regular") {

        if (group >= 10 && group <= 20) {
            if (day == "Friday") {
                price = (group * 15) - ((group * 15) * 0.05);
            } else {
                price = (group * 15);
            }
            if (day == "Saturday") {
                price = (group * 20) - ((group * 20) * 0.05);
            } else {
                price = (group * 20);
            }
            if (day == "Sunday") {
                price = (group * 22.50) - ((group * 22.50) * 0.05);
            } else {
                price = (group * 22.50);
            }
        } else {
            if (day == "Friday") {
                price = (group * 15);
            } else if (day == "Saturday") {
                price = (group * 20);
            } else if (day == "Sunday") {
                price = (group * 22.50);
            }
        }
    }

    console.log(`Total price: ${price.toFixed(2)}`);

}
vacation(40, "Regular", "Saturday")