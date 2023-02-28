//código do carro

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2.3, 2.8, 3.5, 5, 3.7, 2.6];
let comprimentoCarro = 50;
let alturaCarro = 40;


//apenas exibe a imagem do carro na tela
//a localização dos carros dependem das coordenadas xCarros e yCarros armazenadas nos arrays
//the statement 'for' repeats the code that gives the order to display the cars images on the screen making the code smaller and more effective 
function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
   }
  }

//essa função subtrai continuamente o valor da var velocidadeCarros do eixo x dos carros - xCarros - o que gera a aparência de movimento na tela
function movimentaCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

// quando xCarros chega na posição -50 a posição é resetada para 600
function voltaPosicaoInicial() {
  for (let i = 0; i < imagemCarros.length; i++) {
    if (passouTodaATela(xCarros[i])) {
    xCarros[i] = 600;
   }
 }
}

//essa função verifica se o carro chegou à posição -50 e retorna a informação para a função voltaPosicaoInicial
function passouTodaATela(xCarro) {
  return xCarro < -50;
}