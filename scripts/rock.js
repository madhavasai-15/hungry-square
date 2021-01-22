class Rock{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = 25;
        this.height = 25;
    };

    
    update(player){
        if(this.x > player.x-player.width/2 && this.x < player.x+player.width/2 && this.y > player.y-player.height/2 && this.y < player.y+player.height/2){
            score--;
            if(timer > 0){
                timer -= 2;
            }
            this.x = random(100, 700);
            this.y = random(100, 400);
        }
    };

    show(){
        fill(200);
        rect(this.x, this.y, this.width, this.height);
    };
}