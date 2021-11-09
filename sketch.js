var gato, gatoImg1, gatoImg2, gatoImg3;
var rato, ratoImg1, ratoImg2, ratoImg3;
var planodefundo, planodefundoImg;

function preload() {
    //carregue as imagens aqui
    planodefundoImg = loadImage("images/garde.png");
    gatoImg1 = loadImage("images/cat1.png");
    gatoImg2 = loadImage("images/cat2.png","images/cat3.png");
    gatoImg3 = loadImage("images/cat4.png");
    ratoImg1 = loadImage("images/mouse1.png");
    ratoImg2 = loadImage("images/mouse2.png","images/mouse3.png");
    ratoImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui

    gato = createSprite(870, 600);
    gato.addAnimation("gatoSentado", gatoImg1);
    gato.scale = 0.2;

    rato = createSprite(200, 600);
    rato.addAnimation("ratoQueijo", ratoImg1);
    rato.scale = 0.15;
    
}

function draw() {

    background(planodefundoImg);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem

    if(gato.x - rato.x < (gato.width - rato.width)/2){
        gato.velocityX = 0;
        gato.addAnimation("ultimaImageGato", catImg3);
        gato.x = 300;
        gato.scale = 0.2;
        gato.chargeAnimation("ultimaImageGato");
        rato.addAnimation("ratoproxima",ratoImg3);
        rato.scale = 0.15;
        rato.chargeAnimation("ratoproxima");
        
    }

    drawSprites();
}


function mousePressed(){

  //Para mover e alterar a animação, escreva o código aqui

  if(keyCode === LEFT_ARROW){
    gato.velocityX = -5;
    gato.addAnimation("gatoCorrendo",gatoImg2);
    gato.chargeAnimation("gatoCorrendo");

    rato.addAnimation("ratoProvocando", ratoImg2);
    rato.frameDelay = 25;
    rato.chargeAnimation("ratoProvocando");
  }


}
