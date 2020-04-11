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

function iniciarCronometro() {
    var timer_horas = document.getElementById('timer_horas');
    var timer_minutos = document.getElementById('timer_minutos');
    var timer_segundos = document.getElementById('timer_segundos');
    var timer_decimos = document.getElementById('timer_decimos');

    var h = 0;
    var m = 0;
    var s = 0;
    var d = 0;
    setInterval(function() {}, 1000);
}

function zerarCronometro() {

}