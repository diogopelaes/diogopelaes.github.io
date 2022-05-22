function fraction(esse, n) {
    document.getElementById('denominador'+n).innerHTML = esse.value;
    var denominador = parseInt(esse.value);
    if (denominador == 1){
        document.getElementById('parte_text').innerHTML = ' Parte';
    }else {
        document.getElementById('parte_text').innerHTML = ' Partes';
    }
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
    document.getElementById(idNumerador).innerHTML = document.getElementsByName(idNumerador).length;
    ver_frac();
}

function ver_frac() {
    if (document.getElementById('show_frac').checked) {
        document.getElementById('resul').hidden = false;
        document.getElementById('n_resul1').innerHTML = document.getElementById('numerador1').innerHTML;
        document.getElementById('d_resul1').innerHTML = document.getElementById('denominador1').innerHTML;
    }else {
        document.getElementById('resul').hidden = true;
    }
}