/// <reference path="../managers/assets.ts" />

module objects {
    // Boat Class ..............................
    export class Level3Boat extends objects.GameObject {
        // CONSTRUCTOR .............................
        constructor(imageString: string) {
            super(imageString);

            window.onkeydown = this.fire;
            window.onkeyup = this.dontfire;
            //var firing: number = 0;

            this.sound = "breath";
            this.name = "level3Boat";
            this.y = 400;

            createjs.Sound.play(this.sound, { "loop": -1 });
        }

        // PUBLIC METHODS .......................
        public update(): void {
            this.x = stage.mouseX; // position boat under mouse
            if (this.y < 140)
                this.y = 140;
        }

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

    }
}   