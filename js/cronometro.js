"use strict";

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();

function start() {
    document.getElementById('btn_start').hidden = true;
    document.getElementById('btn_pouse').hidden = false;
    document.getElementById('btn_reset').hidden = true;
    clearInterval(cron);
    cron = setInterval(() => { timer(); }, 10);
}

function pause() {
    document.getElementById('btn_start').hidden = false;
    document.getElementById('btn_pouse').hidden = true;
    document.getElementById('btn_reset').hidden = false;
    clearInterval(cron);
}

function reset() {
    document.getElementById('btn_start').hidden = false;
    document.getElementById('btn_pouse').hidden = true;
    document.getElementById('btn_reset').hidden = true;
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('hour').innerText = '00';
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
    document.getElementById('millisecond').innerText = '00';
}

function timer() {
    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        second++;
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        minute = 0;
        hour++;
    }
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
    document.getElementById('millisecond').innerText = returnDataMillisecond(millisecond).substring(0, 2);
}

function returnData(input) {
    return input > 10 ? input : `0${input}`
}
function returnDataMillisecond(input) {
    if (input < 10) {
        return '00' + input.toString()
    } else if (input < 100) {
        return '0' + input.toString()
    }
    return input.toString()
}


window.onload = function horario() {
    var today = new Date();
    var hora = today.getHours();
    if (hora < 10) {
        hora = '0' + hora;
    }
    var min = today.getMinutes();
    if (min < 10) {
        min = '0' + min;
    }
    var sec = today.getSeconds();
    if (sec < 10) {
        sec = '0' + sec;
    }
    document.getElementById('hora').textContent = hora + ":" + min + ":" + sec;
    if (hora == 0 || document.getElementById('hoje').textContent == "") {
        var dia = today.getDate();
        if (dia < 10) {
            dia = '0' + dia;
        }
        var mes = today.getMonth() + 1;
        if (mes < 10) {
            mes = '0' + mes;
        }
        document.getElementById('hoje').textContent = dia + "/" + mes + "/" + today.getFullYear();
    }
    const myTimeout = setTimeout(horario, 100);
}