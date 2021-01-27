const endTime = '2021-01-31 23:59:59'

function getTimeRemaining(endTime) {
    const total = Date.parse(endTime) - Date.parse(new Date())
    const seconds = Math.floor( (total/1000) % 60 )
    const minutes = Math.floor( (total/1000/60) % 60 )
    const hours = Math.floor( (total/(1000*60*60)) % 24 )
    const days = Math.floor( total/(1000*60*60*24))

    return {
        total,
        days,
        hours,
        minutes,
        seconds
    }
}
function initializeClock(id, endTime) {
    const clock = document.getElementById(id)
    const daysSpan = clock.querySelector(".days");
    const hoursSpan = clock.querySelector(".hours");
    const minutesSpan = clock.querySelector(".minutes");
    const secondsSpan = clock.querySelector(".seconds");

    function updateClock() {
      const t = getTimeRemaining(endTime);
            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = t.hours;
            minutesSpan.innerHTML = t.minutes;
            secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
          if (t.total <= 0) {
              clearInterval(timeInterval)
          }
    }

    updateClock(); // run function once at first to avoid delay
    var timeinterval = setInterval(updateClock, 1000);
}

initializeClock('root', endTime);