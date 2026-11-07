const cloudContainer = document.getElementById('word-cloud');

function updateCloud() {
    // Читаем одобренные слова из памяти
    let words = JSON.parse(localStorage.getItem('spk_words') || "[]");
    let approved = words.filter(w => w.status === "approved");

    cloudContainer.innerHTML = '';

    // Считаем частоту слов (чтобы делать их больше)
    let counts = {};
    approved.forEach(w => {
        let text = w.text.toLowerCase();
        counts[text] = (counts[text] || 0) + 1;
    });

    // Превращаем в массив и сортируем по частоте
    let sortedWords = Object.keys(counts).map(text => {
        return { text: text, count: counts[text] };
    }).sort((a, b) => b.count - a.count);

    // Рисуем слова
    sortedWords.forEach((word, index) => {
        const span = document.createElement('span');
        
        // Определяем размер в зависимости от частоты
        let sizeClass = "size-4";
        if (word.count > 5) sizeClass = "size-1";
        else if (word.count > 3) sizeClass = "size-2";
        else if (word.count > 1) sizeClass = "size-3";

        span.className = `word-item ${sizeClass}`;
        span.textContent = word.text;
        span.style.animationDelay = `${index * 0.1}s`;
        
        cloudContainer.appendChild(span);
    });
}

// Обновляем каждые 2 секунды
setInterval(updateCloud, 2000);
updateCloud(); // Первый запуск