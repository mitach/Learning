function alarm(hour, minutes) {
    minutes += 15;

    if (minutes >= 60) {
        hour++;
        minutes -= 60;
    }

    if (hour < 10) {
        hour = `0${hour}`;
    }

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    console.log(`${hour}:${minutes}`);
}

alarm(1, 47);
alarm(0, 2);
alarm(23, 59)