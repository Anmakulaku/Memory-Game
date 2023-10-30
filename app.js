const emoticons = ['❤️', '😁', '😂', '🎃', '🤩', '🎵', '🎄', '😇', '❤️', '😁', '😂', '🎃', '🤩', '🎵', '🎄', '😇'];

let shuffleEmoticons = [...emoticons].sort(() => (Math.random() - 0.5));

for (let i=0; i<emoticons.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuffleEmoticons[i];

    box.onclick = function() {
        this.classList.add('boxOpen')
        const openCards = document.querySelectorAll('.boxOpen');
        setTimeout(() => {
            if (openCards.length > 1) {
                if (openCards[0].innerHTML === openCards[1].innerHTML) {
                    openCards.forEach((item) => {
                        item.classList.add('boxMatched');
                        console.log('Znaleziono parę!');
                    });
                    openCards.forEach((item) => {
                        item.classList.remove('boxOpen');
                        console.log('Usunięto klasę boxOpen');
                    });
                    if(document.querySelectorAll(".boxMatched").length === shuffleEmoticons.length) {
                        const modal = document.querySelector('.modal');
                        const closeModalButton = document.querySelector('.closeModal');

                        closeModalButton.addEventListener('click', () => {
                            modal.classList.add('hidden');
                        });

                        modal.classList.remove('hidden');
                    } 
                }  else {
                    openCards.forEach((item) => {
                        item.classList.remove('boxOpen');
                        console.log('Nie wiadomo');
                    });
                }
            } 
        }, 600);
    }
    document.querySelector('.game__content').appendChild(box);
};