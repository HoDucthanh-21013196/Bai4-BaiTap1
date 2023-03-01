function grade_arr(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    let grade = sum / numbers.length;
    if (grade >= 0 && grade <= 70) {
        console.log("Grade: D");
    }
    else if (grade >= 71 && grade <= 80) {
        console.log("Grade: C");
    }
    else if (grade >= 81 && grade <= 90) {
        console.log("Grade: B");
    }
    else if (grade >= 91 && grade <= 100) {
        console.log("Grade: A");
    }
}
console.log("11-marks-average-grade!")
grade_arr([75,85,65,95,80])

