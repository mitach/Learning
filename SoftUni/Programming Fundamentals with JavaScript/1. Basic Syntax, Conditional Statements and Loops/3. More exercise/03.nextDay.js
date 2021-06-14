function nextDay(year, month, date) {
    let nextDay = new Date(year, month - 1, date + 1);

    let getYear = nextDay.getFullYear();
    let getMonth = nextDay.getMonth() + 1;
    let getDate = nextDay.getDate();

    console.log(`${getYear}-${getMonth}-${getDate}`);
}

nextDay(2016, 09, 30);