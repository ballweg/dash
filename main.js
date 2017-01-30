(function(){
  // get time, init clock
  updateClock();
})();


function updateClock() {
  var now = new Date(), // current date
    months = ['January', 'February', 'March', 'April', 'May', 'June',
              'July', 'August', 'September', 'October', 'November', 'December'];
    time = now.getHours() + ':' + (now.getMinutes()<10?'0':'' + now.getMinutes()),
    // build month string
    date = [months[now.getMonth()],
            now.getDate() +',',
            now.getFullYear()].join(' ');

  document.querySelector(".time").innerHTML = time;
  document.querySelector(".date").innerHTML = date;
  setTimeout(updateClock, 1000);
}
