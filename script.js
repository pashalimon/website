// Мобильное меню toggle
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '60px';
        nav.style.left = '0';
        nav.style.width = '100%';
        nav.style.backgroundColor = '#111315';
        nav.style.padding = '20px';
        nav.style.gap = '15px';
    }
}

// Валидация и отправка формы обратной связи
function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    
    if (name.trim() === "" || phone.trim() === "") {
        alert("Пожалуйста, заполните обязательные поля.");
        return;
    }
    
    alert(`Спасибо, ${name}! Ваша заявка успешно принята. Мы свяжемся с вами по телефону: ${phone}`);
    document.getElementById('feedbackForm').reset();
}

// Умное автозаполнение товара на странице контактов
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('product');
    const messageField = document.getElementById('message');
    
    if (productName && messageField) {
        messageField.value = `Хочу купить товар: "${productName}". Подскажите, пожалуйста, по поводу доставки и наличия.`;
    }
});
