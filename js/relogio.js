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
