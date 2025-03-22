document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario

    const emailInput = document.getElementById('email-newsletter');
    const email = emailInput.value;
    const message = document.getElementById('newsletter-message');

    if (validateEmail(email)) {
        message.textContent = '¡Gracias por suscribirte!';
        message.style.display = 'block';
        message.style.color = '#0511F2'; // Color del mensaje
        emailInput.value = ''; 
    } else {
        message.textContent = 'Por favor, ingresa un correo electrónico válido.';
        message.style.display = 'block';
        message.style.color = '#F20505'; // Color del mensaje en rojo
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

