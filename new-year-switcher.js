// new-year-switcher.js
class NewYearThemeSwitcher {
    constructor() {
        this.isActive = false;
        this.currentMonth = new Date().getMonth() + 1; // 1-12
        this.init();
    }
    
    init() {
        // Проверяем, декабрь ли сейчас (месяц 12) или январь (месяц 1)
        if (this.currentMonth === 12 || this.currentMonth === 1) {
            this.enableTheme();
        } else {
            this.createToggle();
        }
    }
    
    enableTheme() {
        // Добавляем стили
        this.addStyles();
        
        // Добавляем класс к body
        document.body.classList.add('new-year-active');
        
        // Создаем переключатель
        this.createToggle();
        
        this.isActive = true;
        this.savePreference();
        
        console.log('🎄 Новогодняя тема активирована!');
    }
    
    disableTheme() {
        // Удаляем класс
        document.body.classList.remove('new-year-active');
        
        // Обновляем переключатель
        const toggle = document.querySelector('.new-year-toggle');
        if (toggle) {
            toggle.classList.remove('active');
            toggle.innerHTML = `
                <div class="toggle-icon">🎄</div>
                <span>Включить новогодний стиль</span>
            `;
        }
        
        this.isActive = false;
        this.savePreference();
        
        console.log('🎄 Новогодняя тема отключена');
    }
    
    addStyles() {
        // Проверяем, не добавлены ли уже стили
        if (document.getElementById('new-year-styles')) return;
        
        // Создаем ссылку на CSS файл
        const link = document.createElement('link');
        link.id = 'new-year-styles';
        link.rel = 'stylesheet';
        link.href = 'new-year-style.css';
        document.head.appendChild(link);
    }
    
    createToggle() {
        // Проверяем, не создан ли уже переключатель
        if (document.querySelector('.new-year-toggle')) return;
        
        const toggle = document.createElement('div');
        toggle.className = 'new-year-toggle';
        if (this.isActive) toggle.classList.add('active');
        
        toggle.innerHTML = `
            <div class="toggle-icon">${this.isActive ? '🎅' : '🎄'}</div>
            <span>${this.isActive ? 'Выключить новогодний стиль' : 'Включить новогодний стиль'}</span>
        `;
        
        // Добавляем обработчик клика
        toggle.addEventListener('click', () => {
            if (this.isActive) {
                this.disableTheme();
            } else {
                this.enableTheme();
            }
        });
        
        document.body.appendChild(toggle);
    }
    
    savePreference() {
        localStorage.setItem('newYearTheme', this.isActive ? 'enabled' : 'disabled');
    }
    
    loadPreference() {
        const saved = localStorage.getItem('newYearTheme');
        if (saved === 'enabled' && (this.currentMonth === 12 || this.currentMonth === 1)) {
            this.enableTheme();
        }
    }
}

// Автоматический запуск
document.addEventListener('DOMContentLoaded', () => {
    window.newYearTheme = new NewYearThemeSwitcher();
    window.newYearTheme.loadPreference();
});


// В файле управления
const today = new Date();
const month = today.getMonth() + 1; // 1-12
const day = today.getDate();

// С 1 декабря по 15 января
if ((month === 12 && day >= 1) || (month === 1 && day <= 15)) {
    enableNewYearTheme();
}
