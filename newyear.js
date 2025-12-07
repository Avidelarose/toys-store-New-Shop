// Проверяем новогодний период (1 декабря - 31 января)
function isNewYearPeriod() {
    const today = new Date();
    const month = today.getMonth() + 1; // 1-12
    const day = today.getDate(); // 1-31
    
    // Если декабрь (12) или январь (1)
    if (month === 12 || month === 1) {
        return true;
    }
    
    // Для тестирования - раскомментируйте строку ниже
    // return true; // Всегда показывать новогодний стиль
    
    return false;
}

// Создаем снежинки
function createSnowflakes() {
    const snowContainer = document.getElementById('snow-container');
    if (!snowContainer) return;
    
    const snowflakeCount = 100; // Количество снежинок
    
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        
        // Случайный размер
        const size = Math.random() * 8 + 2; // 2-10px
        snowflake.style.width = size + 'px';
        snowflake.style.height = size + 'px';
        
        // Случайная позиция
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.top = Math.random() * -100 + 'px';
        
        // Случайная скорость
        const duration = Math.random() * 5 + 5; // 5-10 секунд
        const delay = Math.random() * 5; // задержка 0-5 секунд
        
        snowflake.style.animation = `snowFall ${duration}s linear infinite ${delay}s`;
        snowflake.style.opacity = Math.random() * 0.7 + 0.3; // 0.3-1
        
        snowContainer.appendChild(snowflake);
    }
}

// Создаем елочки
function createChristmasTrees() {
    // Левая елка
    const treeLeft = document.createElement('div');
    treeLeft.className = 'christmas-tree tree-left';
    treeLeft.innerHTML = `
        <div class="tree-body" style="bottom: 0; border-bottom-color: #2e7d32;"></div>
        <div class="tree-body" style="bottom: 25px; border-bottom-color: #388e3c;"></div>
        <div class="tree-body" style="bottom: 50px; border-bottom-color: #43a047;"></div>
        <div class="trunk" style="position: absolute; bottom: 0; left: 35px; width: 10px; height: 20px; background: #5d4037;"></div>
    `;
    document.body.appendChild(treeLeft);
    
    // Правая елка
    const treeRight = document.createElement('div');
    treeRight.className = 'christmas-tree tree-right';
    treeRight.innerHTML = `
        <div class="tree-body" style="bottom: 0; border-bottom-color: #1b5e20;"></div>
        <div class="tree-body" style="bottom: 30px; border-bottom-color: #2e7d32;"></div>
        <div class="tree-body" style="bottom: 60px; border-bottom-color: #388e3c;"></div>
        <div class="trunk" style="position: absolute; bottom: 0; left: 35px; width: 10px; height: 25px; background: #4e342e;"></div>
    `;
    document.body.appendChild(treeRight);
}

// Создаем гирлянды
function createGarlands() {
    const garland = document.createElement('div');
    garland.id = 'christmas-garland';
    garland.style.cssText = `
        position: fixed;
        top: 10px;
        left: 0;
        width: 100%;
        height: 20px;
        pointer-events: none;
        z-index: 9998;
        display: flex;
        justify-content: space-around;
    `;
    
    const colors = ['#ff0000', '#00ff00', '#ffff00', '#00ffff', '#ff00ff', '#ff9900'];
    
    for (let i = 0; i < 20; i++) {
        const light = document.createElement('div');
        light.style.cssText = `
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${colors[i % colors.length]};
            animation: blink ${Math.random() * 0.5 + 0.5}s infinite alternate;
            box-shadow: 0 0 10px ${colors[i % colors.length]};
        `;
        garland.appendChild(light);
    }
    
    document.body.appendChild(garland);
}

