class Player{
    constructor(){
        this.x = 400;
        this.y = 250;
        this.width = 50;
        this.height = 50;
        this.visible = 255;
    };

    control(){
        if(keyIsDown(RIGHT_ARROW)){
            this.x += 3;
        }else if(keyIsDown(LEFT_ARROW)){
            this.x -= 3;
        }

        if(keyIsDown(UP_ARROW)){
            this.y -= 3;
        }else if(keyIsDown(DOWN_ARROW)){
            this.y += 3;
        }
    };

    update(){
        if(this.x > 800+25 || this.x < 0-25){
            this.x = 400;
            this.y = 250;
        }else if(this.y > 500+25 || this.y < 0-25){
            this.x = 400;
            this.y = 250;
        }
    };

    show(){
        fill(255, this.visible);
        rect(this.x, this.y, this.width, this.height);
    };
}