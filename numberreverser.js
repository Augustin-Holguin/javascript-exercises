function numberReverser() {
  var number = document.getElementById('number').value;
  document.getElementById('numberReverse').innerHTML = number.split('').reverse().join('');
}
