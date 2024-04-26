// Récupère tous les éléments h2
var toggles = document.querySelectorAll('.toggle');

// Parcourt tous les éléments h2
toggles.forEach(function(toggle) {
    // Ajoute un écouteur d'événements 'click' à chaque h2
    toggle.addEventListener('click', function() {
        // Récupère l'élément p correspondant à ce h2
        var content = this.nextElementSibling;

        // Vérifie si l'élément p est actuellement visible
        if (content.style.display === 'none') {
            // Si oui, l'affiche en changeant sa propriété display à 'block'
            content.style.display = 'block';
        } else {
            // Sinon, le cache en changeant sa propriété display à 'none'
            content.style.display = 'none';
        }
    });

    // Ajoute un écouteur d'événements 'mouseenter' pour changer le curseur lorsque la souris passe sur les h2
    toggle.addEventListener('mouseenter', function() {
        // Change le curseur en pointer
        this.style.cursor = 'pointer';
    });

    // Ajoute un écouteur d'événements 'mouseleave' pour restaurer le curseur lorsque la souris quitte les h2
    toggle.addEventListener('mouseleave', function() {
        // Restaure le curseur par défaut
        this.style.cursor = 'auto';
    });
});
