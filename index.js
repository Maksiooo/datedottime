// Created by Maksiooo

var now = new Date();

//Date
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

//Time
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

//Date and time
var datetime = date+' '+time;

//Day of the week
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
Date.prototype.getDayName = function() {
    return days[ this.getDay() ];
};
var day = now.getDayName();

//Name of the month
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
Date.prototype.getMonthName = function() {
    return months[ this.getMonth() ];
};
var month = now.getMonthName();

//Polish version

//Name of the month in polish
var monthspl = ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Pażdziernik','Listopad','Grudzień'];
Date.prototype.getMonthName = function() {
    return monthspl[ this.getMonth() ];
};
var month_pl = now.getMonthName();

//Name of the day in polish
var dayspl = ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota'];
Date.prototype.getDayName = function() {
    return dayspl[ this.getDay() ];
};
var day_pl = now.getDayName();

//12 hour clock
var TwentyFourHour = now.getHours();
var hour12 = now.getHours();
var min12 = now.getMinutes();
var sec12 = now.getSeconds();
var mid = 'pm';
if (min12 < 10) {
  min12 = "0" + min12;
}
if (hour12 > 12) {
  hour12 = hour12 - 12;
}    
if(hour12==0){ 
  hour12=12;
}
if(TwentyFourHour < 12) {
   mid = 'am';
}

var time_12 = hour12+':'+min12+':'+sec12 +' '+mid ;

//Random Number
var random = Math.floor(Math.random() * 100)

module.exports = {
    date, time, datetime, day, month, random, month_pl, day_pl, time_12
};
