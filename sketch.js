const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var cardboard=[];
var wall,wall2,wall3,wall4,infected_science,powerup,bg
var player = [];

function setup(){
    createCanvas(1000,1000);
    engine = Engine.create();
    world = engine.world;
    bg= loadImage("bg (1).jpeg")
    
cardboard[0]=new wally(175,100,350,10);
cardboard[1]=new wally(225,200,350,10);
cardboard[2]=new wally(175,300,350,10);
cardboard[3]=new wally(70,35,10,70);
cardboard[4]=new wally(140,55,10,70);
cardboard[5]=new wally(210,35,10,70);
cardboard[6]=new wally(280,55,10,70);
cardboard[7]=new wally(340,135,10,70);
cardboard[8]=new wally(270,165,10,70);
cardboard[9]=new wally(200,135,10,70);
cardboard[10]=new wally(130,165,10,70);
cardboard[11]=new wally(60,135,10,70);
cardboard[12]=new wally(60,265,10,70);
cardboard[13]=new wally(130,235,10,70);
cardboard[14]=new wally(200,265,10,70);
cardboard[15]=new wally(270,235,10,70);
cardboard[16]=new wally(340,265,10,70);
cardboard[17]=new wally(340,335,10,70);
cardboard[18]=new wally(270,365,10,70);
cardboard[19]=new wally(200,335,10,70);
cardboard[20]=new wally(130,365,10,70);
cardboard[21]=new wally(60,335,10,70);
cardboard[22]=new wally(575,100,350,10);
cardboard[23]=new wally(625,200,350,10);
cardboard[24]=new wally(575,300,350,10);
cardboard[25]=new wally(470,35,10,70);
cardboard[26]=new wally(540,55,10,70);
cardboard[27]=new wally(610,35,10,70);
cardboard[28]=new wally(680,55,10,70);
cardboard[29]=new wally(740,135,10,70);
cardboard[30]=new wally(670,165,10,70);
cardboard[31]=new wally(600,135,10,70);
cardboard[32]=new wally(530,165,10,70);
cardboard[33]=new wally(460,135,10,70);
cardboard[34]=new wally(460,265,10,70);
cardboard[35]=new wally(530,235,10,70);
cardboard[36]=new wally(600,265,10,70);
cardboard[37]=new wally(670,235,10,70);
cardboard[38]=new wally(740,265,10,70);
cardboard[39]=new wally(740,335,10,70);
cardboard[40]=new wally(670,365,10,70);
cardboard[41]=new wally(600,335,10,70);
cardboard[42]=new wally(530,365,10,70);
cardboard[43]=new wally(460,335,10,70);
cardboard[44]=new wally(175,500,350,10);
cardboard[45]=new wally(225,600,350,10);
cardboard[46]=new wally(175,700,350,10);
cardboard[47]=new wally(70,435,10,70);
cardboard[48]=new wally(140,455,10,70);
cardboard[49]=new wally(210,435,10,70);
cardboard[50]=new wally(280,455,10,70);
cardboard[51]=new wally(340,535,10,70);
cardboard[52]=new wally(270,565,10,70);
cardboard[53]=new wally(200,535,10,70);
cardboard[54]=new wally(130,565,10,70);
cardboard[55]=new wally(60,535,10,70);
cardboard[56]=new wally(60,665,10,70);
cardboard[57]=new wally(130,635,10,70);
cardboard[58]=new wally(200,665,10,70);
cardboard[59]=new wally(270,635,10,70);
cardboard[60]=new wally(340,665,10,70);
cardboard[61]=new wally(340,735,10,70);
cardboard[62]=new wally(270,765,10,70);
cardboard[63]=new wally(200,735,10,70);
cardboard[64]=new wally(130,765,10,70);
cardboard[65]=new wally(60,735,10,70);
cardboard[66]=new wally(575,500,350,10);
cardboard[67]=new wally(625,600,350,10);
cardboard[68]=new wally(575,700,350,10);
cardboard[69]=new wally(470,435,10,70);
cardboard[70]=new wally(540,455,10,70);
cardboard[71]=new wally(610,435,10,70);
cardboard[72]=new wally(680,455,10,70);
cardboard[73]=new wally(740,535,10,70);
cardboard[74]=new wally(670,565,10,70);
cardboard[75]=new wally(600,535,10,70);
cardboard[76]=new wally(530,565,10,70);
cardboard[77]=new wally(460,535,10,70);
cardboard[78]=new wally(460,665,10,70);
cardboard[79]=new wally(530,635,10,70);
cardboard[80]=new wally(600,665,10,70);
cardboard[81]=new wally(670,635,10,70);
cardboard[82]=new wally(740,665,10,70);
cardboard[83]=new wally(740,735,10,70);
cardboard[84]=new wally(670,765,10,70);
cardboard[85]=new wally(600,735,10,70);
cardboard[86]=new wally(530,765,10,70);
cardboard[87]=new wally(460,735,10,70);

wall= new wally(1000,500,5,1002)
wall2= new wally(0,500,5,1002)
wall3= new wally(500,0,1002,5)
wall4= new wally(500,1000,1002,5)

infected_science = new undead(Math.round(random(0,800)),Math.round(random(0,800)),50,50)



for(var a=0;a<4;a++){
  player[a]=new for_science(Math.round(random(0,800)),Math.round(random(0,800)),50,50)
  }
}

function draw(){
    background(bg)
    //createEdgeSprites();
    Engine.update(engine);
    for(var i=0; i<88; i++){
      cardboard[i].display();
    }
    for(var i=0;i<3;i++){
      player[i].display()
    }
    wall.display()
    wall4.display()
    wall2.display()
    wall3.display()
    infected_science.display()

}

function mouseDragged(){
  Matter.Body.setPosition(infected_science.body, {x: mouseX , y: mouseY});
}


