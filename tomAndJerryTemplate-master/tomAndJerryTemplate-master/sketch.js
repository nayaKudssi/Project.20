var bg,together;
var tom, tomImage1, tomImage2, tomImage4;
var jerry, jerryImage1, jerryImage2;

function preload() 
{
  bg = loadImage("images/garden.png");
  tomImage1 = loadAnimation("images/cat1.png");
  tomImage2 = loadAnimation("images/cat2.png","images/cat3.png");
  tomImage3 = loadAnimation("images/cat4.png");
  jerryImage1 = loadAnimation("images/mouse1.png");
  jerryImage2 = loadAnimation("images/mouse2.png","images/mouse3.png");
  jerryImage3 = loadAnimation("images/mouse4.png");
}

function setup()
{
    createCanvas(1000,800);

    tom = createSprite(870,600);
    tom.addAnimation("sleeping",tomImage1);
    tom.scale = 0.2;

    jerry = createSprite(200,600);
    jerry.addAnimation("standing",jerryImage1);
    jerry.scale = 0.2;
}

function draw() 
{
    background(255);
    
    if(tom.x-jerry.x<(tom.width-jerry.width)/2)
    {
      tom.velocityX=0;
      tom.addAnimation("tomLast",tomImage3);
      tom.x = 300;
      tom.scale = 0.2;
      tom.changeAnimation("tomLast");
      
      jerry.addAnimation("jLast",jerryImage3);
      jerry.scale = 0.2;
      jerry.changeAnimation("jerryLast");
    }

    drawSprites();
}


function keyPressed()
{
    if(keyCode === LEFT_ARROW)
    { 
      tom.velocityX = -5; 
      tom.addAnimation("tomRunning", tomImage2); 
      tom.changeAnimation("tomRunning"); 
      jerry.addAnimation("jerryTeasing", jerryImage2); 
      jerry.frameDelay = 25;
      jerry.changeAnimation("jerryTeasing"); 
    }
}
