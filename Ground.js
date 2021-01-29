class Ground
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			var Pos=this.body.position;		
			push()
			translate(Pos.x, Pos.y);
			rectMode(CENTER)
			fill("black");
			rect(Pos.x,Pos.y,this.w, this.h);
			pop()
			
	}

}