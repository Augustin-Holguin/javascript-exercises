// A Javascript program to check if a given number is prime

function primeNumberChecker() {
  var number = document.getElementById('primeNumber').value;
  if (number == 0 || number == 1) {
    document.getElementById("primeNumberResult").innerHTML = "No !";
  } else if (number === 2 ||
             number === 3 ||
             number > 2 && number % 2 > 0 && number % 3 > 0 ||
             number > 3 && number % 2 > 0 && number % 3 > 0) {
    document.getElementById("primeNumberResult").innerHTML = "Yes !";
  } else {
    for (i = 2; i < number; i++) {
      if (number % i == 0) {
        document.getElementById("primeNumberResult").innerHTML = "No !";
        break;
      }
    }
  }
}
