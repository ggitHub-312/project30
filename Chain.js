class Chain{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10,
        }
        this.bodyA = bodyA;
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

   

    display(){
        
            var bodyA = this.sling.bodyA.position;
            var pointB = this.pointB
            
            push()
            strokeWeight(1);
            stroke("grey");
            line(bodyA.x,bodyA.y,pointB.x,pointB.y);
            pop()
        }
    }
