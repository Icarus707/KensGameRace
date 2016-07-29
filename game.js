
var gameWidth = 400;
var gameHeight = 400;
var char;


function setup(){
	createCanvas(gameWidth, gameHeight);
	char = new Char();
	enem = new Enem(45);
}


function update(){
	char.update();
}


function draw(){
	update();
	background(51);
	char.draw();
}