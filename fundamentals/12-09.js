// set alarm
function setAlarm(employed, vacation) {
    if (employed && !vacation) {
        return true;
    } else {
        return false;
    }
}

// will there be enough space?
function enough(cap, on, wait) {
    let space = cap - on;

    if (wait <= space) {
        return 0;
    } else {
        return wait - space;
    }

}

// grade book
function getGrade(s1, s2, s3) {
    var score = (s1 + s2 + s3) / 3;

    if (score >= 90 && score <= 100) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

// Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {
    numbers.sort(function (a, b) { return a - b });
    return numbers[0] + numbers[1];
}
