(function(){
  // get time, init clock
  updateClock();
})();


function updateClock() {
  var now = new Date(), // current date
    months   = ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'];
    months_s = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    days     = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    time = now.getHours() + ':' + (now.getMinutes()<10?'0':'') + now.getMinutes(),
    // build month string
    date = [days[now.getDay()] + ',',
            months_s[now.getMonth()],
            now.getDate(),
           ].join(' ');

  document.querySelector(".time").innerHTML = time;
  document.querySelector(".date").innerHTML = date;
  setTimeout(updateClock, 1000);
}
