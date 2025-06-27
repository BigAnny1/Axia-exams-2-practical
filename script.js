// Question 1

let myAge = 22;
let yourAge = prompt(" Enter your Age here: ");
if (myAge > yourAge) {
  alert(" I am older");
  console.log("I am older");
} else {
  myAge < yourAge;
  let yearsAhead = yourAge - myAge;

  {
    alert("You are  " + yearsAhead + " years older than me");
    console.log(" You are older");
  }
}

//Question 2: PART A

// let a = 10;
// let b = 6;
// if (a > b) {
//   console.log("a is greater than b");
// } else  (a < b) {
//   console.log("a is less than b");
// }

//ternary operator :PART B

let a = 10;
let b = 6;
let answer = a > b ? "a is greater than b" : "a is less than b";
console.log(answer);

//Question 3

let number = prompt("enter a number:");
if (number % 4 === 0) {
  console.log("This is an even number");
  alert("This is an even number");
} else {
  console.log("This is an odd number");
  alert("This is an odd number");
}

// Question 4

let month = "September";
if (month == "December" || month == "January" || month == "February") {
  console.log(`${month} is in Winter`);
} else if (month == "March" || month == "April" || month == "May") {
  console.log(`${month} is in Spring`);
} else if (month == "June" || month == "July" || month == "August") {
  console.log(`${month} is in Summer`);
} else if (
  month === "September" ||
  month === "October" ||
  month === "November"
) {
  console.log(`${month} is in Autumn`);
} else {
  console.log("invalid month");
}

// Question 5

let day = prompt(" What day is it today?");
if (day == "saturday" || day == "sunday") {
  let day = "monday";
  alert(`${day} is a weekend.`);
  console.log(`${day} is a weekend.`);
} else if (
  day == "Monday" ||
  day == "Tuesday" ||
  day == "wednesday" ||
  day == "Thursday" ||
  day == "Friday"
) {
  alert(`${day} is a working day`);
  console.log(`${day} is a working day.`);
} else {
  console.log("invalid day.");
  alert("invalid day.");
}
