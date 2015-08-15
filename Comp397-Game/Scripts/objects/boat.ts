/// <reference path="../managers/assets.ts" />

module objects {
    // Boat Class ..............................
    export class Boat extends objects.GameObject {
        // CONSTRUCTOR .............................
        constructor(imageString: string) {
            super(imageString);
            
            window.onkeydown = this.fire;
            window.onkeyup = this.dontfire;
            var firing: number = 0;

            this.sound = "breath";
            this.name = "boat";

            this.x = 100;
            this.y = 100;
            createjs.Sound.play(this.sound, { "loop": -1 });
        }

        //Private Methods.......
        private fire(event: KeyboardEvent) {

            switch (event.keyCode) {

                case config.KEY_SPACE:
                    config.FIRING = true;
                    break;

            }

        }

        private dontfire(event: KeyboardEvent) {
            switch (event.keyCode) {

                case config.KEY_SPACE:
                    config.FIRING = false;
                    break;
            }

        }

        // PUBLIC METHODS .......................
        public update(): void {
            this.y = stage.mouseY; // position boat under mouse
            if (this.y < 80)       
                this.y = 80;

            
        }

     }
}  