function showContent(id) {
    var contents = document.getElementsByClassName("app-main");
    for (var i = 0; i < contents.length; i++) {
      contents[i].classList.remove("active");
    }
    document.getElementById(id).classList.add("active");
  }