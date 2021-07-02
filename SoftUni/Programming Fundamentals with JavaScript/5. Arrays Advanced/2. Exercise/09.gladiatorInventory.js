function gladiatorInventory(input) {
    let inventory = input.shift().split(' ');

    for (let line of input) {
        let [command, equipment] = line.split(' ');

        switch (command) {
            case 'Buy':
                buy(inventory, equipment);
                break;
            case 'Trash':
                trash(inventory, equipment)
                break;
            case 'Repair':
                repair(inventory, equipment);
                break;
            case 'Upgrade':
                upgrade(inventory, equipment);
                break;
        }
    }

    console.log(inventory.join(' '));

    function buy(array, equipment) {
        if (!(array.includes(equipment))) {
            array.push(equipment);
        }
    }

    function trash(array, equipment) {
        if (array.includes(equipment)) {
            array.splice(array.indexOf(equipment), 1);
        }
    }

    function repair(array, equipment) {
        if (array.includes(equipment)) {
            array.splice(array.indexOf(equipment), 1);
            array.push(equipment)
        }
    }

    function upgrade(array, equipment) {
        let [item, upgrade] = equipment.split('-');
        if (array.includes(item)) {
            let index = array.indexOf(item);
            array.splice(index + 1, 0, `${item}:${upgrade}`);
        }
    }
}

gladiatorInventory([
    'SWORD Shield Spear',
    'Upgrade SWORD-Steel'
]);

// gladiatorInventory([
//     'SWORD Shield Spear',
//     'Buy Bag',
//     'Trash Shield',
//     'Repair Spear',
//     'Upgrade SWORD-Steel'
// ]);

// gladiatorInventory([
//     'SWORD Shield Spear',
//     'Trash Bow',
//     'Repair Shield',
//     'Upgrade Helmet-V'
// ]);