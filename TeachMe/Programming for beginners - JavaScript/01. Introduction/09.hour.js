function hour(minutes) {
    let hour = 0;
    while (minutes >= 60) {
        if (minutes >= 60) {
            hour++;
            minutes -= 60;
        }
    }

    if (hour < 10) {
        if (minutes < 10) {
            console.log(`0${hour}:0${minutes}`);
        } else {
            console.log(`0${hour}:${minutes}`);
        }
    } else {
        if (minutes < 10) {
            console.log(`${hour}:0${minutes}`);
        } else {
            console.log(`${hour}:${minutes}`);
        }
    }
}

hour(180);