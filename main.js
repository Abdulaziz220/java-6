let number = +prompt("Birinchi soni kiriting");
let numberOne = +prompt("Ikkinchi soni kiriting");
let amalar = +prompt("Amalarni tanlang;" + " \n 1)+" + "\n 2)-" + "\n 3)*" + "\n 4)/");
let sum;

if (amalar === 1) {
    sum = number + numberOne;
    console.log(sum);
} else if (amalar === 2) {
    sum = number - numberOne;
    console.log(sum);
}
else if (amalar === 3) {
    sum = number * numberOne;
    console.log(sum);
} else if (amalar === 4) {
    sum = number / numberOne;
    console.log(sum);
}