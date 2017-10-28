// A Javascript program to check if a given word is a palindrome

function palindromeChecker() {
  var word = document.getElementById('palindrome').value;
  var re = /[\W_]/g;
  var lowWord = word.toLowerCase().replace(re, '');
  var reverseWord = lowWord.split('').reverse().join('');
  if (reverseWord === lowWord) {
    document.getElementById("palindromeResult").innerHTML = "YES your word is a Palindrome !";
      } else {
    document.getElementById("palindromeResult").innerHTML = "NOP sorry that's not a Palindrome, try again !";
    }
}
