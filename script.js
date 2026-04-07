// ==========================
// Part 1: Date Display
// ==========================
function dateDisplay() {
    var date = new Date();
    var month = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();
    // leading 0's for for single-digts months/days
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    document.getElementById("dateOutput").textContent =
        "Today is " + month + "/" + day + "/" + year;
}

// ==========================
// Part 2: Number Conversion
// ==========================
function numberConversion() {
    var strings = ["444", "bingo", "13.24", "24"];
    var result = "";
    for (let i = 0; i < strings.length; i++) {
        var cur_number = Number(strings[i]); //returns string as number
        var isNan = Number.isNaN(cur_number);
        var isInt = Number.isInteger(cur_number);

        result +=
            "Original: " +
            strings[i] +
            " -> Converted: " +
            cur_number +
            " -> isNan: " +
            isNan +
            " -> isInteger: " +
            isInt +
            "<br>";
    }
    document.getElementById("numberConversionOutput").innerHTML = result;
}

// ==========================
// Part 3: Math & Formatting
// ==========================
function math_Formatting() {
    var numbers = [11.22, 42, 59];
    var addition = numbers[1] + numbers[2];
    var division = numbers[2] / numbers[0];
    let result = "";
    result += "42 + 59 = " + addition + "<br>"; // addition
    result += "Without toFixed(): 59 / 11.22 = " + division + "<br>"; // division without toFixed()
    result += "With toFixed(): 59 / 11.22 = " + division.toFixed(3) + "<br>"; // division with toFixed()

    document.getElementById("mathOutput").innerHTML = result;
}

// ==========================
// Part 4: Conditionals
// ==========================
function handlesConditionals() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    conditionals(num1, num2);
}

function conditionals(num1, num2) {
    result = "";
    if (num1 > num2) {
        result += num1 + " is greater than " + num2 + "<br>";
    } else if (num1 < num2) {
        result += num1 + " is less than " + num2 + "<br>";
    } else {
        result += "Numbers 1 and 2 are equal <br>";
    }

    document.getElementById("conditionalOutput").innerHTML = result;
}