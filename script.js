// script.js



const navItems = document.querySelectorAll('.nav-item');

// Функція для встановлення активної кнопки
function setActiveButton(event) {
    // Спочатку прибираємо клас "active" з усіх кнопок
    navItems.forEach(item => item.classList.remove('active'));
    
    // Додаємо клас "active" до натиснутої кнопки
    event.currentTarget.classList.add('active');
}

// Додаємо обробник подій до кожної кнопки
navItems.forEach(item => {
    item.addEventListener('click', setActiveButton);
});