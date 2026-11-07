<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Участник - СПК</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- ЭКРАН 1: Ввод ответа -->
    <div id="screen-input" class="mobile-card">
        <div class="content">
            <h2>Опишите свое настроение</h2>
            <p>Отправьте до 3-х ответов</p>
            
            <input type="text" id="moodInput" placeholder="Ваш ответ...">
            <button class="btn btn-orange" onclick="submitAnswer()">Отправить</button>
            
            <!-- Панель реакций -->
            <div class="reactions">
                <button class="reaction-btn" onclick="sendReaction('❤️')">❤️</button>
                <button class="reaction-btn" onclick="sendReaction('🔥')">🔥</button>
                <button class="reaction-btn" onclick="sendReaction('👍')">👍</button>
            </div>
        </div>
    </div>

    <!-- ЭКРАН 2: Спасибо -->
    <div id="screen-success" class="mobile-card hidden">
        <div class="content">
            <div class="status-icon">✅</div>
            <h2>Спасибо!</h2>
            <p>Твой ответ уже на экране</p>
            <button class="btn btn-orange" onclick="resetToInput()">Написать еще</button>
        </div>
    </div>

    <!-- ЭКРАН 3: Лимит исчерпан -->
    <div id="screen-limit" class="mobile-card hidden">
        <div class="content">
            <div class="status-icon">🚫</div>
            <h2>Лимит исчерпан</h2>
            <p>Вы отправили максимальное количество ответов</p>
            <div class="reactions">
                <button class="reaction-btn" onclick="sendReaction('❤️')">❤️</button>
                <button class="reaction-btn" onclick="sendReaction('🔥')">🔥</button>
                <button class="reaction-btn" onclick="sendReaction('👍')">👍</button>
            </div>
        </div>
    </div>

    <!-- ЭКРАН 4: Нет связи -->
    <div id="screen-offline" class="mobile-card hidden" style="background-color: #333;">
        <div class="content">
            <div class="status-icon">📶</div>
            <h2>Нет связи</h2>
            <p>Пожалуйста, перезагрузите страницу</p>
        </div>
    </div>

    <script src="participant.js"></script>
</body>
</html>