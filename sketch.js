//global variables go here
var hairsize = 420;
var haircolor = "white";



//only use the preload function if you need to load images
//remember you will need to use Anvil to run your local server
// function preload(){
  
// }


//Set up your canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
  haircolor = color(random(255), random(255), random(255));

}


//Draw your story
function draw() {

  background("white");

	fill(haircolor);
	//noStroke();

  noStroke()
	ellipse(350, 320, 390,550);

	//draw the face
	fill("white")
	noStroke()
	rect(140,hairsize,500,600);
	
	fill("BurlyWood");
	noStroke()
	ellipse(350, 240, 300, 300);
	
	
	
	fill("black")
	ellipse(300,200,40,40);
	ellipse(400,200,40,40);
	fill("brown")
	ellipse(300,200,20,20);
	ellipse(400,200,20,20);
	
	fill("BurlyWood");
	noStroke()
	rect(285,360,130,130);

}

//add your functions
function mousePressed() {
	haircolor = color(random(255), random(255), random(255));
}

function keyPressed() {
if (keyCode === UP_ARROW) {
  hairsize = hairsize - 15;
} else if (keyCode === DOWN_ARROW) {
  hairsize = 1;
}
}
