// Script per estrarre e popolare il menù a discesa con i "comuni" presenti nel file comuni.csv
document.addEventListener('DOMContentLoaded', function () {
    Papa.parse('/residenza/Comuni.csv', {
        download: true,
        header: false,
        dynamicTyping: true,
        complete: function (results) {
            var comuni = results.data;
            var residenzaDropdown = document.getElementById('residenza');

            // Aggiungo ogni comune al menu a discesa
            for (var i = 0; i < comuni.length; i++) {
                var comune = comuni[i][1];
                var option = document.createElement('option');
                option.value = comune;
                option.textContent = comune;
                residenzaDropdown.appendChild(option);
            }
        }
    });
});

