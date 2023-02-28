//código do ator

let xAtor = 85;
let yAtor = 366;
let colide = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeMover()){
      yAtor += 3;
    }
  }
}

//essa função verifica a colisão do ator com o carro com o auxílio do código obtido em uma biblioteca
function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao) {
      voltaAtorPosicaoInicial();
      somColisao.play();
      if (pontosMaiorQueZero()) {
        meusPontos -= 1;
      }
    }    
  }
}

//essa função reseta a posição do ator caso ele tenha colidido com um carro
function voltaAtorPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255,215,0));
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yAtor < 15) {
    meusPontos += 1;
    somPontos.play();
    voltaAtorPosicaoInicial();
  }
}

function pontosMaiorQueZero() {
  return meusPontos > 0;
}

function podeMover() {
  return yAtor < 366;
}