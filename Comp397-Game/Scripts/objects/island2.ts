/// <reference path="../managers/assets.ts" />

module objects {
    // Island Class ......................
    export class Island2 extends objects.GameObject {

        // CONSTRUCTOR ...........................
        constructor(imageString: string) {
            super(imageString);

            this.name = "island2";
            this.sound = "collide";

            this.reset();
        }

        // PRIVATE METHODS .........................
        private checkBounds(): void {

            // check if island has left screen
            if (this.x < 0) {
                this.reset();
            }
        }


        public reset(): void {
            this.y = 100 + Math.floor(Math.random() * 40); // start island at random location
            this.x = 620; // start island off stage
        }

        // PUBLIC METHODS .....................
        public update(): void {
            this.x -= 3; // move island across the stage
            this.checkBounds();
        }
    }
}    