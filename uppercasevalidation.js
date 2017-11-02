// A JavaScript program to test the first character of a string is uppercase or not

function isUppercase() {
  var stringToCheck = document.getElementById('string').value;
  regexp = /^[A-Z]/;
  if (regexp.test(stringToCheck)) {
    document.getElementById("UppercaseOrNot").innerHTML = "Your string's first character is uppercase !";
  } else {
    document.getElementById("UppercaseOrNot").innerHTML = "Your string's first character is not uppercase ...";
  }
}
