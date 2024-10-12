function initializeModalAndCopy() {
    const modal = document.getElementById('modal');
    const button = document.querySelector('.button_down');
    const closeButton = document.getElementById('close-button-daily');
    const copyLinkButton = document.querySelector('.button-cop');

    // Ініціалізація модального вікна
    if (button && modal && closeButton) {
        button.addEventListener('click', () => {
            modal.style.display = 'block';
        });

        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // Ініціалізація функції копіювання
    if (copyLinkButton) {
        copyLinkButton.addEventListener('click', () => {
            const linkToCopy = 'I toot Vainia'; // Замінити на ваш текст для копіювання
            const tempInput = document.createElement('input');
            tempInput.value = linkToCopy;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);

            // Зміна тексту кнопки і кольору
            copyLinkButton.textContent = 'Link copied!';
            copyLinkButton.style.backgroundColor = '#333';

            setTimeout(() => {
                copyLinkButton.textContent = 'Copy link';
                copyLinkButton.style.backgroundColor = ''; // Відновлення кольору фону
                copyLinkButton.style.color = ''; // Відновлення кольору тексту
            }, 2000);
        });
    }
}

// Викликаємо функцію при завантаженні сторінки
initializeModalAndCopy();


// Функція для отримання параметрів з URL
function getURLParams() {
    
    const params = new URLSearchParams(window.location.search);
    return Object.fromEntries(params.entries());
}

// Функція для динамічного створення елементів на основі параметрів
function populateData() {
    const params = getURLParams();
    
    const container = document.getElementById('data-container-content');
    
    // Змінні для лічильників рівнів
    let levelIndex = 1;

    while (params[`level${levelIndex}`]) {
        // Отримуємо дані для поточного рівня
        const level = params[`level${levelIndex}`];
        const coins1 = (params[`coins1_${levelIndex}`] || '0.00M').replace(/[KM]/g, '');
        const coins2 = (params[`coins2_${levelIndex}`] || '0.00M').replace(/[KM]/g, '');
        const extraCoins = (params[`extraCoins${levelIndex}`] || '+ 000K').replace(/[KM]/g,"");
        
        // Створюємо HTML-елементи для поточного рівня
        const row = document.createElement('div');
         row.classList.add('data-container-content', 'underlined-fr'); // Додаємо клас для підкреслення
        row.innerHTML = `
            <div>
                <span id="level">${level}</span> 
                <span id="coins1">${coins1}</span>
                <span id="coins2">${coins2}</span>
                <span id="extraCoins">${extraCoins}</span>
            </div>
            
        `;
        
        // Додаємо створений рядок у контейнер
        container.appendChild(row);
        
        // Збільшуємо індекс для наступного рівня
        levelIndex++;
    }

    
}

// Викликаємо функцію для заповнення даних
populateData();