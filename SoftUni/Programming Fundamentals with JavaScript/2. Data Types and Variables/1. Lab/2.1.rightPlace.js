function rightPlace(wordMissingLetter, letter, correctWord) {
    let word = wordMissingLetter.replace('_', letter)

    if (word == correctWord) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

rightPlace('Str_ng', 'i', 'Strong');