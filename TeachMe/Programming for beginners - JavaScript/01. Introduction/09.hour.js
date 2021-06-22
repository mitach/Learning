function hour(minutes) {
    let hour = 0;

    if (minutes >= 60) {
        hour++;
        minutes -= 60;
    }

    console.log(`${hour}:${minutes}`);
}

hour(325)