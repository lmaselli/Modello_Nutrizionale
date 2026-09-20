# Dieta in Grammi

Applicazione web per il calcolo delle porzioni di un regime alimentare: bilancio
di energia e macronutrienti per pasto e per giornata, dieta di riferimento
fissabile e scambio fra alimenti entro una tolleranza definita.

Tutto gira nel browser: non c'è server, non c'è database, nessun dato lascia il
dispositivo. Il piano viene salvato nella memoria locale del browser.

## Pubblicazione

I file vanno nella radice del repository. In *Settings → Pages* selezionare il
ramo `main` e la cartella `/ (root)`.

## Installazione sul telefono

- **Android (Chrome):** menu ⋮ → *Installa app*
- **iPhone (Safari):** Condividi → *Aggiungi alla schermata Home*

Dopo la prima apertura l'applicazione funziona anche senza connessione.

## Aggiornamenti

Sostituire `index.html` e incrementare la costante `VERSIONE` in `sw.js`
(es. `dieta-v9` → `dieta-v10`): al primo avvio con rete i dispositivi mostrano
il pulsante di aggiornamento.

## Dati nutrizionali

Composizione per 100 g di parte edibile, tabelle CREA di composizione degli
alimenti, salvo le voci segnalate nelle note metodologiche della pagina
(patate dolci: USDA; prodotti confezionati: valori medi commerciali).

Strumento di calcolo, non sostituisce la valutazione di un medico o di un
dietista.
