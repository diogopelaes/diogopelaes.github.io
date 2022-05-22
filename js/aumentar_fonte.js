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