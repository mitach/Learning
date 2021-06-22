function clock(minutes) {

    let days = 0;
    let hours = 0;

    while (minutes >= 60) {
        hours++;
        minutes -= 60;
    }

    while (hours >= 24) {
        days++;
        hours -= 24;
    }

    if (days < 10) {
        if (hours < 10) {
            if (minutes < 10) {
                console.log(`0${days}:0${hours}:0${minutes}`);
            } else {
                console.log(`0${days}:0${hours}:${minutes}`);
            }
        } else {
            if (minutes < 10) {
                console.log(`0${days}:${hours}:0${minutes}`);
            } else {
                console.log(`0${days}:${hours}:${minutes}`);
            }

        }
    } else {
        if (hours < 10) {
            if (minutes < 10) {
                console.log(`${days}:0${hours}:0${minutes}`);
            } else {
                console.log(`${days}:0${hours}:${minutes}`);
            }
        } else {
            if (minutes < 10) {
                console.log(`${days}:${hours}:0${minutes}`);
            } else {
                console.log(`${days}:${hours}:${minutes}`);
            }

        }
    }


}


clock(4461);

