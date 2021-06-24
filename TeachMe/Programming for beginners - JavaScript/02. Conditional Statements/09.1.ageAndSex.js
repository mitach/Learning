function ageAndSex(age, sex) {
    let printResult = '';

    if (sex == 'm') {
        if (age >= 16) {
            printResult = 'Mr.';
        } else if (age < 16) {
            printResult = 'Master';
        }
    } else if (sex == 'f') {
        if (age >= 16) {
            printResult = 'Ms.';
        } else if (age < 16) {
            printResult = 'Miss';
        }
    }

    console.log(printResult);
}

ageAndSex(14, 'f');
ageAndSex(17, 'm');
ageAndSex(10, 'm');
ageAndSex(32, 'f');
