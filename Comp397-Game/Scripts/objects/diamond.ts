/// <reference path="../managers/assets.ts" />

module objects {
    // Diamond Class .......................
    export class Diamond extends objects.GameObject {
        // CONSTRUCTOR.........................
        constructor(imageString: string) {
            super(imageString);

            this.name = "diamond";
            this.sound = "power";
            

            this.reset();
        }

        // PRIVATE METHODS .....................
        private checkBounds(): void {

            // check if diamond has left screen
            if (this.x < 0) {
                this.reset();
            }
        }


        public reset(): void {
            this.y = 100 + Math.floor(Math.random() * 350); // start diamond at random location
            this.x = 640; // start diamond off stage
        }

        // PUBLIC METHODS .......................
        public update(): void {

            this.x -= 3; // moves diamond across the stage
            this.checkBounds();
        }
    }
} 