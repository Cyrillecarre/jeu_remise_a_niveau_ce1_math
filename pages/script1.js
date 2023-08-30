document.addEventListener("DOMContentLoaded", function () {
    var premierChiffre = document.getElementById("premierChiffre");
    var operateur = document.getElementById("operateur");
    var deuxiemeChiffre = document.getElementById("deuxiemeChiffre");
    var resultatInput = document.getElementById("resultat");
    var validationButton = document.getElementById("validation");
    var startButton = document.getElementById("start");
    var acceuil = document.getElementById("boutonA")
    var totalEssaiElement = document.getElementById("nbessai")
    var bonneReponseElement = document.getElementById("nbreponse")

    var premier = 0;
    var deuxieme = 0;
    var operateurSymbole = "+";
    var totalEssai = 0;
    var bonneReponse = 0;

    startButton.addEventListener("click", function () {
        premier = Math.floor(Math.random() * 100) + 1;
        deuxieme = Math.floor(Math.random() * 100) + 1;
        var operateurIndex = Math.floor(Math.random() * 3);

        if (operateurIndex === 0) {
            operateurSymbole = "+";
        } else if (operateurIndex === 1) {
            operateurSymbole = "-";
        } else {
            operateurSymbole = "*";
            premier = Math.floor(Math.random() * 5) + 1;
            deuxieme = Math.floor(Math.random() * 5) + 1;
        }

        premierChiffre.textContent = premier;
        operateur.textContent = operateurSymbole;
        deuxiemeChiffre.textContent = deuxieme;
    });

    validationButton.addEventListener("click", function() {
        var resultatAttendu;
        if (operateurSymbole === "+") {
            resultatAttendu = premier + deuxieme;
        } else if (operateurSymbole === "-") {
            resultatAttendu = premier - deuxieme;
        } else {
            resultatAttendu = premier * deuxieme;
        }
        totalEssai ++;

        if (parseInt(resultatInput.value) === resultatAttendu) {
            document.body.style.backgroundColor = "green";
            bonneReponse++;
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
        totalEssaiElement.textContent = totalEssai;
        bonneReponseElement.textContent = bonneReponse;

        if (totalEssai >= 10) {
            alert("Voici ton résultat, tu as: " + bonneReponse + "  Bonnes réponse sur 10!");
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
