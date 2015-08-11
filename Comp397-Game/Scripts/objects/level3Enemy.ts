/// <reference path="../managers/assets.ts" />

module objects {
    // Boat Class ..............................
    export class Level3Enemy extends objects.GameObject {
        // CONSTRUCTOR .............................
        constructor(imageString: string) {
            super(imageString); 

            this.sound = "breath";
            this.name = "level3Enemy";
            this.x = 550;
            this.y = 50;
            createjs.Sound.play(this.sound, { "loop": -1 });
        }
        

        // PUBLIC METHODS .......................
        public update(): void {
           // this.x += this.dx; // position boat under mouse
            if (config.MOVING) {
                this.y += 3;
                if (this.y > 430) {
                    config.MOVING = false;
                }

            }
            else {
                this.y -= 3;
                if (this.y < 40) {
                    config.MOVING = true;
                }
            }
          
            
        }

       

    }
}   