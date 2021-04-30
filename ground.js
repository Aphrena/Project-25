class ground{
    constructor(){
        this.body = Bodies.rectangle(400, 650, 800, 5,{isStatic:true});
        World.add(world, this.body);

    }

    Display(){
        rectMode(CENTER);
        fill("red");
        rect(this.body.position.x, this.body.position.y, 1900, 5);
    }
}