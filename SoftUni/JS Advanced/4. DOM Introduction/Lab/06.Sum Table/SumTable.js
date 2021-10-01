function sumTable() {
    const tableRows = Array.from(document.querySelector('tbody').children);
    const result = document.getElementById('sum');
    tableRows.shift();
    tableRows.pop();

    let sum = 0;

    for (let row of tableRows) {
        let td = Array.from(row.children);
        sum += Number(td[td.length - 1].textContent);
    }

    result.textContent = sum
}