// Funzione per reindirizzare alla pagina di login dopo 10 secondi
function reindirizzaHomepage() {
    window.location.href = 'index.html';
}

// Imposto il timer per chiamare la funzione dopo 10 secondi
setTimeout(reindirizzaHomepage, 10000);