function calcularIMC(){

    let altura = parseFloat(document.querySelector('#altura').value);
    let peso = parseFloat(document.querySelector('#peso').value);

    if(isNaN(altura) || isNaN(peso)) {
        alert('Altura e/ou peso inválidos!');
        return;
    }

    if(altura!=0 || peso != 0){
        imc = (peso / (altura * altura));
    }else{
        alert("Altura e/ou peso precisam ser maior que 0!");
    }
     
    document.querySelector('.imc').innerHTML = "O seu IMC é: " + imc.toFixed(2); 

    let classeAntes = document.querySelector('.classificacao').className;
    let classeDepois = document.querySelector('.classificacao');

    if(imc < 16) {

        if(classeAntes != ''){
            classeDepois.classList.remove(classeAntes);
        }

        classeDepois.classList.add('magreza-grave');
        classificacao = 'Magreza grave';

    }else if(imc >= 16 && imc < 17) {

        if(classeAntes != ''){
            classeDepois.classList.remove(classeAntes);
        }

        classeDepois.classList.add('magreza-moderada');
        classificacao = 'Magreza moderada';

    }else if(imc >= 17 && imc < 18.5) {

        if(classeAntes != ''){
            classeDepois.classList.remove(classeAntes);
        }

        classeDepois.classList.add('magreza-leve');
        classificacao = 'Magreza leve';

    }else if(imc >= 18.5 && imc < 25) {

        if(classeAntes != ''){
            classeDepois.classList.remove(classeAntes);
        }

        classeDepois.classList.add('saudavel');
        classificacao = 'Saudável';

    }else if(imc >= 25 && imc < 30) {

        if(classeAntes != ''){
            classeDepois.classList.remove(classeAntes);
        }

        classeDepois.classList.add('sobrepeso');
        classificacao = 'Sobrepeso';

    }else if(imc >= 30 && imc < 35) {

        if(classeAntes != ''){
            classeDepois.classList.remove(classeAntes);
        }

        classeDepois.classList.add('obesidade-grau-i');
        classificacao = 'Obesidade Grau I';

    }else if(imc >= 35 && imc < 40) {

        if(classeAntes != ''){
            classeDepois.classList.remove(classeAntes);
        }

        classeDepois.classList.add('obesidade-grau-ii');
        classificacao = 'Obesidade Grau II (severa)';
        
    }else if(imc >= 40) {

        if(classeAntes != ''){
            classeDepois.classList.remove(classeAntes);
        }

        classeDepois.classList.add('obesidade-grau-iii');
        classificacao = 'Obesidade Grau III (mórbida)';

    }

    classeDepois.innerText = 'A classificação do seu IMC é: ' + classificacao;
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