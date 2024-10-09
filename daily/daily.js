document.addEventListener('DOMContentLoaded', function() {
    // Викликаємо функцію для отримання даних з URL при завантаженні сторінки
    handleComboDataFromURL();
    handleDaysAndVcFromURL();
});

// Функція для відкриття модального вікна та завантаження HTML
function openModal(filePath) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');

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

// Функція для закриття модального вікна при натисканні на .close-button-daily або кнопку закриття
document.getElementById('close-button-daily').addEventListener('click', function(event) {
    if (event.target.id === 'close-button-daily') {
        event.stopPropagation();  // Зупиняємо подальше поширення події натискання
    }
    const modal = document.getElementById('modal');
    modal.style.display = 'none';  // Приховуємо модальне вікно
});

// Функція для отримання даних з URL та оновлення значень комбо у модальному вікні
function handleComboDataFromURL() {
    // Отримуємо параметри з URL
    const urlParams = new URLSearchParams(window.location.search);

    // Витягуємо значення для daily, weekly і monthly
    const dailyCombo = urlParams.get('daily');
    const weeklyCombo = urlParams.get('weekly');
    const monthlyCombo = urlParams.get('monthly');
    const days = urlParams.get('days');
    const vc = urlParams.get('vc');

    // Якщо значення є в URL, то підставляємо їх у відповідні елементи
    if (dailyCombo) {
        const dailyElement = document.getElementById('daily-com');
        if (dailyElement) {
            dailyElement.textContent = `+${dailyCombo}`;
        }
    }

    if (weeklyCombo) {
        const weeklyElement = document.getElementById('weekly-com');
        if (weeklyElement) {
            weeklyElement.textContent = `+${weeklyCombo}`;
        }
    }

    if (monthlyCombo) {
        const monthlyElement = document.getElementById('monthly-com');
        if (monthlyElement) {
            monthlyElement.textContent = `+${monthlyCombo}`;
        }
    }

    if (days) {
        const daysElement = document.getElementById('days');
        if (daysElement) {
            daysElement.textContent = `${days} Days`;
        }
    }

    if (vc) {
        const vcElement = document.getElementById('Vc');
        if (vcElement) {
            vcElement.textContent = `${vc} Vc`;
        }
    }
}



