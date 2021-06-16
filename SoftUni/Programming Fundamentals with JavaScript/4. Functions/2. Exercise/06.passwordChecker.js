function passwordValidator(password) {

    let isLengthValid = isBetweenSixAndTen(password);
    let consistsLettersAndDigits = consistOnlyLettersAndDigits(password);
    let containsAtLeastTwoDigits = hasAtLeastTwoDigits(password);

    if (isLengthValid && consistsLettersAndDigits && containsAtLeastTwoDigits) {
        console.log('Password is valid');
        return;
    }

    if (!isLengthValid) {
        console.log('Password must be between 6 and 10 characters');
    }

    if (!containsAtLeastTwoDigits) {
        console.log('Password must have at least 2 digits');
    }

    if (!consistsLettersAndDigits) {
        console.log('Password must consist only of letters and digits');
    }

    function isBetweenSixAndTen(string) {
        if (string.length >= 6 && string.length <= 10) {
            return true;
        } else {
            return false;
        }
    }

    function consistOnlyLettersAndDigits(string) {
        for (let char of string) {
            let charCode = char.charCodeAt(0);

            if (!(charCode >= 48 && charCode <= 57) &&
                !(charCode >= 65 && charCode <= 90) &&
                !(charCode >= 97 && charCode <= 122)) {
                return false;
            }
        }

        return true;

    }

    function hasAtLeastTwoDigits(string) {
        let counter = 0;

        for (let char of string) {
            let charCode = char.charCodeAt(0);

            if (charCode >= 48 && charCode <= 57) {
                counter++;
            }
        }

        // return counter >= 2;

        if (counter >= 2) {
            return true;
        } else {
            return false;
        }
    }

}