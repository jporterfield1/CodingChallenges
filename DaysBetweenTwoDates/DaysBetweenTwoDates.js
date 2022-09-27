/*
How Many Days Between Two Dates (JavaScript)

Create a function that takes two dates and returns the number of days between the first and second date.

Examples

getDays(

  new Date("June 14, 2019"),

  new Date("June 20, 2019")

) ➞ 6

getDays(

  new Date("December 29, 2018"),

  new Date("January 1, 2019")

) ➞ 3

// Dates may not all be in the same month/year.

getDays(

  new Date("July 20, 2019"),

  new Date("July 30, 2019")

) ➞ 10
*/

function calculateDiff() {
    let date1 = new Date(document.getElementById("date1").value);
    let date2 = new Date(document.getElementById("date2").value);
    let difTime = 0;
    let difDays = 0;
    console.log(date1);
    console.log(date2);

    if (date1 < date2) {
        difTime = date2.getTime() - date1.getTime();
        difDays = difTime / (1000 * 60 * 60 * 24);
        document.getElementById("result").innerHTML = "Result: " + difDays;
    }
    if (date1 > date2) {
        difTime = date1.getTime() - date2.getTime();
        difDays = difTime / (1000 * 60 * 60 * 24);
        document.getElementById("result").innerHTML = "Result: " + difDays;
    }
}