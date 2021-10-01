function extractText() {
    const items = Array.from(document.getElementById('items').children);
    const textArea = document.getElementById('result');

    let result = [];

    for (let item of items) {
        result.push(item.textContent);
    }

    textArea.textContent = result.join('\n');

    // for (let item of items) {
    //     textArea.value += item.textContent + '\n';
    // }
    // for (let i = 0; i < items.length; i++) {
    //     textArea.value += items[i].textContent + '\n';
    // }
}