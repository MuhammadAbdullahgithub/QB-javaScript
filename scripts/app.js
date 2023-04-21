 //Task No1

let zakatPercentage = 0.025;

let userInput = Number(prompt("Please enter your total assets:"));

let result = zakatPercentage * userInput;

alert("Your zakat value is " + result);

//Task No2

let familyMembers = prompt("Please enter the total number of family members:");

let selectedMethod = prompt("Please choose a fitrah method:\n1. Dates (430 per person)\n2. Sugar (324 per person)\n3. Flour (362 per person)");
let methodPrice;

if (selectedMethod == "1") {
  methodPrice = 9;
} else if (selectedMethod == "2") {
  methodPrice = 5;
} else if (selectedMethod == "3") {
  methodPrice = 7;
} else {
  alert("Invalid input!");
}

let fitrahAmount = methodPrice * familyMembers;
alert("The fitrah amount for " + familyMembers + " family members using the selected method is Rs " + fitrahAmount.toFixed(2));

// Task No3

const secretNumber = Math.floor(Math.random() * 10) + 1;
const userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

if (userGuess === secretNumber) 
{
  alert("Congratulations! You guessed the secret number.");
} else if (userGuess < secretNumber) 
{
  alert("Sorry, your guess is too low. Please guess again.");
} else 
{
  alert("Sorry, your guess is too high. Please guess again.");
}

//Task No4

const name1 = prompt("Enter your name : ");  
const capitalized_name1 = name1.charAt(0).toUpperCase() + name1.slice(1);  
console.log("Now your first letter of name is capitalize form", capitalized_name1);

//Task No5

let contactNumbers = [];
let contactNames = [];

let number = prompt("Enter a contact number");
let Names = prompt("Enter a contact Name");
contactNumbers.push(number);
  contactNames.push(Names);

console.log("Contact Numbers:");
for (let i = 0; i < contactNumbers.length; i++) {
  console.log(contactNumbers[i]);
}

console.log("Contact Names:");
for (let i = 0; i < contactNames.length; i++) {
  console.log(contactNames[i]);
}

//Task No6

const products = ['Potato', 'Tomato', 'Carrot', 'Mushroom', 'Eggplant'];

const position = prompt(`Enter the position of the product you want to remove (1-${products.length}):`);

const index = parseInt(position) - 1; 

if (index < 0 || index >= products.length || isNaN(index)) 
{
  console.log('position not valid');
} else 
{
  const removed = products.splice(index, 1)[0];
  console.log(`Removed: ${removed}`);
  console.log(`Remaining items: ${products.join(', ')}`);
  console.log(`Total items remaining: ${products.length}`);
}

//Task No7

let nationality = prompt("What is your nationality?");
let gender = prompt("What is your gender?");
let age = parseInt(prompt("What is your age?"));

if (nationality.toLowerCase() === "pakistani" || nationality.toLowerCase() === "indian") {
  if (gender.toLowerCase() === "male") {
    if (age >= 18) {
      console.log("You are eligible to vote.");
    } else {
      console.log("You are not eligible to vote.");
    }
  } else if (gender.toLowerCase() === "female") {
    if (age >= 18) {
      let married = prompt("Are you married? (yes/no)");
      if (married.toLowerCase() === "yes") {
        console.log("You are eligible to vote.");
      } else {
        console.log("You are not eligible to vote.");
      }
    } else {
      console.log("You are not eligible to vote.");
    }
  } else {
    console.log("Invalid gender.");
  }
} else {
  console.log("You are not eligible to vote.");
}

// Task No8

const worldCupSquad = ["Babar Azam", "Mohammad Rizwan", "Sarfaraz Ahmed", "Asif Ali", "Shadab Khan", "Imad Wasim", "Shaheen Afridi", "Hasan Ali", "Mohammad Hasnain", "Mohammad Amir", "Haris Rauf", "Muhammad Haris", "Fakhar Zaman", "Waseem jr", "Saim Ayub"];
alert("Now Tomorrow we have a match with india")

const finalTeam = ["Babar Azam", "Saim Ayub", "Imad Waseem", "Mohammad Rizwan", "Asif Ali", "Shadab Khan", "Shaheen Afridi", "Haris Rauf", "Waseem jr", "Mohammad Amir", "Muhammad Haris"];

console.log("This is our world cup squad", finalTeam);

