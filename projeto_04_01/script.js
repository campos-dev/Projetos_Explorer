let num1 = Number(prompt("Choose the first number:"));
let num2 = Number(prompt("Choose the second number:"));

let isEqual;
let isEven;

if (num1 === num2) {
  isEqual = "the same";
} else {
  isEqual = "not the same";
}

if ((num1 + num2) % 2 == 0) {
  isEven = "even";
} else {
  isEven = "odd";
}

alert(`
The sum of these numbers is: ${num1 + num2}
The substraction of these numbers is ${num1 - num2}
The multiplication of these numbers is ${num1 * num2}
The division of these numbers is ${num1 / num2}
The modulus of these numbers is ${num1 % num2}

The sum of these numbers is ${isEven}: ${num1 + num2}
The inserted numbers are ${isEqual}: ${num1} and ${num2}
`);
