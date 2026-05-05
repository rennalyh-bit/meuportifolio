document.getElementById('calcularBtn').addEventListener('click', function () {
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');
    const resultadoImc = document.getElementById('resultadoIMC');
    const classificacaoImc = document.getElementById('classificacaoIMC');

    const peso = parseFloat(pesoInput.value.replace(',','.'));
    const altura = parseFloat(alturaInput.value.replace(',','.'));

    if (!peso || !altura || peso <= 0 || altura <= 0) {
        resultadoImc.textContent = 'Por favor, insira valores válidos para peso e altura.';
        classificacaoImc.textContent = '';
        return;
    }

    const imc = peso/ (altura * altura);
    const imcFixed = imc.toFixed(2);

    resultadoImc.textContent = `Seu IMC é: ${imcFixed}`;

    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
        classificacaoImc.style.color = 'blue';

    } else if (imc < 24.9) {
        classificacao = 'Peso normal';
        classificacaoImc.style.color = 'green';

    } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
        classificacaoImc.style.color = 'yellow';
        
    } else if (imc < 34.9) {
        classificacao = 'Obesidade grau 1';
        classificacaoImc.style.color = 'orange';

    } else if (imc < 39.9) {
        classificacao = 'Obesidade grau 2';
        classificacaoImc.style.color = '#d63031';

    } else {
        classificacao = 'Obesidade grau 3';
        classificacaoImc.style.color = '#b71540';
    }

    classificacaoImc.textContent = classificacao;
});