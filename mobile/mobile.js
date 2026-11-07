let answerCount = 0;
const MAX_ANSWERS = 3;
let nickname = "";

// Функция смены экранов (ваша родная)
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// Шаг 1 -> Шаг 2
function stepCookie() {
    nickname = document.getElementById('nicknameInput').value.trim();
    if (!nickname) {
        alert("Введите никнейм!");
        return;
    }
    
    // СОХРАНЯЕМ ИМЯ В ПАМЯТЬ
    localStorage.setItem('spk_user', nickname);
    
    showScreen('screen-cookie');
}

// Шаг 2 -> Шаг 3
function stepWait() {
    showScreen('screen-wait');
    setTimeout(() => {
        showScreen('screen-mood');
    }, 3000);
}

// Отправка слова
function submitMood() {
    const moodInput = document.getElementById('moodInput');
    const mood = moodInput.value.trim();

    if (!mood) {
        alert("Введите настроение!");
        return;
    }

    // 1. Получаем текущие слова из памяти (или создаем пустой список)
    let allWords = JSON.parse(localStorage.getItem('spk_words') || "[]");
    
    // 2. Добавляем новое слово
    allWords.push({
        text: mood,
        author: nickname,
        status: "pending", // Ждет проверки модератора
        id: Date.now() // Уникальный ID
    });
    
    // 3. Сохраняем обратно
    localStorage.setItem('spk_words', JSON.stringify(allWords));

    // Очищаем поле и считаем лимит
    moodInput.value = '';
    answerCount++;
    document.getElementById('limit-text').textContent = `Осталось попыток: ${MAX_ANSWERS - answerCount}`;

    if (answerCount >= MAX_ANSWERS) {
        showScreen('screen-limit');
    } else {
        showScreen('screen-thanks');
    }
}

// Отправка реакций (просто алерт)
function sendReaction(emoji) {
    alert(`Вы отправили реакцию: ${emoji}`);
}

// Обработка потери связи
window.addEventListener('offline', () => {
    alert("Нет связи! Перезагрузите страницу.");
});