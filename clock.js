// A JavaScript program to display the current day and time

var today = new Date(); //Date objects are created with new Date()
var day = today.getDay();
var dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var date = today.getDate();
var monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var month = today.getMonth();
var year = today.getFullYear();
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

document.write("Today is : "+dayList[day] + ',' +' '+ date + ' ' + 'of' + ' '+ monthList[month] + ' ' + year +"<br>");
document.write("Current Time : "+hour + 'h' + " : " + minute + "m" + " : " + second + "s");
