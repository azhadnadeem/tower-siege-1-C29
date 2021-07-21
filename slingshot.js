class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.01,
            lenght:80
        }

       
        this.pointB=pointB
        this.Sling=Constraint.create(options);
        World.add(world,this.Sling);
    }
       

    
    display(){
      
        var pointA=this.Sling.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(4);
        
        stroke("red");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}

