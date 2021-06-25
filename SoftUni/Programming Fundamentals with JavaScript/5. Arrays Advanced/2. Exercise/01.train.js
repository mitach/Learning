function train(trainArr) {
    let wagonArr = trainArr
        .shift()
        .split(' ')
        .map(Number);
    let capacityOfWagon = Number(trainArr.shift());

    for (let command of trainArr) {
        let tokens = command.split(' ');
        let i = 0;
        if (tokens[0] == 'Add') {
            wagonArr.push(Number(tokens[1]));
        } else {
            let passengers = Number(tokens[0]);
            for (let i = 0; i < wagonArr.length; i++) {
                if (wagonArr[i] + passengers <= capacityOfWagon) {
                    wagonArr[i] += passengers;
                    break;
                }
            }
        }

        i++;

    }

    console.log(wagonArr.join(' '));
}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);