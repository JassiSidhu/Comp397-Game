module objects {

    // Bullet Class
    export class Bullet extends objects.GameObject {
        constructor() {
            super(assets.loader.getResult("bullet"));
            this.init();
            this.name = "bullet";
            this.sound = "bullets";
            stage.addChild(this);
        }

        // PUBLIC METHODS
        public init()
        {
                  
            this.x = boat.x;
            this.y = boat.y;
        }

        update() {
            this.x += 10;
           
        }
    }
} 