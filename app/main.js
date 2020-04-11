//------------------RELOGIO---------------------------------
function Relogio() {
    var data = new Date();
    var hr = data.getHours();
    var min = data.getMinutes();
    var s = data.getSeconds();

    //sempre que virar os 59 segundos para 0, iniciar contagem com 00,01,02 e etc...
    if (hr < 10) {
        hr = "0" + hr;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (s < 10) {
        s = "0" + s;
    }


    var tempo_total = hr + ":" + min + ":" + s;
    var tempo = window.document.getElementById('horario');
    tempo.innerHTML = tempo_total;
}
setInterval(Relogio, 500);
//-------------------------------------------------------------



//--------CRONOMETRO--------------
var cronometro = 0;

function iniciarCronometro() {
    //para aparecer um botao de cada vez
    document.getElementById('btnIniciar').style.display = "none";
    document.getElementById('btnZerar').style.display = "inline";

    var timer_horas = document.getElementById('timer_horas');
    var timer_minutos = document.getElementById('timer_minutos');
    var timer_segundos = document.getElementById('timer_segundos');
    var timer_decimos = document.getElementById('timer_decimos');

    var h = 0;
    var m = 0;
    var s = 0;
    var d = 0;

    cronometro = setInterval(function() {
        timer_horas.innerHTML = h < 10 ? '0' + h : h;
        timer_minutos.innerHTML = m < 10 ? '0' + m : m;
        timer_segundos.innerHTML = s < 10 ? '0' + s : s;
        timer_decimos.innerHTML = d < 10 ? '0' + d : d;

        if (d < 9) {
            d += 1
        } else if (s < 59) {
            d = 0;
            s += 1
        } else if (m < 59) {
            d = 0;
            s = 0;
            m += 1;
        } else if (h < 23) {
            d = 0;
            s = 0;
            m = 0;
            h += 1;
        }

    }, 100);
}

function zerarCronometro() {
    document.getElementById('btnIniciar').style.display = "inline";
    document.getElementById('btnZerar').style.display = "none";

    clearInterval(cronometro);
    document.getElementById('timer_horas').innerHTML = "00";
    document.getElementById('timer_minutos').innerHTML = "00";
    document.getElementById('timer_segundos').innerHTML = "00";
    document.getElementById('timer_decimos').innerHTML = "00";
}