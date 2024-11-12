function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let exercicios = [];
let resultados = [];
let respostasCorretas = [];

while (exercicios.length < 10) {
    let fator1 = getRandomNumber(2, 10);
    let fator2 = getRandomNumber(2, 10);
    let resultado = fator1 * fator2;
    
    let txt = `\\(${fator1} \\times ${fator2} = \\)`;
    
    if (exercicios.includes(txt)) {
        continue;
    }
    
    exercicios.push(txt);
    resultados.push(`\\(${resultado}\\)`);
    respostasCorretas.push(resultado);
}

let exerciciosDiv = document.getElementById('exercicios');
let acertos = 0;

// Criar container principal com duas colunas
let mainContainer = document.createElement('div');
mainContainer.className = 'row';

// Coluna para exercícios (8 colunas)
let exerciciosCol = document.createElement('div');
exerciciosCol.className = 'col-8';
mainContainer.appendChild(exerciciosCol);

// Coluna para imagem (4 colunas)
let imageCol = document.createElement('div');
imageCol.className = 'col-4 position-relative d-flex flex-column align-items-center';
imageCol.style.minHeight = '200px';

// Adiciona a imagem school.png fixa
const schoolImg = document.createElement('img');
schoolImg.src = 'img/school.png';
schoolImg.id = 'school-img';
schoolImg.className = 'img-fluid position-sticky';
schoolImg.style.maxWidth = '200px';
imageCol.appendChild(schoolImg);

mainContainer.appendChild(imageCol);

exerciciosDiv.appendChild(mainContainer);

exercicios.forEach((exercicio, index) => {
    let row = document.createElement('div');
    row.className = 'row mb-5 align-items-center';
    
    let colExercicio = document.createElement('div');
    colExercicio.className = 'col-6 text-end';
    
    let p = document.createElement('p');
    p.className = 'mb-0';
    p.innerHTML = exercicio;
    colExercicio.appendChild(p);
    
    let colInput = document.createElement('div');
    colInput.className = 'col-6 text-start d-flex align-items-center';
    
    let input = document.createElement('input');
    input.type = 'text';
    input.id = `exercicio-${index}`;
    input.className = 'form-control form-control-sm';
    input.style.width = '4rem';
    input.maxLength = 3;
    
    let icon = document.createElement('span');
    icon.className = 'material-symbols-outlined';
    icon.style.display = 'none';
    
    const verificarResposta = () => {
        if (input.value.trim() !== '') {
            const resposta = parseInt(input.value);
            if (resposta === respostasCorretas[index]) {
                icon.textContent = 'done_outline';
                icon.style.color = '#198754';
                if (!input.dataset.contabilizado) {
                    acertos++;
                    input.dataset.contabilizado = 'true';
                }
            } else {
                icon.textContent = 'cancel';
                icon.style.color = '#dc3545';
                if (input.dataset.contabilizado) {
                    acertos--;
                    input.dataset.contabilizado = 'false';
                }
            }
            icon.style.display = 'inline';
            
            if (acertos >= 8) {
                const goodJobExistente = document.getElementById('good-job-img');
                if (!goodJobExistente) {
                    const goodJobImg = document.createElement('img');
                    goodJobImg.src = 'img/good-job.png';
                    goodJobImg.id = 'good-job-img';
                    goodJobImg.className = 'img-fluid';
                    goodJobImg.style.maxWidth = '200px';
                    imageCol.appendChild(goodJobImg);
                }
            } else {
                const goodJobImg = document.getElementById('good-job-img');
                if (goodJobImg) {
                    goodJobImg.remove();
                }
            }
        }
    };
    
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            verificarResposta();
            const nextInput = document.getElementById(`exercicio-${index + 1}`);
            if (nextInput) {
                nextInput.focus();
            }
        }
    });
    
    input.addEventListener('blur', verificarResposta);
    
    colInput.appendChild(input);
    colInput.appendChild(icon);
    
    row.appendChild(colExercicio);
    row.appendChild(colInput);
    exerciciosCol.appendChild(row);
});

window.onload = () => {
    document.getElementById('exercicio-0').focus();
};
