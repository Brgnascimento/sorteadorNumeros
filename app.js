function sortear(){
    
    // Identifica o valor digitado pelo usuário
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    let sorteados = []; // Cria uma array dos números a serem passados no looping
    let numero; 

    // inserir número na lista sorteados
    if (de >= ate){
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!')
    } else {
        for (let i=0; i<quantidade; i++){
            numero = gerarNumeroAleatorio(de,ate);

            while (sorteados.includes(numero)){
                numero = gerarNumeroAleatorio(de,ate) // Checa se o número já existe;    
            }
            sorteados.push(numero);
        }
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML= `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>` // Altera o texto do resultado;

    let botao = document.getElementById('btn-reiniciar')
    botao.classList.contains('container__botao-desabilitado')
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao'); 
    // Altera status do botão de reinicio ao clicar em sortear
}


function gerarNumeroAleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    let botao = document.getElementById('btn-reiniciar')
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado'); 
}