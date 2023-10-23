function showContent(id) 
{
    var contents = document.getElementsByClassName("app-main");
    for (var i = 0; i < contents.length; i++) 
    {
      contents[i].classList.remove("active");
    }
    document.getElementById(id).classList.add("active");
  }

  var interval;

function startTimer() 
{
    var time1 = 20 * 60;
    clearInterval(interval);
    interval = setInterval(function() 
    {
        time1--;
        var minutes = Math.floor(time1 / 60);
        var seconds = time1 % 60;
        document.getElementById('timer').textContent = 'Таймер: ' + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        if (time1 <= 0) 
        {
            alert('Следай перерыв!');
            time1 = 20 * 60;
        }
    }, 1000);
}

function startTimer2() 
{
    var time2 = 25 * 60;
    clearInterval(interval);
    interval = setInterval(function() 
    {
        time2--;
        var minutes = Math.floor(time2 / 60);
        var seconds = time2 % 60;
        document.getElementById('timer2').textContent = 'Таймер: ' + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        if (time2 <= 0) 
        {
            alert('Следай перерыв!');
            time2 = 25 * 60;
        }
    }, 1000);
}

var time1 = 1200;
var time2 = 1500;
var time3 = 300;

function startTimer() 
{
  var x = setInterval(function() 
  {
    document.getElementById("timer").innerHTML = "Таймер: " + formatTime(time1);
    time1--;
    if (time1 < 0) 
    {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "Время вышло";
      alert('Следай перерыв!');
    }
  }, 1000);
}

function startTimer2() 
{
  var x = setInterval(function() 
  {
    document.getElementById("timer2").innerHTML = "Таймер: " + formatTime(time2);
    time2--;
    if (time2 < 0) {
      clearInterval(x);
      document.getElementById("timer2").innerHTML = "Время вышло";
      alert('Следай перерыв!');
    }
  }, 1000);
}

function startTimer3() 
{
  var x = setInterval(function() 
  {
    document.getElementById("timer3").innerHTML = "Таймер: " + formatTime(time3);
    time3--;
    if (time3 < 0) 
    {
      clearInterval(x);
      document.getElementById("timer3").innerHTML = "Время вышло";
      alert('Следай перерыв!');
    }
  }, 1000);
}

function formatTime(time) 
{
  var minutes = Math.floor(time / 60);
  var seconds = time % 60;
  
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}


function logReg(id) 
{
  var contents = document.getElementsByClassName("login-container");
  for (var i = 0; i < contents.length; i++) 
  {
    contents[i].classList.remove("active");
  }
  document.getElementById(id).classList.add("active");
}

function showNote() 
{
  var contents = document.getElementsByClassName("timer-block");
  for (var i = 0; i < contents.length; i++) 
  {
    if(!contents[i].classList.contains('active'))
    {
      contents[i].classList.add("active");
      return;
    }
  }
}

document.querySelectorAll('.timer-block').forEach((block) => {
  let button = block.querySelector('.button-medium');
  let title = block.querySelector('.hssb-20-osp');
  let titleInput = block.querySelector('input[placeholder="Заголовок"]');
  let note = block.querySelector('.osr-14-osp');
  let noteInput = block.querySelector('input[placeholder="Текст заметки"]');

  button.addEventListener('click', () => {
    if (title.style.display !== 'none') {
      title.style.display = 'none';
      note.style.display = 'none';
      titleInput.style.display = 'block';
      noteInput.style.display = 'block';
    } else {
      title.style.display = 'block';
      note.style.display = 'block';
      titleInput.style.display = 'none';
      noteInput.style.display = 'none';
    }
  });
});
