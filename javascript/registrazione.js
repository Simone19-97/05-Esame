// Classe per gestire la validità dei campi del form di registrazione
var ValiditaCampi = /** @class */ (function () {
    function ValiditaCampi() {
    }
    // Metodo per controllare la validità del campo "nome"
    ValiditaCampi.controlloNome = function (nomeInput) {
        // Ottengo il valore del campo nome
        var nome = nomeInput.value.trim();
        // Controllo della lunghezza e presenza di solo lettere
        var regexSoloLettere = /^[A-Za-z]+$/;
        return nome.length >= 4 && regexSoloLettere.test(nome);
    };
    // Metodo per controllare la validità del campo "cognome"
    ValiditaCampi.controlloCognome = function (cognomeInput) {
        // Ottengo il valore del campo nome
        var cognome = cognomeInput.value.trim();
        // Controllo della lunghezza e presenza di solo lettere
        var regexSoloLettere = /^[A-Za-z]+$/;
        return cognome.length >= 3 && regexSoloLettere.test(cognome);
    };
    // Metodo per il controllo della selezione residenza
    ValiditaCampi.controlloResidenza = function (residenzaInput) {
        var residenza = residenzaInput.value;
        if (residenza !== "") {
            // La residenza è stata selezionata
            return true;
        }
        else {
            // La residenza non è stata selezionata
            return false;
        }
    };
    // Metodo per controllare la validità dell'email con l'uso di un'espressione regolare
    ValiditaCampi.controlloEmail = function (emailInput) {
        var email = emailInput.value.trim();
        // Espressione regolare per controllare la validità dell'email
        var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };
    // Metodo per controllare la validità dello username
    ValiditaCampi.controlloUsername = function (usernameInput) {
        // Ottengo il valore di "username"
        var username = usernameInput.value.trim();
        // Controllo che sia presente almeno un numero, una lettera, non contenga spazi e che abbia almeno 5 caratteri 
        var contieneNumero = /\d/.test(username);
        var contieneLettera = /[a-zA-Z]/.test(username);
        var contieneSpazi = /\s/.test(username);
        return username.length > 4 && contieneNumero && contieneLettera && !contieneSpazi;
    };
    // Metodo per controllare la validità della password
    ValiditaCampi.controlloPassword = function (passwordInput) {
        // Ottengo il valore di "password"
        var password = passwordInput.value.trim();
        // Controllo che contenga almeno un carattere speciale, un numero non contenga spazi, e abbia almeno 6 caratteri
        var contieneSpeciale = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        var contieneAltriCaratteri = /[a-zA-Z0-9]/.test(password);
        var contieneSpazi = /\s/.test(password);
        return password.length > 5 && contieneSpeciale && contieneAltriCaratteri && !contieneSpazi;
    };
    return ValiditaCampi;
}());
// Classe per la gestione degli errori 
var Errori = /** @class */ (function () {
    function Errori() {
    }
    // Metodo per la gestione dell'errore "nome"
    Errori.gestisciErroreNome = function (nomeInput, valido) {
        var campoNonValido = 'campoNonValido';
        var msgNome = document.getElementById('messaggio-nome');
        var nomeValue = nomeInput.value.trim();
        // Controllo della lunghezza e della presenza di solo lettere
        var regexSoloLettere = /^[A-Za-z]+$/;
        // Se non supera la validazione 
        if (!valido || nomeValue.length < 4 || !regexSoloLettere.test(nomeValue)) {
            // Messaggio di errore 
            msgNome.textContent = 'Deve contenere solo lettere.';
            // Inserisco un bordo rosso all'input 
            nomeInput.classList.add(campoNonValido);
            msgNome.style.display = 'block';
            nomeInput.style.color = 'red';
        }
        else {
            // Se supera la validazione, rimuovo la classe "campoNonValido"
            nomeInput.classList.remove(campoNonValido);
            // Cambio il colore e modifico il display
            msgNome.style.display = 'none';
            nomeInput.style.color = 'black';
        }
    };
    // Metodo per la gestione dell'errore "cognome"
    Errori.gestisciErroreCognome = function (cognomeInput, valido) {
        var campoNonValido = 'campoNonValido';
        var msgCognome = document.getElementById('messaggio-cognome');
        var cognomeValue = cognomeInput.value.trim();
        // Controllo della lunghezza e della presenza di solo lettere
        var regexSoloLettere = /^[A-Za-z]+$/;
        // Se non supera la validazione:
        if (!valido || cognomeValue.length < 3 || !regexSoloLettere.test(cognomeValue)) {
            // Messaggio di errore
            msgCognome.textContent = 'Deve contenere solo lettere';
            // Inserisco un bordo rosso all'input 
            cognomeInput.classList.add(campoNonValido);
            msgCognome.style.display = 'block';
            cognomeInput.style.color = 'red';
        }
        else {
            // Se supera la validazione, rimuovo la classe "campoNonValido"
            cognomeInput.classList.remove(campoNonValido);
            // Cambio il colore e modifico il display
            msgCognome.style.display = 'none';
            cognomeInput.style.color = 'black';
        }
    };
    // Metodo per la gestione dell'errore "residenza"
    Errori.gestisciErroreResidenza = function (valido) {
        var msgResidenza = document.getElementById('messaggio-residenza');
        // Se non supera la validazione apparirà il messaggio "Seleziona la tua città di residenza"
        if (!valido) {
            msgResidenza.style.display = 'block';
            msgResidenza.textContent = 'Seleziona la tua città di residenza';
        }
        else {
            // Altrimenti il messaggio viene rimosso
            msgResidenza.style.display = 'none';
        }
    };
    // Metodo per la gestione dell'errore "email"
    Errori.gestisciErroreEmail = function (emailInput, valido) {
        var campoNonValido = 'campoNonValido';
        var msgEmail = document.getElementById('messaggio-email');
        if (!valido) {
            emailInput.style.color = 'red';
            msgEmail.style.display = 'block';
            msgEmail.textContent = 'Inserisci un\'email valida';
            emailInput.classList.add(campoNonValido);
        }
        else {
            emailInput.classList.remove(campoNonValido);
            msgEmail.style.display = 'none';
            emailInput.style.color = 'black';
        }
    };
    // Metodo per la gestione dell'errore "username"
    Errori.gestisciErroreUsername = function (usernameInput, valido) {
        var campoNonValido = 'campoNonValido';
        var msgUsername = document.getElementById('messaggio-username');
        var usernameValue = usernameInput.value.trim();
        var contieneNumero = /\d/.test(usernameValue);
        var contieneSpazi = /\s/.test(usernameValue);
        if (!valido || usernameValue.length < 5 || !contieneNumero || contieneSpazi) {
            msgUsername.textContent = 'Inserisci almeno 5 caratteri e almeno un numero';
            msgUsername.style.display = 'block';
            usernameInput.style.color = 'red';
            usernameInput.classList.add(campoNonValido);
        }
        else {
            usernameInput.classList.remove(campoNonValido);
            msgUsername.style.display = 'none';
            usernameInput.style.color = 'black';
        }
    };
    // Metodo per la gestione dell'errore "password"
    Errori.gestisciErrorePassword = function (passwordInput, valido) {
        var campoNonValido = 'campoNonValido';
        var msgPassword = document.getElementById('messaggio-password');
        var passwordValue = passwordInput.value.trim();
        var contieneSpeciale = /[!@#$%^&*(),.?":{}|<>]/.test(passwordValue);
        var contieneSpazi = /\s/.test(passwordValue);
        if (!valido || passwordValue.length < 6 || !contieneSpeciale || contieneSpazi) {
            msgPassword.textContent = 'Inserisci almeno 6 caratteri e almeno un carattere speciale';
            msgPassword.style.display = 'block';
            passwordInput.style.color = 'red';
            passwordInput.classList.add(campoNonValido);
        }
        else {
            passwordInput.classList.remove(campoNonValido);
            msgPassword.style.display = 'none';
            passwordInput.style.color = 'black';
        }
    };
    // Metodo per la gestione dell'errore "trattamento dati personali"
    Errori.gestisciErroreCheckbox = function () {
        var checkboxDati = document.getElementById('trattamento-dati');
        var messaggioTrattamento = document.getElementById('messaggio-trattamentoDati');
        messaggioTrattamento.style.color = "white";
        messaggioTrattamento.textContent = "*Devi accettare il trattamento dei dati personali*";
        // Ascoltatore dell'evento "change" per la gestione della selezione checkbox
        checkboxDati.addEventListener('change', function () {
            if (this.checked) {
                messaggioTrattamento.textContent = "Hai accettato il trattamento dei dati personali";
            }
            else {
                messaggioTrattamento.textContent = "*Devi accettare il trattamento dei dati personali*";
            }
        });
    };
    return Errori;
}());
// Classe per la gestione della registrazione
var RegistrazioneForm = /** @class */ (function () {
    // Costruttore della classe
    function RegistrazioneForm() {
        // Inizializzo i campi del form e del pulsante di invio
        this.nomeInput = document.getElementById('nome');
        this.cognomeInput = document.getElementById('cognome');
        this.emailInput = document.getElementById('email');
        this.residenzaInput = document.getElementById('residenza');
        this.usernameInput = document.getElementById('username');
        this.passwordInput = document.getElementById('password');
        Errori.gestisciErroreCheckbox();
        this.inviaButton = document.getElementById('invia');
        // Nascondo i messaggi di errore all'inizio e imposto gli stili del pulsante
        this.pulsanteDisabilitato();
        // Ascoltatore dell'evento di input su ogni campo in modo separato
        this.nomeInput.addEventListener('input', this.attivaBottoneNome.bind(this));
        this.cognomeInput.addEventListener('input', this.attivaBottoneCognome.bind(this));
        this.emailInput.addEventListener('input', this.attivaBottoneEmail.bind(this));
        this.residenzaInput.addEventListener('input', this.attivaBottoneResidenza.bind(this));
        this.usernameInput.addEventListener('input', this.attivaBottoneUsername.bind(this));
        this.passwordInput.addEventListener('input', this.attivaBottonePassword.bind(this));
        // Ascoltatore dell'evento click sul pulsante di invio
        this.inviaButton.addEventListener('click', this.handleSubmit.bind(this));
    }
    // Nascondo i messaggi di errore all'inizio e imposto il pulsante di invio
    RegistrazioneForm.prototype.pulsanteDisabilitato = function () {
        var msgNome = document.getElementById('messaggio-nome');
        var msgCognome = document.getElementById('messaggio-cognome');
        var msgEmail = document.getElementById('messaggio-email');
        var msgResidenza = document.getElementById('messaggio-residenza');
        var msgUsername = document.getElementById('messaggio-username');
        var msgPassword = document.getElementById('messaggio-password');
        // Imposto i messaggio di errore col display "none"
        msgNome.style.display = 'none';
        msgCognome.style.display = 'none';
        msgEmail.style.display = 'none';
        msgResidenza.style.display = 'none';
        msgUsername.style.display = 'none';
        msgPassword.style.display = 'none';
        // Imposta stili del pulsante
        this.inviaButton.style.backgroundColor = "rgb(255, 47, 82)";
        this.inviaButton.style.color = "white";
    };
    // Attivo il pulsante di "invio" se il campo è valido. Altrimenti rimane disabilitato
    RegistrazioneForm.prototype.attivaBottoneNome = function () {
        var submitButton = this.inviaButton;
        var nomeValido = ValiditaCampi.controlloNome(this.nomeInput);
        if (nomeValido) {
            submitButton.style.backgroundColor = "rgb(255, 18, 57)";
            submitButton.disabled = false;
        }
        else {
            submitButton.disabled = true;
        }
        Errori.gestisciErroreNome(this.nomeInput, nomeValido);
    };
    // Attivo il pulsante di "invio" se il campo è valido. Altrimenti rimane disabilitato
    RegistrazioneForm.prototype.attivaBottoneCognome = function () {
        var submitButton = this.inviaButton;
        var cognomeValido = ValiditaCampi.controlloCognome(this.cognomeInput);
        if (cognomeValido) {
            submitButton.style.backgroundColor = "rgb(255, 18, 57)";
            submitButton.disabled = false;
        }
        else {
            submitButton.disabled = true;
        }
        Errori.gestisciErroreCognome(this.cognomeInput, cognomeValido);
    };
    // Attivo il pulsante di "invio" se il campo è valido. Altrimenti rimane disabilitato
    RegistrazioneForm.prototype.attivaBottoneResidenza = function () {
        var submitButton = this.inviaButton;
        var ResidenzaValido = ValiditaCampi.controlloResidenza(this.residenzaInput);
        if (ResidenzaValido) {
            submitButton.style.backgroundColor = "rgb(255, 18, 57)";
            submitButton.disabled = false;
            Errori.gestisciErroreResidenza(true);
        }
        else {
            submitButton.disabled = true;
            Errori.gestisciErroreResidenza(false);
        }
    };
    // Attivo il pulsante di "invio" se il campo è valido. Altrimenti rimane disabilitato
    RegistrazioneForm.prototype.attivaBottoneEmail = function () {
        var submitButton = this.inviaButton;
        var emailValida = ValiditaCampi.controlloEmail(this.emailInput);
        if (emailValida) {
            submitButton.style.backgroundColor = "rgb(255, 18, 57)";
            submitButton.disabled = false;
        }
        else {
            submitButton.disabled = true;
        }
        Errori.gestisciErroreEmail(this.emailInput, emailValida);
    };
    // Attivo il pulsante di "invio" se il campo è valido. Altrimenti rimane disabilitato
    RegistrazioneForm.prototype.attivaBottoneUsername = function () {
        var submitButton = this.inviaButton;
        var usernameValido = ValiditaCampi.controlloUsername(this.usernameInput);
        if (usernameValido) {
            submitButton.style.backgroundColor = "rgb(255, 18, 57)";
            submitButton.disabled = false;
            // Rimuovi il messaggio di errore e ripristina lo stile del campo
            Errori.gestisciErroreUsername(this.usernameInput, true);
        }
        else {
            submitButton.disabled = true;
            // Mantieni il messaggio di errore attivo, se necessario
            Errori.gestisciErroreUsername(this.usernameInput, false);
        }
    };
    // Attivo il pulsante di "invio" se il campo è valido. Altrimenti rimane disabilitato
    RegistrazioneForm.prototype.attivaBottonePassword = function () {
        var submitButton = this.inviaButton;
        var passwordValida = ValiditaCampi.controlloPassword(this.passwordInput);
        if (passwordValida) {
            submitButton.style.backgroundColor = "rgb(255,18,57)";
            submitButton.disabled = false;
            Errori.gestisciErrorePassword(this.passwordInput, passwordValida);
        }
        else {
            submitButton.disabled = true;
            Errori.gestisciErrorePassword(this.passwordInput, passwordValida);
        }
    };
    // Verifico che la checkbox del trattamento dati personali sia selezionata
    RegistrazioneForm.prototype.checkboxTrattamentoDatiSelezionata = function () {
        var checkboxDati = document.getElementById('trattamento-dati');
        return checkboxDati.checked;
    };
    // Controllo che tutti i campi siano validi e gestisco gli errori
    RegistrazioneForm.prototype.controlloCampi = function () {
        var nomeValido = ValiditaCampi.controlloNome(this.nomeInput);
        var cognomeValido = ValiditaCampi.controlloCognome(this.cognomeInput);
        var emailValida = ValiditaCampi.controlloEmail(this.emailInput);
        var ResidenzaValido = ValiditaCampi.controlloResidenza(this.residenzaInput);
        var UsernameValido = ValiditaCampi.controlloUsername(this.usernameInput);
        var PasswordValido = ValiditaCampi.controlloPassword(this.passwordInput);
        // Gestione degli errori per ogni campo
        Errori.gestisciErroreNome(this.nomeInput, nomeValido);
        Errori.gestisciErroreCognome(this.cognomeInput, cognomeValido);
        Errori.gestisciErroreEmail(this.emailInput, emailValida);
        Errori.gestisciErroreResidenza(ResidenzaValido);
        Errori.gestisciErroreUsername(this.usernameInput, UsernameValido);
        Errori.gestisciErrorePassword(this.passwordInput, PasswordValido);
        // Verrà restituito true se tutti i campi hanno superato la validazione
        return nomeValido && cognomeValido && emailValida && ResidenzaValido && UsernameValido && PasswordValido;
    };
    RegistrazioneForm.prototype.verificaValiditaCampi = function () {
        return this.controlloCampi();
    };
    // Se la verifica della validità è passata raccolgo i dati, pronti per l'invio al server 
    RegistrazioneForm.prototype.handleSubmit = function (event) {
        // Se i campi non sono validi, impedisco l'invio al server
        event.preventDefault();
        if (this.verificaValiditaCampi() && this.checkboxTrattamentoDatiSelezionata()) {
            // Dati validi, raccolgo i dati dell'utente registrato
            var utente = {
                nome: this.nomeInput.value.trim(),
                cognome: this.cognomeInput.value.trim(),
                email: this.emailInput.value.trim(),
                residenza: this.residenzaInput.value.trim(),
                username: this.usernameInput.value.trim(),
                password: this.passwordInput.value.trim()
            };
            console.log("Nuovo utente registrato:", utente);
            window.location.href = 'registrazioneAvvenuta.html';
        }
        else {
            console.log("Compilare il form correttamente e riprovare");
        }
    };
    return RegistrazioneForm;
}());
// Creo un'istanza della classe RegistrazioneForm al caricamento della pagina
document.addEventListener('DOMContentLoaded', function () {
    var registrazioneForm = new RegistrazioneForm();
});
