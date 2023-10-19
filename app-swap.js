function showContent(id) {
    var contents = document.getElementsByClassName("app-main");
    for (var i = 0; i < contents.length; i++) {
      contents[i].classList.remove("active");
    }
    document.getElementById(id).classList.add("active");
  }

  var interval;

function startTimer() {
    var time = 20 * 60;
    clearInterval(interval);
    interval = setInterval(function() {
        time--;
        var minutes = Math.floor(time / 60);
        var seconds = time % 60;
        document.getElementById('timer').textContent = 'Timer: ' + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        if (time <= 0) {
            alert('Следай перерыв!');
            time = 20 * 60;
        }
    }, 1000);
}