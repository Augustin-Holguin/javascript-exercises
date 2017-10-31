// A Javascript program to sort number from the lowest to the greatest

function numberSorter() {

var x = document.getElementById('numberOne').value;
var y = document.getElementById('numberTwo').value;
var z = document.getElementById('numberThree').value;
var numberArray = [x,y,z];

document.getElementById("numberSorted").innerHTML = numberArray.sort(function(a,b) { return a - b; });
}


// Not working with function
/*
if (a > y && a > z) {
  if (y > z) {
    document.getElementById("numberSorted").innerHTML = z + " < " + y + " < " + a;
  } else {
    document.getElementById("numberSorted").innerHTML = y + " < " + z + " < " + a;
  }
}
else if (y > a && y > z) {
  if (a > z) {
    document.getElementById("numberSorted").innerHTML = z + " < " + a + " < " + y;
  } else {
    document.getElementById("numberSorted").innerHTML = a + " < " + z + " < " + y;
  }
}
else if (z > a && z > y) {
  if (a > y) {
    document.getElementById("numberSorted").innerHTML = y + " < " + a + " < " + z;
  } else {
    document.getElementById("numberSorted").innerHTML = a + " < " + y + " < " + z;
  }
}
*/
