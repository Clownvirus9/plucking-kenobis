class Lightsaber
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("saber.png");
		this.body=Bodies.circle(x, y, r, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			imageMode(CENTER);
			image(this.image, pos.x,pos.y,this.r*2, this.r*2)
			pop()
			
	}

}