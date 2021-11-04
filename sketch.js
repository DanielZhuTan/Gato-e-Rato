var gato, gatoImg1, gatoImg2, gatoImg3;
var rato, ratoImg1, ratoImg2;
var planodefundo, planodefundoImg;

function preload() {
    //carregue as imagens aqui
    planodefundoImg = loadImage("garden.png");
    gatoImg1 = loadImage("cat1.png");
    ratoImg1 = loadImage("mouse1.png");
    gatoImg2 = loadImage("cat2.png","cat3.png");
    ratoImg2 = loadImage("mouse2.png","mouse3.png");
    gatoImg3 = loadImage("cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui

    gato = createSprite(870, 600);
    gato.addAnimation("gatoSentado", gatoImg1);
    gato.scale = 0.2;

    rato = createSprite(560, 600);
    rato.addAnimation("ratoQueijo", ratoImg1);
    rato.scale = 0.2;
    
}

function draw() {

    background(255);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem

    if(gato.x - rato.x < (gato.width - rato.width)/2){
        gato.velocityX = 0;
        gato.addAnimation("últimaImageGato", catImg3);
        gato.chargeAnimation("últimaImageGato");
        gato.x = 300;
        gato.scale = 0.2;
    }

    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui

  if(keyCode === LEFT_ARROW){
     rato.addAnimation("ratoProvocando", ratoImg2);
     rato.chargeAnimation("ratoProvocando");
     MouseEvent.frameDelay = 25;

     gato.velocityX = -5;

  }


}
