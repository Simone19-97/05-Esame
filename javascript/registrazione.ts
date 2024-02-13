// Definizione dell'interfaccia per i dati dell'utente che si deve registrare
interface UserData {
    nome: string,
    cognome: string,
    email: string
    residenza: string,
    username: string,
    password: string
}
// Classe per gestire la validità dei campi del form di registrazione
class ValiditaCampi {
    // Metodo per controllare la validità del campo "nome"
    public static controlloNome(nomeInput: HTMLInputElement): boolean {
        // Ottengo il valore del campo nome
        const nome = nomeInput.value.trim();
        // Controllo della lunghezza e presenza di solo lettere
        const regexSoloLettere = /^[A-Za-z]+$/;

        return nome.length >= 4 && regexSoloLettere.test(nome);
    }

    // Metodo per controllare la validità del campo "cognome"
    public static controlloCognome(cognomeInput: HTMLInputElement): boolean {
        // Ottengo il valore del campo nome
        const cognome = cognomeInput.value.trim();
        // Controllo della lunghezza e presenza di solo lettere
        const regexSoloLettere = /^[A-Za-z]+$/;

        return cognome.length >= 3 && regexSoloLettere.test(cognome);
    }
    // Metodo per il controllo della selezione residenza
    public static controlloResidenza(residenzaInput: HTMLInputElement): boolean {
        const residenza = residenzaInput.value;
        if (residenza !== "") {
            // La residenza è stata selezionata
            return true;
        } else {
            // La residenza non è stata selezionata
            return false;
        }
    }
    // Metodo per controllare la validità dell'email con l'uso di un'espressione regolare
    public static controlloEmail(emailInput: HTMLInputElement): boolean {
        const email = emailInput.value.trim();
        // Espressione regolare per controllare la validità dell'email
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }
    // Metodo per controllare la validità dello username
    public static controlloUsername(usernameInput: HTMLInputElement): boolean {
        // Ottengo il valore di "username"
        const username = usernameInput.value.trim();
        // Controllo che sia presente almeno un numero, una lettera, non contenga spazi e che abbia almeno 5 caratteri 
        const contieneNumero = /\d/.test(username);
        const contieneLettera = /[a-zA-Z]/.test(username); 
        const contieneSpazi = /\s/.test(username);

        return username.length > 4 && contieneNumero && contieneLettera && !contieneSpazi;
    }


    // Metodo per controllare la validità della password
    public static controlloPassword(passwordInput: HTMLInputElement): boolean {
        // Ottengo il valore di "password"
        const password = passwordInput.value.trim();
        // Controllo che contenga almeno un carattere speciale, un numero non contenga spazi, e abbia almeno 6 caratteri
        const contieneSpeciale = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const contieneAltriCaratteri = /[a-zA-Z0-9]/.test(password);
        const contieneSpazi = /\s/.test(password);

        return password.length > 5 && contieneSpeciale && contieneAltriCaratteri && !contieneSpazi;
    }



}
// Classe per la gestione degli errori 
class Errori {
    // Metodo per la gestione dell'errore "nome"
    static gestisciErroreNome(nomeInput: HTMLInputElement, valido: boolean): void {
        const campoNonValido = 'campoNonValido'
        const msgNome = document.getElementById('messaggio-nome');
        const nomeValue = nomeInput.value.trim();
        // Controllo della lunghezza e della presenza di solo lettere
        const regexSoloLettere = /^[A-Za-z]+$/;

        // Se non supera la validazione 
        if (!valido || nomeValue.length < 4 || !regexSoloLettere.test(nomeValue)) {
            // Messaggio di errore 
            msgNome.textContent = 'Deve contenere solo lettere.';
            // Inserisco un bordo rosso all'input 
            nomeInput.classList.add(campoNonValido)
            msgNome.style.display = 'block';
            nomeInput.style.color = 'red';
        } else {
            // Se supera la validazione, rimuovo la classe "campoNonValido"
            nomeInput.classList.remove(campoNonValido)
            // Cambio il colore e modifico il display
            msgNome.style.display = 'none';
            nomeInput.style.color = 'black';
        }
    }

