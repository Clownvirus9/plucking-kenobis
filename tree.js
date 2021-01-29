class Tree
{
    constructor(x,y,w,h){
    var options = {
        isStatic:true
    }
	
		this.x=x;
        this.y=y;
        this.width=w;
        this.height=h;
		this.body=Bodies.rectangle(x, y, w, h , options);
		
		this.image=loadImage("tree.png")
		
		
        World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;
			push()
			translate(pos.x, pos.y);
			fill(250);
			imageMode(CENTER);
			image(this.image, pos.x,pos.y, this.width,this.height)
			pop()
			
	}

}