// Создаем новогоднюю шапку для страницы
function createNewYearHeader() {
    const header = document.createElement('div');
    header.id = 'new-year-header';
    header.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: linear-gradient(90deg, #c62828, #2e7d32);
        color: white;
        text-align: center;
        padding: 10px;
        font-size: 16px;
        font-weight: bold;
        z-index: 10001;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        animation: twinkle 2s infinite;
    `;
    header.innerHTML = '🎄 С НАСТУПАЮЩИМ НОВЫМ ГОДОМ! 🎅 Скидки на все товары!';
    document.body.appendChild(header);
    
    // Сдвигаем основной контент вниз
    document.body.style.paddingTop = '50px';
}

// Основная функция применения новогодней темы
function applyNewYearTheme() {
    if (!isNewYearPeriod()) return;
    
    console.log('Применяем новогодний стиль! ❄️🎄');
    
    // Добавляем стили для новогодней темы
    const style = document.createElement('style');
    style.id = 'new-year-styles';
    style.textContent = `
        /* Новогодние анимации */
        @keyframes snowFall {
            0% {
                transform: translateY(-10px) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
        
        @keyframes float {
            0%, 100% {
                transform: translateY(0) rotate(0deg);
            }
            50% {
                transform: translateY(-20px) rotate(5deg);
            }
        }
        
        @keyframes twinkle {
            0%, 100% {
                opacity: 1;
            }
            50% {
                opacity: 0.7;
            }
        }
        
        @keyframes blink {
            0%, 100% {
                opacity: 1;
            }
            50% {
                opacity: 0.5;
            }
        }
        
        /* Фон страницы */
        body.new-year-theme {
            background: linear-gradient(135deg, #0a2e36 0%, #1a3b47 100%) !important;
            position: relative;
        }
        
        /* Снежинки */
        #snow-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 9998;
            overflow: hidden;
        }
        
        .snowflake {
            position: absolute;
            background: white;
            border-radius: 50%;
            pointer-events: none;
            filter: blur(1px);
            animation: snowFall linear infinite;
        }
        
        /* Елочки */
        .christmas-tree {
            position: fixed;
            bottom: 0;
            width: 80px;
            height: 120px;
            pointer-events: none;
            z-index: 9997;
            opacity: 0.8;
        }
        
        .tree-left {
            left: 20px;
        }
        
        .tree-right {
            right: 20px;
        }
        
        .tree-body {
            position: absolute;
            width: 0;
            height: 0;
            border-left: 20px solid transparent;
            border-right: 20px solid transparent;
            border-bottom: 30px solid;
        }
        
        /* Контейнеры на страницах */
        .container.new-year {
            border: 2px solid #c62828 !important;
            box-shadow: 0 0 30px rgba(198, 40, 40, 0.3) !important;
            background: linear-gradient(135deg, #fff8e1, #ffecb3) !important;
            position: relative;
            z-index: 10000;
        }
        
        /* Кнопки в новогоднем стиле */
        .buy-button.new-year, 
        .generate-button.new-year,
        button.new-year {
            background: linear-gradient(90deg, #c62828, #2e7d32) !important;
            box-shadow: 0 5px 15px rgba(198, 40, 40, 0.4) !important;
        }
        
        .buy-button.new-year:hover, 
        .generate-button.new-year:hover,
        button.new-year:hover {
            background: linear-gradient(90deg, #2e7d32, #c62828) !important;
        }
        
        /* Заголовки */
        h1.new-year {
            color: #c62828 !important;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }
        
        /* Иконка корзины */
        #cart-icon.new-year {
            background: linear-gradient(135deg, #c62828, #2e7d32) !important;
            box-shadow: 0 5px 20px rgba(198, 40, 40, 0.4) !important;
        }
        
        /* Новогодние украшения внутри контейнеров */
        .new-year-decoration {
            position: absolute;
            font-size: 24px;
            z-index: 1;
        }
    `;
    document.head.appendChild(style);
    
    // Добавляем класс новогодней темы к body
    document.body.classList.add('new-year-theme');
    
    // Создаем контейнер для снежинок
    const snowContainer = document.createElement('div');
    snowContainer.id = 'snow-container';
    document.body.appendChild(snowContainer);
    
    // Создаем элементы
    createSnowflakes();
    createChristmasTrees();
    createGarlands();
    createNewYearHeader();
    
    // Добавляем новогодний стиль к элементам страницы
    addNewYearDecorations();
}

// Добавляем новогодние украшения к элементам страницы
function addNewYearDecorations() {
    // Основной контейнер
    const container = document.querySelector('.container');
    if (container) {
        container.classList.add('new-year');
        
        // Добавляем новогодние иконки в контейнер
        const decorations = ['🎄', '🎅', '🎁', '❄️', '✨', '🦌'];
        for (let i = 0; i < 4; i++) {
            const deco = document.createElement('div');
            deco.className = 'new-year-decoration';
            deco.textContent = decorations[Math.floor(Math.random() * decorations.length)];
            deco.style.top = (Math.random() * 80 + 10) + '%';
            deco.style.left = (Math.random() * 80 + 10) + '%';
            deco.style.opacity = '0.3';
            deco.style.transform = `rotate(${Math.random() * 360}deg)`;
            deco.style.animation = `float ${Math.random() * 3 + 2}s infinite alternate`;
            container.appendChild(deco);
        }
    }
    
    // Кнопки
    document.querySelectorAll('.buy-button, .generate-button, button[onclick*="addToCart"]').forEach(btn => {
        btn.classList.add('new-year');
    });
    
    // Заголовки
    document.querySelectorAll('h1').forEach(h1 => {
        h1.classList.add('new-year');
    });
    
    // Иконка корзины
    const cartIcon = document.getElementById('cart-icon');
    if (cartIcon) {
        cartIcon.classList.add('new-year');
    }
}

// Запускаем при загрузке страницы
document.addEventListener('DOMContentLoaded', applyNewYearTheme);

// Обновляем каждые 30 секунд (на случай динамического контента)
setInterval(() => {
    if (isNewYearPeriod() && !document.getElementById('snow-container')) {
        applyNewYearTheme();
    }
}, 30000);
