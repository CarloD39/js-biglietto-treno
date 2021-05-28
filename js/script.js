var km = prompt('quanti chilometri di percorrenza?');
var age = prompt('inserire età passegero');

var ticket = 0.21 ;



if (parseInt(age) < 18){
    var sconto = (ticket * 20) / 100;
    var ticket = ticket - sconto;
    var prezzo = parseInt(km) * ticket;
    document.getElementById('FinalPrice').innerHTML = 'il final price è ' + prezzo;
    
} 
else if (parseInt(age) > 65){ 
var sconto = (ticket * 40) / 100;
var ticket = ticket - sconto;
var prezzo = parseInt(km) * ticket;
document.getElementById('FinalPrice').innerHTML = 'il final price è ' + prezzo;

}




    


