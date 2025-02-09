const buttonEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");

buttonEl.addEventListener("click", () => {
    diceEl.classList.add("roll-animation");

    // Retirer l'animation après 1 seconde pour pouvoir la relancer
    setTimeout(() => {
        diceEl.classList.remove("roll-animation");
        // Générer un nombre aléatoire entre 1 et 6
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        diceEl.textContent = getDiceFace(randomNumber);
    }, 1000);
});

function getDiceFace(number) {
    switch (number) {
        case 1: return '⚀';
        case 2: return '⚁';
        case 3: return '⚂';
        case 4: return '⚃';
        case 5: return '⚄';
        case 6: return '⚅';
        default: return '🎲';
    }
}