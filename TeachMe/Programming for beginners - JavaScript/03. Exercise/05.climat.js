function climat(degrees) {
    let weather = '';

    if (degrees < 5) {
        weather = 'freezing';
    } else if (degrees < 11) {
        weather = 'cold';
    } else if (degrees < 16) {
        weather = 'cool';
    } else if (degrees < 21) {
        weather = 'mild';
    } else if (degrees < 26) {
        weather = 'warm';
    } else if (degrees < 30) {
        weather = 'hot';
    } else {
        weather = 'too hot';
    }

    console.log(weather);
}

climat(16);
climat(42);
climat(-15);
climat(6);
climat(14);
climat(22);
climat(36.6);
