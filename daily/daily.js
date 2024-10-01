// Функція для завантаження HTML-файлу та вставки його в контейнер
function loadHtmlContent(element, filePath) {
    const contentDiv = element.querySelector('.content');

    // Якщо контент вже завантажений і видимий, приховуємо його
    if (contentDiv.style.display === 'block') {
        contentDiv.style.display = 'none';
        element.classList.remove('active');
    } else {
        // Завантажуємо HTML лише, якщо він ще не завантажений
        if (contentDiv.innerHTML === '') {
            fetch(filePath)
                .then(response => response.text())
                .then(html => {
                    contentDiv.innerHTML = html;  // Вставляємо HTML вміст
                    contentDiv.style.display = 'block';  // Показуємо контент
                    element.classList.add('active');  // Додаємо клас активного елемента
                })
                .catch(error => console.error('Помилка завантаження HTML:', error));
        } else {
            // Показуємо вже завантажений контент
            contentDiv.style.display = 'block';
            element.classList.add('active');
        }
    }
}
