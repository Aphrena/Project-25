class box{
    constructor(){
        this.box1 = Bodies.rectangle(1000, 640, 200, 10,{isStatic:true});
        World.add(world, this.box1);

        this.box2 = Bodies.rectangle(900, 545, 10, 200, {isStatic:true});
        World.add(world, this.box2);

        this.box3 = Bodies.rectangle(1100, 545, 10, 200, {isStatic:true});
        World.add(world, this.box3);

        this.image = loadImage("Images/dustbingreen.png");
    }

    Display(){
        rectMode(CENTER);
        fill("blue");
        rect(this.box1.position.x, this.box1.position.y, 200, 10);
        rect(this.box2.position.x, this.box2.position.y, 10, 200);
        rect(this.box3.position.x, this.box3.position.y, 10, 200);
        imageMode(CENTER);
        image(this.image, 1000, 525, 250, 250);
        
    }
}