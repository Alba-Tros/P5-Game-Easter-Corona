class coinz {
    constructor() {
        this.width = 65;
        this.height = 65;
        this.x = WIDTH;
        this.y = random(0, HEIGHT - this.height);
        this.img = loadImage("./assets/coins/tile000.png");
        this.index = 0;
    }
    display() {
        this.x -= 3 * game.speed;
        if (frameCount % 10 === 0) {
            this.index++;
        }
        image(
            game.coins[this.index % 5],
            this.x,
            this.y,
            this.width,
            this.height
        );
    }
}
