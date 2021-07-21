class Polygon{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:1,
            friction:1,
            density:1

        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.width=60;
        this.height=60;
       
        this.image=loadImage("polygon.png")
        World.add(world,this.body);
    }
    display(){
        var angle=this.body.angle;
      //  this.body.position.x = mouseX
       // this.body.position.y = mouseY
      
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();
        
    }

}