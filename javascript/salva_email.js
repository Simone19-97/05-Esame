// Script per validare l'email e reindirizzare al form di registrazione, salvando e settando l'email in automatico nel localStorage
function registrati() {
    // Ottengo il valore dell'input email
    var email = document.getElementById('emailRegistrazione').value.trim();
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var errore = document.getElementById('errore');

    // Validazione email
    if (emailRegex.test(email)) {
        // Reindirizzamento a registrazione.html
        window.location.href = 'registrazione.html';
        // Salvataggio dell'email nella localStorage
        localStorage.setItem('utenteEmail', email);
    } else {
        errore.textContent = 'Inserire un\'email valida';
    }
}