function vacantion(budget, season) {
    let destination = '';
    let typeOfVacation = '';
    let moneySpent = 0;

    if (budget <= 100) {
        destination = 'Somewhere in Bulgaria';

        if (season == 'summer') {
            typeOfVacation = 'Camp';
            moneySpent = budget * 0.3;
        } else if (season == 'winter') {
            typeOfVacation = 'Hotel';
            moneySpent = budget * 0.7;
        }

    } else if (budget > 100 && budget <= 1000) {
        destination = 'Somewhere in Europe';

        if (season == 'summer') {
            typeOfVacation = 'Camp';
            moneySpent = budget * 0.4;
        } else if (season == 'winter') {
            typeOfVacation = 'Hotel';
            moneySpent = budget * 0.8;
        }

    } else if (budget > 1000) {
        destination = 'Somewhere in Asia';
        typeOfVacation = 'Hotel';
        moneySpent = budget * 0.9;
    }

    console.log(`${destination}\n${typeOfVacation} - ${moneySpent.toFixed(2)}`);
}

vacantion(50, "summer");
vacantion(75, "winter");
vacantion(312, "summer");
vacantion(678.53, "winter");
vacantion(1500, "summer");
