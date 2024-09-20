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

    function setActiveButtonDefault() {
        // Спочатку прибираємо клас "active" з усіх кнопок
        navItems.forEach(item => item.classList.remove('active'));
        
        // Додаємо клас "active" до кнопки "Home"
        const homeButton = navItems[0];
        homeButton.classList.add('active');
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
    setActiveButtonDefault()
    
    // Function to get URL parameters
    function getUrlParams() {
        const currentUrl = new URL(window.location.href);
        const urlParams = new URLSearchParams(currentUrl.search);
        return {
            vicPercentage: urlParams.get('vicPercentage'),
            uahPercentage: urlParams.get('uahPercentage')
        };
    }

    // Function to update progress bars
    function updateProgressBars() {
        const { vicPercentage, uahPercentage } = getUrlParams();

        const vicProgress = document.getElementById('vic-progress');
        const uahProgress = document.getElementById('uah-progress');

        vicProgress.style.width = vicPercentage + '%';
        uahProgress.style.width = uahPercentage + '%';
    }

    // Call the updateProgressBars function when the page loads
    window.addEventListener('load', updateProgressBars);
});


