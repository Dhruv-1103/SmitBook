var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("darkbtn");

function settingsMenuToggle() {
    settingsmenu.classList.toggle("settings-menu-height");

}
darkBtn.onclick = function () {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
}