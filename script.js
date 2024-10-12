// script.js

document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item', );

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
    
                // Замінюємо розширення на .js і підключаємо скрипт
                const jsFile = page.replace('.html', '.js');
                const script = document.createElement('script');
                script.src = jsFile;
                document.body.appendChild(script);
    
                // Оновлюємо прогрес-бари на основі параметрів URL
                const { vicPercentage, uahPercentage } = getUrlParams();
                const vicProgress = document.getElementById('vic-progress');
                const uahProgress = document.getElementById('uah-progress');
    
                if (vicProgress && uahProgress) {
                    vicProgress.style.width = vicPercentage + '%';
                    uahProgress.style.width = uahPercentage + '%';
                }
            })
            .catch(error => {
                console.error('Error loading content:', error);
            });
    }

    function setActiveButtonDefault() {
        navItems.forEach(item => item.classList.remove('active'));
        const homeButton = navItems[0];
        homeButton.classList.add('active');
    }

    // Функція для встановлення активної кнопки
    function setActiveButton(event) {
        navItems.forEach(item => item.classList.remove('active'));
        event.currentTarget.classList.add('active');
    }

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const page = item.getAttribute('data-target');
            loadContent(page);
            setActiveButton(event);
        });
    });
    loadContent('report/report.html');
    // loadContent('home/home.html');
    // loadContent('donate/donate.html');
    setActiveButtonDefault();

    function getUrlParams() {
        const currentUrl = new URL(window.location.href);
        const urlParams = new URLSearchParams(currentUrl.search);
        return {
            vicPercentage: urlParams.get('vicPercentage'),
            uahPercentage: urlParams.get('uahPercentage')
        };
    }

    function updateProgressBars() {
        const { vicPercentage, uahPercentage } = getUrlParams();
        const vicProgress = document.getElementById('vic-progress');
        const uahProgress = document.getElementById('uah-progress');

        if (vicProgress && uahProgress) {
            vicProgress.style.width = vicPercentage + '%';
            uahProgress.style.width = uahPercentage + '%';
        }
    }

    window.addEventListener('load', updateProgressBars);
});