     // Metodo per la gestione dell'errore "cognome"
    static gestisciErroreCognome(cognomeInput: HTMLInputElement, valido: boolean): void {
        const campoNonValido = 'campoNonValido'
        const msgCognome = document.getElementById('messaggio-cognome');
        const cognomeValue = cognomeInput.value.trim();
        // Controllo della lunghezza e della presenza di solo lettere
        const regexSoloLettere = /^[A-Za-z]+$/;

        // Se non supera la validazione:
        if (!valido || cognomeValue.length < 3 || !regexSoloLettere.test(cognomeValue)) {
            // Messaggio di errore
            msgCognome.textContent = 'Deve contenere solo lettere';
            // Inserisco un bordo rosso all'input 
            cognomeInput.classList.add(campoNonValido)
            msgCognome.style.display = 'block';
            cognomeInput.style.color = 'red';
        } else {
            // Se supera la validazione, rimuovo la classe "campoNonValido"
            cognomeInput.classList.remove(campoNonValido)
            // Cambio il colore e modifico il display
            msgCognome.style.display = 'none';
            cognomeInput.style.color = 'black';
        }
    }
    // Metodo per la gestione dell'errore "residenza"
    static gestisciErroreResidenza(valido: boolean): void {
        const msgResidenza = document.getElementById('messaggio-residenza');
        // Se non supera la validazione apparirà il messaggio "Seleziona la tua città di residenza"
        if (!valido) {
            msgResidenza.style.display = 'block';
            msgResidenza.textContent = 'Seleziona la tua città di residenza';
        } else {
            // Altrimenti il messaggio viene rimosso
            msgResidenza.style.display = 'none'
        }
    }
    // Metodo per la gestione dell'errore "email"
    static gestisciErroreEmail(emailInput: HTMLInputElement, valido: boolean): void {
        const campoNonValido = 'campoNonValido'
        const msgEmail = document.getElementById('messaggio-email');

        if (!valido) {
            emailInput.style.color = 'red';
            msgEmail.style.display = 'block';
            msgEmail.textContent = 'Inserisci un\'email valida';
            emailInput.classList.add(campoNonValido)
        } else {
            emailInput.classList.remove(campoNonValido)
            msgEmail.style.display = 'none';
            emailInput.style.color = 'black';
        }
    }
    // Metodo per la gestione dell'errore "username"
    static gestisciErroreUsername(usernameInput: HTMLInputElement, valido: boolean): void {
        const campoNonValido = 'campoNonValido';
        const msgUsername = document.getElementById('messaggio-username');
        const usernameValue = usernameInput.value.trim();
        const contieneNumero = /\d/.test(usernameValue); 
        const contieneSpazi = /\s/.test(usernameValue); 

        if (!valido || usernameValue.length < 5 || !contieneNumero || contieneSpazi) {
            msgUsername.textContent = 'Inserisci almeno 5 caratteri e almeno un numero';
            msgUsername.style.display = 'block';
            usernameInput.style.color = 'red';
            usernameInput.classList.add(campoNonValido);
        } else {
            usernameInput.classList.remove(campoNonValido);
            msgUsername.style.display = 'none';
            usernameInput.style.color = 'black';
        }
    }
    // Metodo per la gestione dell'errore "password"
    static gestisciErrorePassword(passwordInput: HTMLInputElement, valido: boolean): void {
        const campoNonValido = 'campoNonValido';
        const msgPassword = document.getElementById('messaggio-password');
        const passwordValue = passwordInput.value.trim();
        const contieneSpeciale = /[!@#$%^&*(),.?":{}|<>]/.test(passwordValue);
        const contieneSpazi = /\s/.test(passwordValue);

        if (!valido || passwordValue.length < 6 || !contieneSpeciale || contieneSpazi) {
            msgPassword.textContent = 'Inserisci almeno 6 caratteri e almeno un carattere speciale';
            msgPassword.style.display = 'block';
            passwordInput.style.color = 'red';
            passwordInput.classList.add(campoNonValido);
        } else {
            passwordInput.classList.remove(campoNonValido);
            msgPassword.style.display = 'none';
            passwordInput.style.color = 'black';
        }
    }
    // Metodo per la gestione dell'errore "trattamento dati personali"
    static gestisciErroreCheckbox(): void {
        const checkboxDati = document.getElementById('trattamento-dati') as HTMLInputElement;
        const messaggioTrattamento = document.getElementById('messaggio-trattamentoDati');
        messaggioTrattamento.style.color = "white"
        messaggioTrattamento.textContent = "*Devi accettare il trattamento dei dati personali*"
        
        // Ascoltatore dell'evento "change" per la gestione della selezione checkbox
        checkboxDati.addEventListener('change', function () {
            if (this.checked) {
                messaggioTrattamento.textContent = "Hai accettato il trattamento dei dati personali";
            } else {
                messaggioTrattamento.textContent = "*Devi accettare il trattamento dei dati personali*";
            }
        });
    }
}
// Classe per la gestione della registrazione
class RegistrazioneForm {
    // Dichiaro i campi del form
    private nomeInput: HTMLInputElement
    private cognomeInput: HTMLInputElement
    private emailInput: HTMLInputElement
    private residenzaInput: HTMLInputElement
    private usernameInput: HTMLInputElement
    private passwordInput: HTMLInputElement
    private inviaButton: HTMLButtonElement

