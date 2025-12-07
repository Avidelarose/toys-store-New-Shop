// cart-fix.js
(function() {
    'use strict';
    
    // Переопределяем функцию закрытия модального окна
    const closeModalHandler = function() {
        const modal = document.getElementById('cart-modal');
        if (modal) {
            modal.style.transition = 'all 0.3s ease';
            modal.style.opacity = '0';
            modal.style.transform = 'translate(-50%, -40%)';
            
            setTimeout(() => {
                modal.remove();
                document.body.style.overflow = '';
                
                // Обновляем состояние
                if (window.cart && window.cart.updateBadge) {
                    window.cart.updateBadge();
                }
            }, 300);
        }
        
        const overlay = document.querySelector('div[style*="background: rgba(0,0,0,0.5)"]');
        if (overlay) {
            overlay.style.transition = 'opacity 0.3s ease';
            overlay.style.opacity = '0';
            setTimeout(() => overlay.remove(), 300);
        }
    };
    
    // Вешаем обработчики
    document.addEventListener('click', function(e) {
        // Крестик закрытия
        if (e.target.id === 'close-cart' || e.target.closest('#close-cart')) {
            closeModalHandler();
            return false;
        }
        
        // Клик по оверлею
        if (e.target.style.background === 'rgba(0, 0, 0, 0.5)' && 
            document.getElementById('cart-modal')) {
            closeModalHandler();
            return false;
        }
    });
    
    console.log('Cart fix applied successfully');
})();
