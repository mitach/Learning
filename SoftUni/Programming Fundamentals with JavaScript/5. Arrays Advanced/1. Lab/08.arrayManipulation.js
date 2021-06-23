function arrayManipulation(commands) {
    let arrNums = commands
        .shift()
        .split(' ')
        .map(Number);

    for (let i = 0; i < commands.length; i++) {
        let [command, number, index] = commands[i].split(' ');

        number = Number(number);
        index = Number(index);

        switch (command) {
            case 'Add':
                add(number)
                break;
            case 'Remove':
                remove(number)
                break;
            case 'RemoveAt':
                removeAt(number);
                break;
            case 'Insert':
                insert(number, index)
                break;
        }
    }

    function add(number) {
        arrNums.push(number);
    }

    function remove(number) {
        arrNums = arrNums.filter(x => x != number);
    }

    function removeAt(index) {
        arrNums.splice(index, 1);
    }

    function insert(number, index) {
        arrNums.splice(index, 0, number)
    }

    console.log(arrNums.join(' '));
}

arrayManipulation(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'])