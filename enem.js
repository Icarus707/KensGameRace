var Enem = function(x){

	this.x = 0;
	this.y = 0;
	this.xVel = 0;
	this.yVel =0;
	this.speed = 5;
	this.xSize = 20;
	this.ySize = 20;

	this.x = x;
	this.update = function(){
		this.y = this.y + this.speed;

		if(this.y > gameHeight){
			this.y = -this.ySize;
		}

	};

	this.draw = function(){
		fill(green);
		rect();

	};
};