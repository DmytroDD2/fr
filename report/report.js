// Функція для отримання параметрів з URL
function getURLParams() {
    const params = new URLSearchParams(window.location.search);
    return Object.fromEntries(params.entries());
}

// Функція для динамічного створення елементів на основі параметрів
function populateData() {
    const params = getURLParams();
    const container = document.getElementById('data-history');
    
    // Змінні для лічильників рівнів
    let levelIndex = 1;

    while (params[`level${levelIndex}`]) {
        // Отримуємо дані для поточного рівня
        const level = params[`levels${levelIndex}`];
        const coins1 = params[`coins1_${levelIndex}`];
        const coins2 = params[`coins2_${levelIndex}`];
        const extraCoins = params[`extraCoins${levelIndex}`];
        
        // Створюємо HTML-елементи для поточного рівня
        const row = document.createElement('div');
        row.classList.add('data-history', 'underlined'); // Додаємо клас для підкреслення
       
        row.innerHTML = ` 
            <div style="display: flex; justify-content: space-between;">

               <div style="flex: 1; text-align: center;">Level: ${level}</div>
               <div style="flex: 1; text-align: center;">Coins 1: ${coins1}</div>
               <div style="flex: 1; text-align: center;">Coins 2: ${coins2}</div>
               <div style="flex: 1; text-align: center;">Extra Coins: ${extraCoins}</div>
            </div> 
        `;
        
        // Додаємо створений рядок у контейнер
        container.appendChild(row);  
        // Збільшуємо індекс для наступного рівня
        levelIndex++;
    }
}
populateData()

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
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-report');
    
    // Завантаження HTML вмісту в модальне тіло
    fetch(filePath)
        .then(response => response.text())
        .then(html => {
            modalBody.innerHTML = html;  // Вставляємо HTML в модальне тіло
            modal.style.display = 'flex';  // Показуємо модальне вікно
        })
        .catch(error => console.error('Помилка завантаження HTML:', error));
}


