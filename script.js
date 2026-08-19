const formulaire = document.querySelector("form");

formulaire.addEventListener("submit", function(event) {
    event.preventDefault();

    alert(" Merci ! Votre demande a bien été prise en compte. ✅");
});