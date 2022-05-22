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