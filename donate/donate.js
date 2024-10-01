window.initializeDonate = function() {
    const donateItems = document.querySelectorAll('.don-item');
    const contentContainer = document.getElementById('contents');
    const overlayContainer = document.getElementById('overlay-container');
    const overlayContent = document.getElementById('overlay-content');
    const closeButton = document.getElementById('close-button');

    // Закриття модального вікна
    closeButton.addEventListener('click', () => {
        overlayContainer.style.display = 'none';
        overlayContent.innerHTML = ''; // Очищуємо контент модального вікна
    });

    // Додаємо подію кліку на кожен донат-елемент
    donateItems.forEach(item => {
        item.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            
            // Якщо шлях містить "modal", відкриваємо модальне вікно
            if (target.includes('modal')) {
                overlayContainer.style.display = 'block'; // Показуємо модальне вікно
                loadContent(target, overlayContent); // Завантажуємо контент у модальне вікно
            } else {
                // В іншому випадку завантажуємо контент в основну частину сторінки
                loadContent(target, contentContainer);
            }

            // Додаємо клас активності до натиснутого елемента
            donateItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            document.getElementById('overlay-container').classList.add('active');
        });
        
    });

    // Функція для завантаження контенту
    function loadContent(url, container) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                container.innerHTML = data; // Завантажуємо контент у вказаний контейнер
                executeScripts(container);  // Викликаємо скрипти після завантаження
            })
            .catch(error => {
                console.error('Error loading content:', error);
                container.innerHTML = '<p>Error loading content.</p>';
            });
    }

    // Функція для виконання скриптів, які завантажені динамічно
    function executeScripts(container) {
        const scripts = container.querySelectorAll('script');
        scripts.forEach(script => {
            const newScript = document.createElement('script');
            newScript.textContent = script.textContent;
            document.body.appendChild(newScript).parentNode.removeChild(newScript); // Додаємо та видаляємо скрипт для його виконання
        });
    }
};

// Ініціалізуємо події при завантаженні сторінки
window.initializeDonate();
