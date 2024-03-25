Vue è un framework di javaScript impiegato nella creazione di interfacce per l'utenza.
Vue ci permette di interaggire con la pagina HTML attraverso le funzionalità di JavaScript
Vue automaticamente segue i cambiamenti dei cambiamenti che avvengono su JavaScript e aggiorna il DOM di conseguenza
Vue è solitamente utilizzato in un formato particolare di HTML chaiamato SFC o Single-File_Component che consiste in un unico file il quale racchiude la componente di Javascript, HTML e CSS
Vue presenta due stili differenti: Option API e Composition API (noi utilizzeremo per buona parte Option API e per tanto mi soffermerò su quello)
L'Option API si basa sull'utilizzo di 3 opzioni: data , methods e mounted.



Il metodo più comune per utilizzare dei dati è attraverso la sintassi a "baffo"
Il metodo a baffo non scrive elementi HTML bensì li inserisce come semplice testo. Per scrivere un dato come elemento HTML è necessario l'utilizzo di una directive ovvero v-html
La directive v-bind è invece utilizzata per gestire gli attributi di un elemento HTML
Con v-bind è possibile attribuire un oggetto (che racchiude diversi attributi) ad un singolo elemento HTML
Le directives sono una serie di particolari attributi che iniziano con il prefisso v- ,introdotte da Vue stesso per la maggior parte, che ci permettono una serie di funzionalità.
