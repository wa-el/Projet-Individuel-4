document.addEventListener("DOMContentLoaded", function() {
    console.log('Page chargée avec succès');
    
    let button = document.createElement("button");
    button.innerText = "Cliquez-moi";
    button.onclick = function() {
        alert("Bouton cliqué !");
    };
    document.body.appendChild(button);
});