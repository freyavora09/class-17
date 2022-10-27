
function setup() 
{
  createCanvas(400, 400);
box1=new Box(20,27,25,15,2)
box2=new Box(24,30,35,40,1)
}

function draw() 
{
  background(220);
box1.display()
box1.move()
box2.display()
box2.move()
}

