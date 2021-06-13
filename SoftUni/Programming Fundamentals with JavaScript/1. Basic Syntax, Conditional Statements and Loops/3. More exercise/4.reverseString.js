function reverseString(string) {
    let stringSplitted = string.split('');
    let stringReversed = stringSplitted.reverse('');
    let stringJoined = stringReversed.join('');
    console.log(stringJoined);
}

reverseString('1234')