/// <reference path="../managers/assets.ts" />

module objects {
    // Island Class ......................
    export class Island extends objects.GameObject {

        // CONSTRUCTOR ...........................
        constructor(imageString: string) {
            super(imageString);

            this.name = "island";
            

            this.reset();
        }

        // PRIVATE METHODS .........................
        private checkBounds(): void {

            // check if island has left screen
            if (this.x < 0) {
                this.reset();
            }
        }


        private reset(): void {
            this.y = 100 + Math.floor(Math.random() * 400); // start island at random location
            this.x = 580; // start island off stage
            this.dx = Math.floor(Math.random() * 5) + 5;
            this.dy = Math.floor(Math.random() * 4);
        }


        // PUBLIC METHODS .....................
        public update(): void {
            this.x -= this.dx; // move island across the stage
            this.checkBounds();
        }
    }
}   