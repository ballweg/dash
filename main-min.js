function updateClock(){var e=new Date,t=["January","February","March","April","May","June","July","August","September","October","November","December"];months_s=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],time=e.getHours()+":"+(e.getMinutes()<10?"0":""+e.getMinutes()),date=[days[e.getDay()]+",",months_s[e.getMonth()],e.getDate()].join(" "),document.querySelector(".time").innerHTML=time,document.querySelector(".date").innerHTML=date,setTimeout(updateClock,1e3)}!function(){updateClock()}();