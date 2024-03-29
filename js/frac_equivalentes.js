function fraction(esse, n) {
    document.getElementById('denominador'+n).innerHTML = esse.value;
    var denominador = parseInt(esse.value);
    let table_column  = document.getElementById('parte'+n).cloneNode(true);
    table_column.className='partes';
    table_column.setAttribute('name', '');
    let element = document.getElementById('fig'+n);
    while (element.childElementCount - denominador >= 0) {
        element.removeChild(element.lastChild);
    }
    while (element.childElementCount - denominador < 0) {
        element.appendChild(table_column.cloneNode(true));
    }
    numerador('numerador'+n);
}

function pintar_parte(esse, n) {
    if (esse.classList.contains('parte_pintada')){
        esse.className='partes';
        esse.setAttribute('name', '');
    }else{
        esse.classList.add('parte_pintada');
        esse.setAttribute('name', 'numerador'+n);
    }
    numerador('numerador'+n);
}

function numerador(idNumerador){
    document.getElementById('verificar').hidden = false;
    document.getElementById('resul').hidden = true;
    document.getElementById('resul_text').innerHTML = '';
    document.getElementById(idNumerador).innerHTML = document.getElementsByName(idNumerador).length;
}

function verificar(){
    document.getElementById('verificar').hidden = true;
    document.getElementById('resul').hidden = false;
    document.getElementById('n_resul1').innerHTML = document.getElementById('numerador1').innerHTML;
    document.getElementById('n_resul2').innerHTML = document.getElementById('numerador2').innerHTML;
    document.getElementById('d_resul1').innerHTML = document.getElementById('denominador1').innerHTML;
    document.getElementById('d_resul2').innerHTML = document.getElementById('denominador2').innerHTML;
    var n1 = parseInt(document.getElementById('numerador1').innerHTML);
    var d1 = parseInt(document.getElementById('denominador1').innerHTML);
    var n2 = parseInt(document.getElementById('numerador2').innerHTML);
    var d2 = parseInt(document.getElementById('denominador2').innerHTML);
    if (n1/d1 == n2/d2){
        document.getElementById('igual').innerHTML = '=';
        document.getElementById('resul_text').innerHTML = 'São frações equivalentes';
    }else{
        document.getElementById('igual').innerHTML = '≠';
        document.getElementById('resul_text').innerHTML = 'NÃO são frações equivalentes';
    }
}