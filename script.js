document.addEventListener("DOMContentLoaded", function() {
    var addition = document.getElementById("boutonAddition");
    var soustraction = document.getElementById("boutonSoustraction");
    var multiplication = document.getElementById("boutonMultiplication");
    var laTotalChantal = document.getElementById("boutonLaTotal");

    laTotalChantal.addEventListener("click", function() {
        window.location.href = "pages/page1.html"
    });

    addition.addEventListener("click", function() {
        window.location.href = "pages/page2.html"
    });

    soustraction.addEventListener("click", function() {
        window.location.href = "pages/page3.html"
    });

    multiplication.addEventListener("click", function() {
        window.location.href = "pages/page4.html"
    });
});