const motivationalMessages = [
    'Отличное начало к офигенной сумке)',
    'Настрой достойный восхищения ♥',
    'Не сдавайся, ты управляешь своей жизнью, а не привычки',
    'Настоящая свобода начинается там, где заканчивается зависимость.',
    '«Взрослые забыли одну истину: что важно по-настоящему» — курение не приносит счастья. Здоровье, свобода от зависимости и искренняя радость жизни — вот что действительно важно',
    'Каждый раз, когда ты выбираешь свободу от зависимости, ты становишься ближе к своей версии Сан-Джуниперо — месту, где жизнь полна свежести и новых возможностей.',
    'Так много?! Неужели стресс исчез из твоей жизни что ты так смогла?)',
    'Ты пришёл в этот мир, чтобы быть счастливым, а не зависимым',
    'Папа бы тобой гордился.',
    '«Ищи свет даже тогда, когда вокруг темно» — путь к свободе и здоровью может быть трудным, но каждый шаг на этом пути — свет, который ты выбираешь сам.',
    '11 дней - когда такое было последний раз?) Молодец ♥',
    '«Ты навсегда в ответе за тех, кого приручил» - будь другом своему телу и позаботься о нем, как маленький принц заботился о своей розе',
    'Солнышко, каждый день - важен, чем больше таких дней - тем меньше дней зависимости',
    '2 недели! Сумка обещает быть неприлично дорогой))',
    'Внутри тебя есть 2 части, светлая и темная. Какую будешь кормить - та и победит. Уже 15 дней ты выбираешь свет.',
    'Каждый шаг - приближает тебя к лучшей версии себя!',
    'Забота о себе - это не временный выбор, а образ жизни, у тебя отлично получается)',
    '18 дней - есть мнение что это то количество дней, которое необходимо для отказа от привычкию Поздравляю)',
    '«Как и Йорки, ты можешь найти своё Сан-Джуниперо — место, где нет боли или сожалений» — оставь позади привычку, которая приносит только вред, и найди путь к истинному спокойствию.',
    '20 дней. Юля, как тебе свобода на вкус? Люблю ♥',
    'Настоящий выбор — это не то, что диктует привычка, а то, что идет от сердца',
    '22 дня - Увииииии, это же подвиг : ) ',
    'А сейчас пойдут какие-то откровения — красивая цифра для начала откровений. Я вот пишу тебе послания, мотивашки, но они превращаются в набор лозунгов. На мой взгляд, привычку ты уже практически победила ♥',
    'И что же? Курить не хочется, магний не дает сорваться. Ты уже большая молодец, ты ведь победила! Я думаю, это уже какая-то точка невозврата. Важно понимать, как ты можешь вернуться к курению.',
    'К курению мы можем прийти, если выпьем или будем на тусовках. В этом, в принципе, нет ничего страшного. Главное — чтобы это не вошло в привычку. Зона риска — отпуск с девочками',
    'С другой стороны, может нам просто нужно вместе ездить в отпуска, и я тебе не дам сорваться своей ЛЮБОВЬЮ?♥',
    'Буся, ты большой молодец! Ты победила, могу точно сказать. Как будто сейчас уже нет какой-то дороги назад, уж точно не туда, где ты уже была с этой привычкой.',
    '28 дней, красивая дата красивой девочки) Отметим завтра с пироженкой в хлебнике?)',
    'Юля улыбнись! Жизнь прекрасна в мелочах, мы видим то, что хотим увидеть и на чем фокусируемся♥',
    'Тяжелые периоды в жизни приходят и уходят, но есть вещи более монументальные.',
    'Поддавшись импульсивным желаниям, мы покажем нашу слабость, а мы сильыне котики♥)',
    'Сегодня был очень теплый день, мур Люля! Этот прекрасный день точно не для курения!',
    'Люля мурмуля, сегодня подружный день, надеюсь что мы также решительны! 32 дня!',
    'Юля я тебя поддержу во всех твоих начинаниях, на корпоратив мы не пьем))',
    'Ты уже сделала больше, чем думаешь, и можешь намного больше, чем представляешь. Просто иди вперёд — результаты удивят всех!',
    'Юля, ты та - кто может зажечь свет в любой темноте. У тебя внутри больше силы и энергии, чем кажется. Ты прекрасна, и ты способна на всё!',
    'Серьезная мысль на подумать. А кто больше тебе друг, с кем получается выстраивать деструктивное но веселое или светлое и прекрасное но.. ?) Я про курение и алкоголь)',
    'Иногда жизнь бросает вызовы, чтобы напомнить, насколько ты сильна. Ты точно справишься с этим — ведь ты уже столько раз доказала это себе!',
    'Ты — источник силы и вдохновения для себя и тех, кто тебя окружает. Никогда не сомневайся в своей ценности♥',
    'Юля улыбнись! Жизнь прекрасна в мелочах, мы видим то, что хотим увидеть и на чем фокусируемся♥',
];

let daysWithoutSmoke = Number(localStorage.getItem('daysWithoutSmoke')) || 0;
let pressCount = Number(localStorage.getItem('pressCount')) || 0;
let messageIndex = Number(localStorage.getItem('messageIndex')) || 0;

// Функция для обновления счётчика и показа сообщения
function updateCounter() {
    document.getElementById('daysWithoutSmoke').textContent = daysWithoutSmoke;
}

// Показ соответствующего сообщения при загрузке страницы
function showMotivationalMessage() {
    if (daysWithoutSmoke > 0) {
        const motivationalMessageDiv = document.getElementById('motivationalMessage');
        motivationalMessageDiv.textContent = motivationalMessages[messageIndex - 1];
        console.log(motivationalMessageDiv, messageIndex);
        motivationalMessageDiv.style.display = 'block';
    }
}

// Обработчик для кнопки "+1 день"
document.getElementById('incrementButton').addEventListener('click', () => {
    daysWithoutSmoke++;
    pressCount++;
    localStorage.setItem('daysWithoutSmoke', daysWithoutSmoke);
    localStorage.setItem('pressCount', pressCount);
    localStorage.setItem('lastPressDate', new Date().toDateString());

    // Показываем мотивационное сообщение по порядку
    const motivationalMessageDiv = document.getElementById('motivationalMessage');
    motivationalMessageDiv.textContent = motivationalMessages[messageIndex];
    motivationalMessageDiv.style.display = 'block';

    // Увеличиваем индекс и обнуляем, если достигнут конец массива
    messageIndex = (messageIndex + 1) % motivationalMessages.length;
    localStorage.setItem('messageIndex', messageIndex);

    // Скрываем сообщение о сбросе, если было
    document.getElementById('resetMessage').style.display = 'none';

    updateCounter();
});

// Обработчик для кнопки сброса
document.getElementById('resetButton').addEventListener('click', () => {
    daysWithoutSmoke = 0;
    pressCount = 0;
    messageIndex = 0; // Сброс индекса сообщений
    localStorage.setItem('daysWithoutSmoke', daysWithoutSmoke);
    localStorage.setItem('pressCount', pressCount);
    localStorage.setItem('messageIndex', messageIndex);

    // Скрываем мотивационное сообщение
    document.getElementById('motivationalMessage').style.display = 'none';

    // Показываем сообщение о сбросе
    document.getElementById('resetMessage').style.display = 'block';

    updateCounter();
});

// Инициализация счётчика и кнопки
updateCounter();
showMotivationalMessage(); // Показ сообщения при загрузке страницы, если есть дни

