function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
tablinks[i].className = tablinks[i].className.replace(" active", "");
}
document.getElementById(tabName).style.display = "block";
evt.currentTarget.className += " active";
}
// Set the default open tab
document.getElementById("defaultOpen").click();

//Menu
function toggleMenu() {
  var navOptions = document.querySelector(".nav-options");
  navOptions.style.display = (navOptions.style.display === "block") ? "none" : "block";
}

//dark mode
let toggleBtn = document.getElementById("btn-mode");
toggleBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
