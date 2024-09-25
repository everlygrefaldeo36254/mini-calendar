const monthName=document.getElementById("month-name");
const dayName=document.getElementById("day-name");
const dayNum=document.getElementById("day-number");
const year=document.getElementById("year");

const currentDate =new Date();

const month =currentDate.getMonth();
const day =currentDate.getDay();
const dayOfMonth =currentDate.getDate();
const fullYear = currentDate.getFullYear();

monthName.innerText = currentDate.toLocaleString ("en",{month:"long"});
dayName.innerText = currentDate.toLocaleString ("en",{weekday:"long"});
dayNum.innerText =dayOfMonth;
year.innerText = fullYear;



