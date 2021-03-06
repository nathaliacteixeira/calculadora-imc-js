function calcularIMC(){

    let altura = parseFloat(document.querySelector('#altura').value);
    let peso = parseFloat(document.querySelector('#peso').value);

    if(isNaN(altura) || isNaN(peso)) {
        alert('Altura e/ou peso inválidos!');
        return;
    }

    if(altura < 0 || peso < 0){
        alert("Altura e/ou peso precisam ser maior que 0!");
        return;
    }

    imc = peso / Math.pow(altura, 2);
     
    document.querySelector('.imc').innerHTML = "O seu IMC é: " + imc.toFixed(2); 

    if(imc < 16) {
        classeClassificacao = ('magreza-grave');
        classificacao = 'Magreza grave';

    }else if(imc >= 16 && imc < 17) {
        classeClassificacao = ('magreza-moderada');
        classificacao = 'Magreza moderada';

    }else if(imc >= 17 && imc < 18.5) {
        classeClassificacao = ('magreza-leve');
        classificacao = 'Magreza leve';

    }else if(imc >= 18.5 && imc < 25) {
        classeClassificacao = ('saudavel');
        classificacao = 'Saudável';

    }else if(imc >= 25 && imc < 30) {
        classeClassificacao = ('sobrepeso');
        classificacao = 'Sobrepeso';

    }else if(imc >= 30 && imc < 35) {
        classeClassificacao = ('obesidade-grau-i');
        classificacao = 'Obesidade Grau I';

    }else if(imc >= 35 && imc < 40) {
        classeClassificacao = ('obesidade-grau-ii');
        classificacao = 'Obesidade Grau II (severa)';
        
    }else if(imc >= 40) {
        classeClassificacao = ('obesidade-grau-iii');
        classificacao = 'Obesidade Grau III (mórbida)';

    }

    let pClassificacao =  document.querySelector('.classificacao');
    pClassificacao.innerText = 'A classificação do seu IMC é: ' + classificacao;
    pClassificacao.className(classeClassificacao);
}

function limpar(){
    let altura = document.querySelector('#altura');
    let peso = document.querySelector('#peso');
    let imc = document.querySelector('.imc')
    let classificacao = document.querySelector('#classificacao');

    altura.value  = '';
    peso.value  = '';
    imc.innerHTML  = '';
    classificacao.innerHTML  = '';
}