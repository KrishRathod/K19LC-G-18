 var dt = new Date();

function calUpdate()
{
console.log(dt.getDate());


var today = new Date();

var endDate = new Date(
    dt.getFullYear(),
    dt.getMonth() + 1,
    0
).getDate();

var prevDate = new Date(
    dt.getFullYear(),
    dt.getMonth(),
    0
).getDate();

const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

document.getElementById("month").textContent = month[dt.getMonth()];
document.getElementById("dateStr").textContent = dt.toDateString();

dt.setDate(1);
var day = dt.getDay();

var cell = "";
for(x=day;x>0;x--)
{
    cell += "<div class='prevDate'>" + (prevDate-x+1) + "</div>";
}

for(i=1;i<=endDate;i++)
{
   if(i == today.getDate() && dt.getMonth() == today.getMonth())
   {
    cell += "<div class='today'>" + i + "</div>";
   }
   else
   {
    cell += "<div>" + i + "</div>";
   }
}



document.getElementsByClassName("days")[0].innerHTML = cell;

}


function navigate(arg)
{
    if(arg == 'prev')
    {
        dt.setMonth(dt.getMonth() - 1);
    }
    else if(arg == 'next')
    {
        dt.setMonth(dt.getMonth() + 1);
    }
    calUpdate();
}

function feedSub()
{
    location.reload();
    alert('Your feedback is submitted');
}

const input = document.querySelector("input[name='feedback']");
function focusonInput()
{
input.style.border = "3px solid #58D68D";
}

function focusoffInput()
{
    input.style.border = "none";
}
//clock

function showTime()
{
var date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();

var session = "AM";

if(h > 12 )
{
    h = h - 12;
}
if(h > 11)
{
    session = "PM";
}

h = h < 10 ? "0" + h : h;
m = m < 10 ? "0" + m : m;
s = s < 10 ? "0" + m : s;

var time = h + ":" + m + ":" + s + " " + session;
document.getElementById("myclock").textContent = time;

setTimeout(showTime, 1000);
}


showTime();
