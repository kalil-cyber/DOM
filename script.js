document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialiser un compteur à zéro
    let clickCount = 0;

    // 2. Obtenez les éléments HTML
    const clickMeBtn = document.getElementById('clickMeBtn');
    const clickCountParagraph = document.getElementById('clickCount');

    // 3. Fonction pour mettre à jour le nombre de clics
    function updateClickCount() {
        // Incrémenter le compteur à chaque clic
        clickCount += 1;

        // Mettre à jour l'affichage du nombre de clics
        clickCountParagraph.textContent = `Nombre de clics : ${clickCount}`;
    }

    // 4. Ajouter un écouteur d'événement au bouton pour détecter le clic
    clickMeBtn.addEventListener('click', updateClickCount);
});
