function showContent(id) {
    var contents = document.getElementsByClassName("app-main");
    for (var i = 0; i < contents.length; i++) {
      contents[i].classList.remove("active");
    }
    document.getElementById(id).classList.add("active");
  }

  var interval;

function startTimer() {
    var time1 = 20 * 60;
    clearInterval(interval);
    interval = setInterval(function() {
        time1--;
        var minutes = Math.floor(time1 / 60);
        var seconds = time1 % 60;
        document.getElementById('timer').textContent = 'Таймер: ' + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        if (time1 <= 0) {
            alert('Следай перерыв!');
            time1 = 20 * 60;
        }
    }, 1000);
}

function startTimer2() {
    var time2 = 25 * 60;
    clearInterval(interval);
    interval = setInterval(function() {
        time2--;
        var minutes = Math.floor(time2 / 60);
        var seconds = time2 % 60;
        document.getElementById('timer2').textContent = 'Таймер: ' + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        if (time2 <= 0) {
            alert('Следай перерыв!');
            time2 = 25 * 60;
        }
    }, 1000);
}