function sortByTwoCriteria(input) {
    input.sort((x, y) => x.length - y.length || x.localeCompare(y));

    console.log(input.join('\n'));
}

sortByTwoCriteria(['gamma', 'beta', 'alpha']);