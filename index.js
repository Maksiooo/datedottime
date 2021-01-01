// Created by Maksiooo
// Last update: 20:00, 01.01.2021

// Thanks for downloading this package :)

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

//Random Number
var random = Math.floor(Math.random() * 100)

module.exports = {
    date, time, datetime, day, month, random
};