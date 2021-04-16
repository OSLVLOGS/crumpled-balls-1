class Ball{
    constructor(x, y, width, height, angle){
      
        var opt={
            restitution:1,
            friction:1.0,
            density:0.04
        }
        this.body=Bodies.rectangle(x,y,width,height,opt);
        this.width=width;
        this.height=height;
        World.add(world,this.body);

    }

     
    display(){
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("blue");
        ellipse(0, 0,this.width,this.height);
        pop();
    }

}