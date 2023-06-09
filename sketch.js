var path,boy,leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg = loadImage("path.png");
}

function setup(){
  
  createCanvas(400,400);
  path=createSprite(200,200);
  //Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2;


  //crear sprite de boy (niño)
  boy=createSprite(200,340,50,50);
  //agregar animación para boy
  boy.addAnimation("JakeRunning",boyImg);
  boy.scale=0.08;
  

  // crear  left Boundary (límite izquierdo)
  leftBoundary=createSprite(0,0,100,800);
  ////establecer visibilidad como false (falso) para límite izquierdo
  leftBoundary.visible= false;

  //crear right Boundary (límite derecho)
  rightBoundary=createSprite(410,0,100,800);
  //establecer visibilidad como false (falso) para límite izquierdo
  rightBoundary.visible= false;
}

function draw() {
  
  background(0);
  path.velocityY = 4;
  
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }

  drawSprites();
}