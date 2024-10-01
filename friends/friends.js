// Функція для отримання параметрів з URL
function getURLParams() {
    const params = new URLSearchParams(window.location.search);
    return Object.fromEntries(params.entries());
}

// Функція для динамічного створення елементів на основі параметрів
function populateData() {
    const params = getURLParams();
    const container = document.getElementById('data-container');
    
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
         row.classList.add('data-container'); // Додаємо клас для підкреслення
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
