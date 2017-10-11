// A JavaScript program to find the area of a triangle

var sideA = 5;
var sideB = 6;
var sideC = 7;
var perimeter = (sideA + sideB + sideC)/2;

var triangleArea = Math.sqrt(perimeter*((perimeter-sideA)*(perimeter-sideB)*(perimeter-sideC)));

var triangleAreaRounded = Math.round(triangleArea);

document.write(triangleAreaRounded);
