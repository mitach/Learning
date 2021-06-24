function ageAndSex(age, sex) {
    let printResult = '';

    if (sex == 'm' && age >= 16) {
        printResult = 'Mr.'
    } else if (sex == 'm' && age < 16) {
        printResult = 'Master'
    } else if (sex == 'f' && age >= 16) {
        printResult = 'Ms.'
    } else if (sex == 'f' && age < 16) {
        printResult = 'Miss'
    }

    console.log(printResult);
}

ageAndSex(14, 'f');
ageAndSex(17, 'm');
ageAndSex(10, 'm');
ageAndSex(32, 'f');