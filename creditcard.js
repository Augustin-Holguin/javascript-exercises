// A JavaScript program to check a if a credit card number is valid

function creditCardValidation() {

var cardNumber = document.getElementById('cardnumber').value;
regexp = /^\d{16}$/;

  if (regexp.test(cardNumber)) {
    document.getElementById("cardValid").innerHTML = "Your card is valid !";
  } else {
    document.getElementById("cardValid").innerHTML = "Your card is invalid ...";
  }

}
