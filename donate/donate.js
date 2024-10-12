window.initializeDonate = function() {
    const donateItems = document.querySelectorAll('.don-item');
    const closeButton = document.getElementById('close-button-daily');
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('contents');

   // Функція для закриття модального вікна при натисканні на .close-button-daily або кнопку закриття
    document.getElementById('close-button-daily').addEventListener('click', function(event) {
    if (event.target.id === 'close-button-daily') {
        event.stopPropagation();  // Зупиняємо подальше поширення події натискання
    }
    const modal = document.getElementById('modal');
    modal.style.display = 'none';  // Приховуємо модальне вікно
});

    // Функція для відкриття модального вікна
    function openModal(filePath) {
        // Завантаження HTML вмісту в модальне тіло
        fetch(filePath)
            .then(response => response.text())
            .then(html => {
                modalBody.innerHTML = html;  // Вставляємо HTML в модальне тіло
                modal.style.display = 'flex';  // Показуємо модальне вікно
    
                // Після завантаження HTML обробляємо URL параметри для відображення комбо
                handleComboDataFromURL();
                
            })
            .catch(error => console.error('Помилка завантаження HTML:', error));
    }window.initializeDonate = function() {
        const donateItems = document.querySelectorAll('.don-item');
        const closeButton = document.getElementById('close-button-daily');
        const modal = document.getElementById('modal');
        const modalBody = document.getElementById('contents');
    
       // Функція для закриття модального вікна при натисканні на .close-button-daily або кнопку закриття
        document.getElementById('close-button-daily').addEventListener('click', function(event) {
        if (event.target.id === 'close-button-daily') {
            event.stopPropagation();  // Зупиняємо подальше поширення події натискання
        }
        const modal = document.getElementById('modal');
        modal.style.display = 'none';  // Приховуємо модальне вікно
    });
    
        // Функція для відкриття модального вікна
        function openModal(filePath) {
            // Завантаження HTML вмісту в модальне тіло
            fetch(filePath)
                .then(response => response.text())
                .then(html => {
                    modalBody.innerHTML = html;  // Вставляємо HTML в модальне тіло
                    modal.style.display = 'flex';  // Показуємо модальне вікно
        
                    // Після завантаження HTML обробляємо URL параметри для відображення комбо
                    handleComboDataFromURL();
                })
                .catch(error => console.error('Помилка завантаження HTML:', error));
        }
    
        // Функція для виконання скриптів, які завантажені динамічно
        function executeScripts(container) {
            const scripts = container.querySelectorAll('script');
            scripts.forEach(script => {
                const newScript = document.createElement('script');
                newScript.textContent = script.textContent;
                document.body.appendChild(newScript).parentNode.removeChild(newScript);
            });
        }
    
        // Додаємо слухач кліку на кожен елемент з класом .don-item
        donateItems.forEach(item => {
            item.addEventListener('click', function() {
                const target = this.getAttribute('data-target');
                openModal(target);
            });
        });
    };
    
    // Ініціалізуємо події при завантаженні сторінки
    window.initializeDonate();

    // Функція для виконання скриптів, які завантажені динамічно
    function executeScripts(container) {
        const scripts = container.querySelectorAll('script');
        scripts.forEach(script => {
            const newScript = document.createElement('script');
            newScript.textContent = script.textContent;
            document.body.appendChild(newScript).parentNode.removeChild(newScript);
        });
    }

    // Додаємо слухач кліку на кожен елемент з класом .don-item
    donateItems.forEach(item => {
        item.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            openModal(target);
        });
    });
};

// Ініціалізуємо події при завантаженні сторінки
window.initializeDonate();