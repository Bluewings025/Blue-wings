 // Sélectionnez tous les éléments de type input de type radio
 const radioInputs = document.querySelectorAll('input[type="radio"]');

 // Sélectionnez le bouton "Résultat"
 const resultatButton = document.querySelector('button:first-of-type');

 // Ajoutez un gestionnaire d'événements au bouton "Résultat"
 resultatButton.addEventListener('click', calculerScore);

 function calculerScore() {
     let score = 0;
     let resultatText = "";

     // Parcourez tous les éléments de type input de type radio
     radioInputs.forEach(input => {
         if (input.checked) {
             if (input.value === "1") {
                 score++;
                 input.parentElement.classList.add("reponse-correcte");
                 
             } else {
                 input.parentElement.classList.add("reponse-incorrecte");
                 
                 const reponseCorrecte = input.parentElement.querySelector('.reponse-correcte');
                 reponseCorrecte.style.display = "inline"; // Affichez la réponse correcte
             }
         }
     });

     // Affichez le score et les résultats en alerte
     resultatText += `Votre note : ${score}/12`;

     alert(resultatText);
 }








