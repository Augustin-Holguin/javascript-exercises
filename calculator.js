function multiplyBy() {
  var firstNumber = document.getElementById('number1').value;
  var secondNumber = document.getElementById('number2').value;
  document.getElementById("result").innerHTML = firstNumber * secondNumber;
}

function divideBy() {
  var firstNumber = document.getElementById('number1').value;
  var secondNumber = document.getElementById('number2').value;
  document.getElementById("result").innerHTML = firstNumber / secondNumber;
}
