// A JavaScript calculator

function multiplyBy() {
  var firstNumber = document.getElementById('number1').value;
  var secondNumber = document.getElementById('number2').value;
  document.getElementById("result").innerHTML = (firstNumber * secondNumber).toFixed(2);
}

function divideBy() {
  var firstNumber = document.getElementById('number1').value;
  var secondNumber = document.getElementById('number2').value;
  document.getElementById("result").innerHTML = (firstNumber / secondNumber).toFixed(2);
}
