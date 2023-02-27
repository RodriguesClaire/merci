//Unchecked when one check
function checkOnlyOne(checkbox) {
    var checkboxes = document.getElementsByClassName('formules');
    for (var i=0; i<checkboxes.length; i++) {
        if (checkboxes[i] != checkbox) {
            checkboxes[i].checked = false;
        }
    }
}

//Champs formulaire obligatoire
function validateForm() {
    var name = document.getElementById("name").value;
    var entreprise = document.getElementById("entreprise").value;
    var email = document.getElementById("email").value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var objet = document.getElementById("objet").value;
    var message = document.getElementById("message").value;
  
    if (name == "" || entreprise == "" || objet == "" || message == "") {
      alert("Veuillez remplir tous les champs obligatoires.");
      return false;
    }

    if (email == "" || !emailPattern.test(email)) {
        alert("Veuillez remplir le champ e-mail avec une adresse e-mail valide.");
        return false;
    }
  }


// // Affichage du champ de saisie "Autre" si l'option correspondante est sélectionnée
// document.getElementById("subject").addEventListener("change", function() {
//     var autreOption = document.getElementById("autreOption");
//     if (this.value === "autre") {
//     autreOption.style.display = "block";
//     autreOption.querySelector("input").required = true;
//     } else {
//     autreOption.style.display = "none";
//     autreOption.querySelector("input").required = true;
//     }
// });

// // Interception de la soumission du formulaire
// document.getElementById("myForm").addEventListener("submit", function(e) {
//     e.preventDefault(); // Empêcher la soumission normale du formulaire

//         // Envoi des données via AJAX
//     var xhr = new XMLHttpRequest();
//     xhr.open('POST', 'https://formsubmit.co/bf9ac92fa15c4b05f015890ea0e58088');
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         // Affichage du message de confirmation
//         document.getElementById("message").textContent = "Message bien envoyé.";

//         // Réinitialisation du formulaire
//         document.getElementById("myForm").reset();
//         document.getElementById("autreOption").style.display = "none";
//     }
//     };
//     xhr.send(JSON.stringify(formData));
// });