module objects {

    // Bullet Class
    export class Bomb extends objects.GameObject {
        constructor() {
            super(assets.loader.getResult("bomb"));
            this.init();
            this.name = "bomb";
            stage.addChild(this);
        }

        // PUBLIC METHODS
        public init()
        {
            this.x = level3Enemy.x;
            this.y = level3Enemy.y;
        }

        update() {
            this.x -= 8;

        }
    }
}  