class Kenobi{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("obi wan.png")
		this.body=Bodies.circle(x,y,r,options);
		World.add(world, this.body);
	}

	display()
	{
		var Pos=this.body.position;	
		push()
		translate(Pos.x,Pos.y);
		rotate(this.body.angle)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, Pos.x , Pos.y,this.r*2, this.r*2)
		pop()
 }
}