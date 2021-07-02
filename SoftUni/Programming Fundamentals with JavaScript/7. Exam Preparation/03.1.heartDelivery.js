function heartDelivery(input) {
    let neighborhood = input.shift().split('@');
    let line = input.shift();
    let index = 0;

    while (line != 'Love!') {
        let [jump, step] = line.split(' ');
        index += Number(step);

        if (index > neighborhood.length - 1) {
            index = 0;
        }

        if (neighborhood[index] === 0) {
            console.log(`Place ${index} already had Valentine's day.`);
        } else {
            neighborhood[index] -= 2;

            if (neighborhood[index] === 0) {
                console.log(`Place ${index} has Valentine's day.`);
            }
        }

        line = input.shift();
    }

    console.log(`Cupid's last position was ${index}.`);
    let missed = neighborhood.filter(x => x > 0).length;

    if (missed > 0) {
        console.log(`Cupid has failed ${missed} places.`);
    } else {
        console.log(`Mission was successful.`);
    }
}

heartDelivery(['10@10@10@2', 'Jump 1', 'Jump 2', 'Love!']);
heartDelivery(['2@4@2', 'Jump 2', 'Jump 2', 'Jump 8', 'Jump 3', 'Jump 1', 'Love!']);