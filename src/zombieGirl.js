class zombieGirl {
    constructor() {
        this.height = 521 / 2;
        this.width = 576 / 2;
        this.x = width;
        this.y = height - (this.height - 10);
        this.img = loadImage("./assets/Zombie-Boy-Girl-png/female/Walk-01.png");
        this.index = 0;
    }
    display() {
        this.x -= 8 * game.speed;
        if (frameCount % 10 === 0) {
            this.index++;
        }
        image(
            game.zombieG[this.index % 5],
            this.x,
            this.y,
            this.width,
            this.height
        );
    }
}
