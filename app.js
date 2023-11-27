const emoticons = ['❤️', '😁', '😂', '🎃', '🤩', '🎵', '🎄', '😇', '❤️', '😁', '😂', '🎃', '🤩', '🎵', '🎄', '😇'];

let shuffleEmoticons = [...emoticons].sort(() => (Math.random() - 0.5));

const gameContent = document.querySelector('.game__content');
const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.closeModal');
const turnsCounter = document.getElementById('turnsCounter');

let clickCount = 0;
let openCards = [];

closeModalButton.addEventListener('click', () => {
    modal.classList.add('hidden');
});

gameContent.addEventListener('click', (event) => {
    const clickedElement = event.target;

    if (clickedElement.classList.contains('item') && !clickedElement.classList.contains('boxOpen') && openCards.length < 2) {
        clickedElement.classList.add('boxOpen');
        openCards.push(clickedElement);
        if (openCards.length === 2) {
            clickCount++;
            turnsCounter.textContent = clickCount;
            setTimeout(() => checkMatch(), 300);
        }
    }
});

function checkMatch() {
    const [firstCard, secondCard] = openCards;
    if (firstCard.innerHTML === secondCard.innerHTML) {
        openCards.forEach((item) => {
            item.classList.add('boxMatched');
        });

        openCards = [];
        if (document.querySelectorAll(".boxMatched").length === shuffleEmoticons.length) {
            modal.classList.remove('hidden');
        }
    } else {
        openCards.forEach((item) => {
            item.classList.remove('boxOpen');
        });
        openCards = [];
    }
}

for (let i = 0; i < emoticons.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuffleEmoticons[i];
    gameContent.appendChild(box);
}
