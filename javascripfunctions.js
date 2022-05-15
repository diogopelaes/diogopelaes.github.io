var elem = document.documentElement;

function aumentar(){
    var hora = document.getElementById('hora');
    var style_hora = window.getComputedStyle(hora, null).getPropertyValue('font-size');
    var fontSize_hora = parseFloat(style_hora); 
    hora.style.fontSize = (fontSize_hora + 5) + 'px';
    var hoje = document.getElementById('hoje');
    var style_hoje = window.getComputedStyle(hoje, null).getPropertyValue('font-size');
    var fontSize_hoje = parseFloat(style_hoje); 
    hoje.style.fontSize = (fontSize_hoje + 5) + 'px';
}

function diminuir(){
    var hora = document.getElementById('hora');
    var style_hora = window.getComputedStyle(hora, null).getPropertyValue('font-size');
    var fontSize_hora = parseFloat(style_hora); 
    hora.style.fontSize = (fontSize_hora - 5) + 'px';
    var hoje = document.getElementById('hoje');
    var style_hoje = window.getComputedStyle(hoje, null).getPropertyValue('font-size');
    var fontSize_hoje = parseFloat(style_hoje); 
    hoje.style.fontSize = (fontSize_hoje - 5) + 'px';
}

function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
    document.getElementById('fullscreen1').hidden = true;
    document.getElementById('fullscreen2').hidden = false;
}
      
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
    document.getElementById('fullscreen1').hidden = false;
    document.getElementById('fullscreen2').hidden = true;
}

function data_hoje() {
var today = new Date();
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