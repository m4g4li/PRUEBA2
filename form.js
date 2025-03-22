document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const countryInput = document.getElementById('inputCountry');
    const addressInput = document.getElementById('inputAddress');
    const commentInput = document.getElementById('inputComment');
    const messages = document.getElementById('messages'); 

    // Verificar que todos los campos estén completos y el email sea válido
    if (
        nameInput.value.trim() !== '' &&
        validateEmail(emailInput.value) &&
        phoneInput.value.trim() !== '' &&
        countryInput.value !== '' &&
        addressInput.value.trim() !== '' &&
        commentInput.value.trim() !== ''
    ) {
        messages.textContent = '¡Gracias, pronto alguien del equipo de soporte se pondrá en contacto contigo!';
        messages.style.display = 'block';
        messages.style.color = '#0D0D0D'; // Color del mensaje

        // Limpiar los campos
        nameInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';
        countryInput.value = '';
        addressInput.value = '';
        commentInput.value = '';
    } else {
        messages.textContent = 'Por favor, complete todos los campos correctamente.';
        messages.style.display = 'block';
        messages.style.color = '#F2F2F2'; // Color del mensaje de advertencia en rojo
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
