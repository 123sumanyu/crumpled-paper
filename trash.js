class Trash{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options={
		restitution:0.3,
		density:1,
		friction:1
	}
		this.x=x;
		this.y=y;
		this.r=r
        this.image=loadImage("paper.png")
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var trashpos=this.body.position;		
			//push()
			translate(trashpos.x, trashpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			//stroke("black");
			//fill("white");
			//ellipse(0,0,this.r,this.r);
            
             imageMode(CENTER);
             image(this.image, 0, 0,100,100);
           
			//pop()
	}

}