    // Costruttore della classe
    constructor() {
        // Inizializzo i campi del form e del pulsante di invio
        this.nomeInput = document.getElementById('nome') as HTMLInputElement
        this.cognomeInput = document.getElementById('cognome') as HTMLInputElement
        this.emailInput = document.getElementById('email') as HTMLInputElement
        this.residenzaInput = document.getElementById('residenza') as HTMLInputElement
        this.usernameInput = document.getElementById('username') as HTMLInputElement
        this.passwordInput = document.getElementById('password') as HTMLInputElement
        Errori.gestisciErroreCheckbox()

        this.inviaButton = document.getElementById('invia') as HTMLButtonElement

        // Nascondo i messaggi di errore all'inizio e imposto gli stili del pulsante
        this.pulsanteDisabilitato()

        // Ascoltatore dell'evento di input su ogni campo in modo separato
        this.nomeInput.addEventListener('input', this.attivaBottoneNome.bind(this));
        this.cognomeInput.addEventListener('input', this.attivaBottoneCognome.bind(this));
        this.emailInput.addEventListener('input', this.attivaBottoneEmail.bind(this));
        this.residenzaInput.addEventListener('input', this.attivaBottoneResidenza.bind(this))
        this.usernameInput.addEventListener('input', this.attivaBottoneUsername.bind(this))
        this.passwordInput.addEventListener('input', this.attivaBottonePassword.bind(this))

        // Ascoltatore dell'evento click sul pulsante di invio
        this.inviaButton.addEventListener('click', this.handleSubmit.bind(this));
    }
    // Nascondo i messaggi di errore all'inizio e imposto il pulsante di invio
    private pulsanteDisabilitato(): void {
        const msgNome = document.getElementById('messaggio-nome')
        const msgCognome = document.getElementById('messaggio-cognome')
        const msgEmail = document.getElementById('messaggio-email')
        const msgResidenza = document.getElementById('messaggio-residenza')
        const msgUsername = document.getElementById('messaggio-username')
        const msgPassword = document.getElementById('messaggio-password')

        // Imposto i messaggio di errore col display "none"
        msgNome.style.display = 'none'
        msgCognome.style.display = 'none'
        msgEmail.style.display = 'none'
        msgResidenza.style.display = 'none'
        msgUsername.style.display = 'none'
        msgPassword.style.display = 'none'

        // Imposta stili del pulsante
        this.inviaButton.style.backgroundColor = "rgb(255, 47, 82)"
        this.inviaButton.style.color = "white"
    }

