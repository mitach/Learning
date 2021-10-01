function colorize() {
    const tableRows = Array.from(document.querySelectorAll('tr'));
    tableRows.shift();

    for (let i = 0; i < tableRows.length; i++) {
        if (i % 2 == 0) {
            tableRows[i].style.background = 'teal';
        }
    }
}