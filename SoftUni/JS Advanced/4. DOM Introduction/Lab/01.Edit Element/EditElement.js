function editElement(parameter, match, replace) {
    const text = parameter.textContent;
    const matcher = new RegExp(match, 'g');

    parameter.textContent = text.replace(matcher, replace);
}