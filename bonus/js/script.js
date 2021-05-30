var km = prompt('quanti chilometri di percorrenza?');
var birthday = prompt('inserire data di nascita');
var today = 2021;

var age = parseInt(today) - parseInt(birthday);

var ticket = 0.21 ;


if (parseInt(age) < 18){
    var sconto = (ticket * 20) / 100;
    var DiscounTicket = ticket - sconto;
    var prezzo = parseInt(km) * DiscounTicket;
    
    
} else{ 
    if (parseInt(age) > 65){ 
    var sconto = (ticket * 40) / 100;
    var DiscounTicket = ticket - sconto;
    var prezzo = parseInt(km) * DiscounTicket;
    
    }else{
        var prezzo = ticket * parseInt(km);
    }
}
document.getElementById('FinalPrice').innerHTML = 'il final price è ' + (prezzo.toFixed(1));
