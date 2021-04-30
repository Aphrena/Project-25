class paper{
    constructor(){

    var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }

        this.body = Bodies.circle(100, 620, 10, options);
        World.add(world,this.body);

        this.image = loadImage("Images/paper.png");
    }

    Display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
       
        ellipse(0, 0, 10, 10);
        pop();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 40, 40);
        
    }
}
