// Script per inserire l'email dalla localStorage
document.addEventListener('DOMContentLoaded', function () {
    // Recupero l'email dalla localStorage
    var utenteEmail = localStorage.getItem('utenteEmail');

    // Imposto l'email nell'input del form registrazione
    if (utenteEmail) {
        document.getElementById('email').value = utenteEmail;
    }
});