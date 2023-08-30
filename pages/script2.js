document.addEventListener("DOMContentLoaded", function () {
    var premierChiffre = document.getElementById("premierChiffre");
    var operateur = document.getElementById("operateur");
    var deuxiemeChiffre = document.getElementById("deuxiemeChiffre");
    var resultatInput = document.getElementById("resultat");
    var validationButton = document.getElementById("validation");
    var startButton = document.getElementById("start");
    var acceuil = document.getElementById("boutonA")

    var premier = 0;
    var deuxieme = 0;
    var operateurSymbole = "+"; // Déclarer operateurSymbole en tant que variable globale

    startButton.addEventListener("click", function () {
        premier = Math.floor(Math.random() * 100) + 1;
        deuxieme = Math.floor(Math.random() * 100) + 1;

        premierChiffre.textContent = premier;
        operateur.textContent = operateurSymbole;
        deuxiemeChiffre.textContent = deuxieme;
    });

    validationButton.addEventListener("click", function() {
        var resultatAttendu = premier + deuxieme;

        if (parseInt(resultatInput.value) === resultatAttendu) {
            document.body.style.backgroundColor = "green";
            console.log(resultatAttendu);
            resultatInput.value = "";
            setTimeout(function () {
                document.body.style.backgroundColor = "inherit";
                startButton.click();
            }, 1500);
        } else { 
            document.body.style.backgroundColor = "red";
            setTimeout(function () {
                console.log(resultatAttendu);
                resultatInput.value = "";
                document.body.style.backgroundColor = "inherit";
            }, 1500);
        }
    });

    resultatInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            validationButton.click();
        }
    });


    acceuil.addEventListener("click", function() {
        window.location.href = "/index.html"
    })
});