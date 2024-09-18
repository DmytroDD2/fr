// script.js



document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');

    // Функція для завантаження контенту
    function loadContent(page) {
        fetch(page)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.text();
            })
            .then(data => {
                document.getElementById('content').innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading content:', error);
            });
    }

    // Функція для встановлення активної кнопки
    function setActiveButton(Event) {
        // Спочатку прибираємо клас "active" з усіх кнопок
        navItems.forEach(item => item.classList.remove('active'));
        
        // Додаємо клас "active" до натиснутої кнопки
        event.currentTarget.classList.add('active');
    }

    // Додаємо обробник подій для кожної кнопки
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const page = item.getAttribute('data-target');
            loadContent(page);
            setActiveButton(Event); // Встановлюємо активну кнопку
        });
    });

    // Завантажуємо домашню сторінку за замовчуванням
    
    loadContent('home/home.html');
    // loadContent(navItems[0].getAttribute('home/home.html'));
});