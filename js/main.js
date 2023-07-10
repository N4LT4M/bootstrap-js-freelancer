/*
Continuiamo l’esercizio Bootstrap Freelancer e aggiungiamo la componente js di interazione con l’utente.
Quando l’utente fa click sul bottone “send” del form, il sito deve calcolare l’ammontare del preventivo per le ore di lavoro richieste.
Il prezzo orario per una commissione varia in questo modo:
- se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.5€ l’ora
- se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.3€ l’ora
- se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.6€
L’utente potrebbe decidere di utilizzare un codice promozionale tra i seguenti:
- YHDNU32
- JANJC63
- PWKCN25
- SJDPO96
- POCIE24
Se l’utente inserisce un codice promozionale valido, ha diritto ad uno sconto del 25% sul prezzo finale. 
Se il codice inserito non è valido, il sito deve informare l’utente che il codice non è valido e il prezzo finale viene calcolato senza applicare sconti.
Il risultato del calcolo del prezzo finale deve essere visualizzato in “forma umana” (con 2 decimali e il simbolo dell’euro) in un apposito tag HTML appena sotto il bottone send.
Alcuni consigli
- Ricordatevi che se non state bene attenti, Javascript vi fa le magie con i tipi :faccia_leggermente_sorridente:
- Ricordatevi che il form ha un comportamento “strano” quando fate click sul bottone Send che è di tipo submit (type=submit).
*/





//collegare il bottone send
document.getElementById("button").addEventListener("click", function calculatePrice() {



    //creo un array con i codici sconto
    let availableDiscountCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

    //mi creo le variabili per ottenere le informazioni inserite dall'utente in merito ad
    //ore di lavoro, tipo di lavoro e codice sconto
    let hours = parseInt(document.getElementById("Hours").value);
    let typeOfWork = parseInt(document.getElementById("input").value);
    let DiscountCode = (document.getElementById("Discount").value);

    //imposto il prezzo finale a 0 per poi poterci eseguire le varie operazioni
    let finalprice = 0;
    //con if dico al programma come calcolare in base al tipo di lavoro e alle ore selezionate dall'utente
    //offerta project analysis
    if (typeOfWork == 1) {
        finalprice = 33.6 * hours;

        // sviluppo frontend   
    } else if (typeOfWork == 2) {
        finalprice = 15.3 * hours;

        //sviluppo backend
    } else if (typeOfWork == 3) {
        finalprice = 20.5 * hours
    }

    //verifico e applico sconti impostando con variabile booleana la presenza del codice sconto come falsa
    //e dicendo quando invece deve essere vera
    let discountcodepresent = false;
    for (let i = 0; i < availableDiscountCodes.length; i++) {
        if (availableDiscountCodes[i] == DiscountCode) {
            discountcodepresent = true
        }
    }
    //calcolo il prezzo finale con sconto applicato
    if (discountcodepresent) {
        finalprice = finalprice - ((finalprice * 25) / 100);
    }

    //il prezzo finale deve essere visualizzato in forma umana
    finalprice = finalprice.toFixed(2);

    //stampo in HTML il prezzo del lavoro richiesto
    document.getElementById("finalprice").innerHTML = "il prezzo è di: " + finalprice + "&euro;"

});







