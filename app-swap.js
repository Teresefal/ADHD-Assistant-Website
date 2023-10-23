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



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsById("edit-button-1")[0];

// Get the elements that we need to change
var title = document.getElementsByClassId("note-title-1")[0];
var text = document.getElementsByClassId("note-text-1")[0];

// Get the form and input fields
var form = document.getElementById("noteForm");
var inputTitle = document.getElementById("title");
var inputText = document.getElementById("text");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on submit, change the note and close the modal
form.onsubmit = function(e) {
  e.preventDefault();
  title.innerHTML = inputTitle.value;
  text.innerHTML = inputText.value;
  modal.style.display = "none";
}

// Get the close element
var span = document.getElementsByClassName("close")[0];

// When the user clicks on close (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}