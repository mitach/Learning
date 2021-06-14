function login(data) {
    let username = data.shift();
    let passwordAsSplit = username.split('');
    let passwordAsReverse = passwordAsSplit.reverse();
    let password = passwordAsReverse.join('');

    let counter = 1;

    while (true) {
        let enteredPassword = data.shift()

        if (counter === 5) {
            console.log(`User ${username} blocked!`);
            break;
        }

        if (enteredPassword === password) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            console.log(`Incorrect password. Try again.`);
        }

        counter++;
    }
}

login(['Acer', 'omom', 'sas', 'sad', 'recA']);