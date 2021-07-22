class Block{
    constructor(x,y,width,height){
        var bounce={
            restitution:0.002,
            friction:0.0001,
            density:0.001
        }
        this.block=Bodies.rectangle(x,y,width,height,bounce);
        this.width=width;
        this.height=height
        World.add(world,this.block)
    }
    display(){
        
        var pos=this.block.position;
        var angle=this.block.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        strokeWeight(5);
        stroke("yellow");
        rect(0,0,this.width,this.height);
        pop() ;  
    }
    
    }