    // Attivo il pulsante di "invio" se il campo è valido. Altrimenti rimane disabilitato
    private attivaBottoneNome(): void {
        const submitButton = this.inviaButton;
        const nomeValido = ValiditaCampi.controlloNome(this.nomeInput);

        if (nomeValido) {
            submitButton.style.backgroundColor = "rgb(255, 18, 57)";
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }

        Errori.gestisciErroreNome(this.nomeInput, nomeValido);
    }
// Attivo il pulsante di "invio" se il campo è valido. Altrimenti rimane disabilitato
    private attivaBottoneCognome(): void {
        const submitButton = this.inviaButton;
        const cognomeValido = ValiditaCampi.controlloCognome(this.cognomeInput);

        if (cognomeValido) {
            submitButton.style.backgroundColor = "rgb(255, 18, 57)";
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }

        Errori.gestisciErroreCognome(this.cognomeInput, cognomeValido);
    }
// Attivo il pulsante di "invio" se il campo è valido. Altrimenti rimane disabilitato
    private attivaBottoneResidenza(): void {
        const submitButton = this.inviaButton;
        const ResidenzaValido = ValiditaCampi.controlloResidenza(this.residenzaInput);

        if (ResidenzaValido) {
            submitButton.style.backgroundColor = "rgb(255, 18, 57)";
            submitButton.disabled = false;

            Errori.gestisciErroreResidenza(true)
        } else {
            submitButton.disabled = true;

            Errori.gestisciErroreResidenza(false)
        }
    }
// Attivo il pulsante di "invio" se il campo è valido. Altrimenti rimane disabilitato
    private attivaBottoneEmail(): void {
        const submitButton = this.inviaButton;
        const emailValida = ValiditaCampi.controlloEmail(this.emailInput);

        if (emailValida) {
            submitButton.style.backgroundColor = "rgb(255, 18, 57)";
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }

        Errori.gestisciErroreEmail(this.emailInput, emailValida);
    }
// Attivo il pulsante di "invio" se il campo è valido. Altrimenti rimane disabilitato
    private attivaBottoneUsername() {
        const submitButton = this.inviaButton;
        const usernameValido = ValiditaCampi.controlloUsername(this.usernameInput);

        if (usernameValido) {
            submitButton.style.backgroundColor = "rgb(255, 18, 57)";
            submitButton.disabled = false;

            // Rimuovi il messaggio di errore e ripristina lo stile del campo
            Errori.gestisciErroreUsername(this.usernameInput, true);
        } else {
            submitButton.disabled = true;

            // Mantieni il messaggio di errore attivo, se necessario
            Errori.gestisciErroreUsername(this.usernameInput, false);
        }
    }
// Attivo il pulsante di "invio" se il campo è valido. Altrimenti rimane disabilitato
    private attivaBottonePassword() {
        const submitButton = this.inviaButton
        const passwordValida = ValiditaCampi.controlloPassword(this.passwordInput)

        if (passwordValida) {
            submitButton.style.backgroundColor = "rgb(255,18,57)"
            submitButton.disabled = false

            Errori.gestisciErrorePassword(this.passwordInput, passwordValida);

        } else {
            submitButton.disabled = true

            Errori.gestisciErrorePassword(this.passwordInput, passwordValida);
        }
    }
// Verifico che la checkbox del trattamento dati personali sia selezionata
    private checkboxTrattamentoDatiSelezionata(): boolean {
        const checkboxDati = document.getElementById('trattamento-dati') as HTMLInputElement;

        return checkboxDati.checked;
    }
// Controllo che tutti i campi siano validi e gestisco gli errori
    private controlloCampi(): boolean {
        const nomeValido = ValiditaCampi.controlloNome(this.nomeInput);
        const cognomeValido = ValiditaCampi.controlloCognome(this.cognomeInput);
        const emailValida = ValiditaCampi.controlloEmail(this.emailInput);
        const ResidenzaValido = ValiditaCampi.controlloResidenza(this.residenzaInput);
        const UsernameValido = ValiditaCampi.controlloUsername(this.usernameInput);
        const PasswordValido = ValiditaCampi.controlloPassword(this.passwordInput);

        // Gestione degli errori per ogni campo
        Errori.gestisciErroreNome(this.nomeInput, nomeValido);
        Errori.gestisciErroreCognome(this.cognomeInput, cognomeValido);
        Errori.gestisciErroreEmail(this.emailInput, emailValida);
        Errori.gestisciErroreResidenza(ResidenzaValido);
        Errori.gestisciErroreUsername(this.usernameInput, UsernameValido);
        Errori.gestisciErrorePassword(this.passwordInput, PasswordValido);

        // Verrà restituito true se tutti i campi hanno superato la validazione
        return nomeValido && cognomeValido && emailValida && ResidenzaValido && UsernameValido && PasswordValido;
    }

    private verificaValiditaCampi(): boolean {
        return this.controlloCampi();
    }
    // Se la verifica della validità è passata raccolgo i dati, pronti per l'invio al server 
    private handleSubmit(event: Event): void {
        // Se i campi non sono validi, impedisco l'invio al server
        event.preventDefault(); 

        if (this.verificaValiditaCampi() && this.checkboxTrattamentoDatiSelezionata()) {
            // Dati validi, raccolgo i dati dell'utente registrato
            const utente: UserData = {
                nome: this.nomeInput.value.trim(),
                cognome: this.cognomeInput.value.trim(),
                email: this.emailInput.value.trim(),
                residenza: this.residenzaInput.value.trim(),
                username: this.usernameInput.value.trim(),
                password: this.passwordInput.value.trim()
            };
            console.log("Nuovo utente registrato:", utente)
            window.location.href = 'registrazioneAvvenuta.html'
        } else {
            console.log("Compilare il form correttamente e riprovare");
        }
    }
}
// Creo un'istanza della classe RegistrazioneForm al caricamento della pagina
document.addEventListener('DOMContentLoaded', function () {
    const registrazioneForm = new RegistrazioneForm();
});


