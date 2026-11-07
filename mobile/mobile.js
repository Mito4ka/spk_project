let answerCount = 0;
const MAX_ANSWERS = 3;

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function startGame() {
    const nickname = document.getElementById('nicknameInput').value.trim();
    if (!nickname) {
        alert("Введите никнейм!");
        return;
    }
    // Переход к вводу настроения
    showScreen('screen-mood');
}

function submitMood() {
    const moodInput = document.getElementById('moodInput');
    const mood = moodInput.value.trim();

    if (!mood) {
        alert("Введите настроение!");
        return;
    }

    // Имитация отправки на сервер
    console.log("Отправлено слово:", mood);
    
    // Очищаем поле
    moodInput.value = '';
    answerCount++;

    // Проверяем лимит
    if (answerCount >= MAX_ANSWERS) {
        showScreen('screen-limit');
    } else {
        showScreen('screen-thanks');
    }
}

function sendReaction(emoji) {
    // Имитация отправки реакции
    console.log("Отправлена реакция:", emoji);
    // Здесь в будущем будет код для отправки конфетти на большой экран
}

// Проверка на потерю связи (для демонстрации экрана "Нет связи")
window.addEventListener('offline', () => {
    showScreen('screen-offline');
});
window.addEventListener('online', () => {
    showScreen('screen-mood');
});