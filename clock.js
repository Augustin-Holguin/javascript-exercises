// A JavaScript program to display the current day and time

var today = new Date(); //Date objects are created with new Date()
var day = today.getDay();
var dayList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

document.write("Current Time : "+hour + 'h' + " : " + minute + " : " + second);
