let flashcards = document.querySelector('.flashcards');
let tombolTambah = document.getElementById('add-card');
let tombolHapus = document.getElementById('delete-card');
let timer = document.getElementById('timer');

let cards = [];


function buatFlashcard(depan, belakang) {
    let flashcard = document.createElement('div');
    flashcard.classList.add('flashcard');

    let cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');

    let cardDepan = document.createElement('div');
    cardDepan.classList.add('card-depan');
    cardDepan.textContent = depan;

    let cardBelakang = document.createElement('div');
    cardBelakang.classList.add('card-belakang');
    cardBelakang.textContent = belakang;

    cardInner.appendChild(cardDepan);
    cardInner.appendChild(cardBelakang);

    flashcard.appendChild(cardInner);
    flashcards.appendChild(flashcard);

    cards.push({ depan, belakang });
}


function hapusFlashcard() {
    if (cards.length > 0) {
        flashcards.removeChild(flashcards.lastChild);
        cards.pop();
    }
}

tombolTambah.addEventListener('click', function() {
    let depan = prompt('Kartu Bagian Depan:');
    let belakang = prompt('Kartu Bagian Belakang:');
    buatFlashcard(depan, belakang);
});

tombolHapus.addEventListener('click', function() {
    hapusFlashcard();
});


let time = 25 * 60; // 25 menit di detik

function updateTimer() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    timer.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    if (time > 0) {
        time--;
        setTimeout(updateTimer, 1000);
    }
}

updateTimer();
