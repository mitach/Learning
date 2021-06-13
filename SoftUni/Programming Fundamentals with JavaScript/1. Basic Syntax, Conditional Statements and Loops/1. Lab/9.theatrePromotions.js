function theatrePromotions(day, age) {

    if (age >= 0 && age <= 122) {
        if (day == 'Weekday') {
            if (age >= 0 && age <= 18) {
                console.log("12$");
            } else if (age > 18 && age <= 64) {
                console.log("18$");
            } else {
                console.log("12$");
            }
        }
        if (day == 'Weekend') {
            if (age >= 0 && age <= 18) {
                console.log("15$");
            } else if (age > 18 && age <= 64) {
                console.log("20$");
            } else {
                console.log("15$");
            }
        }
        if (day == 'Holiday') {
            if (age >= 0 && age <= 18) {
                console.log("5$");
            } else if (age > 18 && age <= 64) {
                console.log("12$");
            } else {
                console.log("10$");
            }
        }
    } else {
        console.log('Error!');
    }

}
theatrePromotions("Holiday", 12)