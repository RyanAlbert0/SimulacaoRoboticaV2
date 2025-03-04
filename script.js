// Identificar elementos

IMG = document.getElementById('imagem')
LISTA = document.getElementById('lista')
DISTANCIA_BOX = document.getElementById('distancia')
POTENCIA = document.getElementById('potencia')
TEMPO_BOX = document.getElementById('tempo')

// Definir Imagens

var Sim1 = "img/Saída Vermelha.png";
var Sim2 = "img/Saída Rosa.png";
var Sim3 = "img/Saída Preta.png";
var Sim4 = "img/Saída Branca.png";
var Sim5 = "img/Saída Azul.png";
var Sim7 = "img/Saída Amarela.png";
var Sim8 = "img/Saída Laranja.png";
var Sim9 = "img/Saída Verde.png";



// Adicionar Eventos

POTENCIA.addEventListener('change', calcular)
LISTA.addEventListener('change', calcular)

function calcular(){

    // Calcular o Tempo

    VELOCIDADE = Math.round(parseFloat(15.83 * POTENCIA.value) / 100);
    VALOR_DISTANCIA = LISTA.value;
    DISTANCIA = parseInt(VALOR_DISTANCIA)
    VALOR_TEMPO = DISTANCIA / VELOCIDADE;
    TEMPO = parseInt(VALOR_TEMPO)
    console.log("tempo: " + TEMPO + ', distância: ' +  DISTANCIA + ' e Velocidade: ' + VELOCIDADE)
    document.getElementById('tempo').value = TEMPO + ' segundos'
    document.getElementById('distancia').value = DISTANCIA + ' centímetros'

    // Mudar de Imagem

    if(LISTA.value == '152,5')
    {
        document.getElementById('imagem').src = Sim1 
    }
    if(LISTA.value == '105')
    {
        document.getElementById('imagem').src = Sim2 
    }
    if(LISTA.value == '125')
    {
        document.getElementById('imagem').src = Sim3 
    }
    if(LISTA.value == '184')
    {
        document.getElementById('imagem').src = Sim4 
    }
    if(LISTA.value == '145')
    {
        document.getElementById('imagem').src = Sim5 
    }
    if(LISTA.value == '92')
    {
        document.getElementById('imagem').src = Sim7 
    }
    if(LISTA.value == '114')
    {
        document.getElementById('imagem').src = Sim8 
    }
    if(LISTA.value == '98')
    {
        document.getElementById('imagem').src = Sim9 
    }

}

