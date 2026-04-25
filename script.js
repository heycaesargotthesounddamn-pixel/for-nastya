const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const container = document.getElementById('container');
const musicToggle = document.getElementById('musicToggle');
const backgroundMusic = document.getElementById('backgroundMusic');

let isLetterOpen = false;
let isMusicPlaying = false;

envelope.addEventListener('click', () => {
    if (!isLetterOpen) {
        envelope.classList.add('opening');

        setTimeout(() => {
            envelope.style.opacity = '0';
            envelope.style.transform = 'scale(0.8)';

            setTimeout(() => {
                envelope.style.display = 'none';
                letter.classList.remove('hidden');

                setTimeout(() => {
                    letter.classList.add('show');
                }, 50);
            }, 600);
        }, 600);

        isLetterOpen = true;
    }
});

musicToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        musicToggle.classList.remove('playing');
        musicToggle.querySelector('.music-text').textContent = 'Включить музыку';
        isMusicPlaying = false;
    } else {
        backgroundMusic.play().catch(err => {
            console.log('Автовоспроизведение заблокировано браузером');
        });
        musicToggle.classList.add('playing');
        musicToggle.querySelector('.music-text').textContent = 'Выключить музыку';
        isMusicPlaying = true;
    }
});

backgroundMusic.volume = 0.3;