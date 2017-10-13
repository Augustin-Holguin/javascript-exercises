// A JavaScript program to try and guess a random number between 1 & 10

function result() {
  var randomNumber = Math.floor(Math.random() * 10 + 1);
  console.log(randomNumber);
  var userNumber = prompt("Please choose a number between 1 & 10");
  if (randomNumber == userNumber) {
    alert("Congrats " + randomNumber + " was the right number !");
  } else {
      alert("Please try again mate! The answer was " + randomNumber + " ...");
    }
}
