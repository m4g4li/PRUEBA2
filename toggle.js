function toggleContact(countryId) {
    const contactDiv = document.getElementById(countryId);
    if (contactDiv.style.display === "none" || contactDiv.style.display === "") {
        contactDiv.style.display = "block";  // Muestra el número si está oculto
    } else {
        contactDiv.style.display = "none";  // Oculta el número si está visible
    }
}