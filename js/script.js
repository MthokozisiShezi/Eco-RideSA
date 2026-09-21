// EcoRide SA - small script used on all pages

// mobile menu: click the button to open / close the links
var menuButton = document.getElementById("menu-button");
var mainNav = document.getElementById("main-nav");

menuButton.addEventListener("click", function () {
    mainNav.classList.toggle("open");
});

// forms: no server yet, so just show a thank you message for now
var forms = document.querySelectorAll("form");

for (var i = 0; i < forms.length; i++) {
    forms[i].addEventListener("submit", function (event) {
        event.preventDefault();
        var message = this.querySelector("#form-message");
        message.textContent = "Thanks! We got your message and will reply soon.";
        this.reset();
    });
}
