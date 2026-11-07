// База слов (имитация)
// weight: 1 - самое частое (крупное), 4 - редкое (мелкое)
const wordsData = [
    { text: "Отлично", weight: 1 },
    { text: "Круто", weight: 1 },
    { text: "Супер", weight: 2 },
    { text: "Весело", weight: 2 },
    { text: "Интересно", weight: 2 },
    { text: "Познавательно", weight: 3 },
    { text: "Класс", weight: 3 },
    { text: "Хорошо", weight: 3 },
    { text: "Здорово", weight: 4 },
    { text: "Ура", weight: 4 },
    { text: "Мяу", weight: 4 }
];

const cloudContainer = document.getElementById('word-cloud');

function renderWords() {
    cloudContainer.innerHTML = '';
    
    // Перемешиваем для случайного порядка
    const shuffled = wordsData.sort(() => 0.5 - Math.random());

    shuffled.forEach((word, index) => {
        const span = document.createElement('span');
        span.className = `word-item size-${word.weight}`;
        span.textContent = word.text;
        
        // Задержка появления для плавности
        span.style.animationDelay = `${index * 0.1}s`;
        
        cloudContainer.appendChild(span);
    });
}

// Запуск
renderWords();

// --- ЭФФЕКТ КОНФЕТТИ ---
// При клике в любом месте экрана (для теста)
document.body.addEventListener('click', function(e) {
    confetti({
        particleCount: 50,
        spread: 70,
        origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight },
        colors: ['#E45B32', '#F2C94C', '#ffffff', '#4A5B99']
    });
});