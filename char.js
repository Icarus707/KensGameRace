var Char = function(){

	this.x = 0;
	this.y = 0;
	this.xVel = 0;
	this.yVel = 0;
	this.xSize = 20;
	this.ySize = 20;
	this.speed = 5;

	this.y = gameHeight - this.ySize;
	
	this.update = function(){
		this.keyboard();
	};

	this.draw = function(){
		
		fill(255);
		rect(this.x, this.y, this.xSize, this.ySize);
	};

	this.keyboard = function(){


		// if(keyIsDown(UP_ARROW)){
		// 	console.log("up");
		// 	this.y = this.y + -this.speed;
		// }
		// if(keyIsDown(DOWN_ARROW)){
		// 		this.y = this.y + this.speed;
		// }

		if(keyIsDown(LEFT_ARROW) && this.x > 0){
				this.x = this.x + -this.speed;
		}

		if(keyIsDown(RIGHT_ARROW) && this.x + this.xSize < gameWidth){
				this.x = this.x + this.speed;
		}

		
	
	};
};