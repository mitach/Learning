function scholarship(income, grade, minSalary) {
    let socialScholarship = 0;
    let scholarshipForExcellence = 0;

    if (income < minSalary && grade >= 4.50) {
        socialScholarship = minSalary * 0.35;
    }

    if (grade >= 5.50) {
        scholarshipForExcellence = grade * 25;
    }

    if (socialScholarship == 0 && scholarshipForExcellence == 0) {
        console.log(`You cannot get scholarship!`);
    } else if (socialScholarship > scholarshipForExcellence) {
        console.log(`You can get a Social scholarship ${socialScholarship} BGN`);
    } else if (scholarshipForExcellence > socialScholarship) {
        console.log(`You can get a scholarship for excellent results ${scholarshipForExcellence} BGN`);
    }

}

scholarship(480, 4.60, 450);
scholarship(300.00, 5.65, 420);
