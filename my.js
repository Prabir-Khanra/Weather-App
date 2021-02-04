var mydate = document.getElementById("dates");
var temp_status = document.getElementsByClassName("weathercon");
var d = new Date();

// Temparature mode
var temp_mode = "{%temp_mood%}";
 if(temp_mode.toLowerCase() == "cloud")
 {
    temp_status[0].innerHTML = '<i class="fas fa-cloud" style="color:#ecf0f1;"></i>';
 }
 else if(temp_mode.toLowerCase() == "rainy")
 {
    temp_status[0].innerHTML = '<i class="fas fa-cloud-rain" style="color:#222f3e;"></i>';
 }
 else if(temp_mode.toLowerCase() == "sunny")
 {
     temp_status[0].innerHTML = '<i class="fas fa-sun" style="color:yellow;"></i>';
 }
 else
 {
     console.log("else");
     temp_status[0].innerHTML = '<i class="fas fa-cloud" style="color:#fad390;"></i><i class="fas fa-cloud" style="color:#ecf0f1;font-size:16px;"></i>';
    // temp_status[0].innerHTML = '<i class="fas fa-clouds-sun" style="color:#fad390;"></i>';
 }

const nowWeekDay = () => {
    // week day name 
    var week_day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    var day_name = week_day[d.getDate()];
    console.log("Today is: " + day_name);
    return `${day_name}`;
}
const nowDate = () => {
    // month and date 
    var aMonth = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    var month_name = aMonth[d.getMonth()];

    //date
    var date = d.getDate();
    return `${month_name} ${date}`;
}
const nowTime = () => {
    // time 
    var hour = d.getHours();
    var mins = "";
    var mode = "";
    if (hour > 12) {
        hour -= 12;
        mode = "PM";
    }
    else {
        mode = "AM";
    }
    if (mins < 10) {
        mins = "0" + d.getMinutes();
    }
    return `${hour}:${mins} ${mode}`;
}
// nowWeekDay();
// nowDate();
// nowTime();
mydate.innerHTML = `${nowWeekDay()} | ${nowDate()} | ${nowTime()}`;