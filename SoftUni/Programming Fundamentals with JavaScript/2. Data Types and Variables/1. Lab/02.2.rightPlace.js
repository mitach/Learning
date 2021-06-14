function rightPlace(str, char, word) {
    let template = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] == '_') {
            template += char
        } else {
            template += str[i]
        }
    }

    if (word == template) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }

}

rightPlace('Str_ng', 'i', 'Strong')