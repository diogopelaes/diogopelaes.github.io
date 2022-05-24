let list_primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
let acertos = 0
let erros = 0

window.onload = function carregar() {
    let tabela = document.getElementById('tabela_numeros');
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.className = 'clicar';
    td.setAttribute('onclick', 'verificar(this)');
    for (i = 0; i < 5; i++){
        tabela.appendChild(tr.cloneNode(true))
        var linha = tabela.lastElementChild;
        for (j = 1; j < 11; j++){
            linha.appendChild(td.cloneNode(true));
            linha.lastElementChild.innerHTML = 10*i +j;
        }
    }
}

function verificar(element) {
    var n = parseInt(element.innerHTML)
    if (list_primos.includes(n)){
        erros += 1
        document.getElementById('erros').innerHTML = erros;
        var fafaerro = document.getElementById('fafaerro');
        fafaerro.hidden = false;
        document.getElementById('fafaacerto').hidden = true;
    } else {
        acertos += 1
        document.getElementById('acertos').innerHTML = acertos;
        element.innerHTML = '';
        var fafaacerto = document.getElementById('fafaacerto');
        fafaacerto.hidden = false;
        document.getElementById('fafaerro').hidden = true;
    }
}