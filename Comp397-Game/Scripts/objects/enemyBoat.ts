/// <reference path="../managers/assets.ts" />

module objects {
    // enemyBoat Class ......................
    export class EnemyBoat extends objects.GameObject {

        // CONSTRUCTOR ...........................
        constructor(imageString: string) {
            super(imageString);

            this.name = "enemyBoat";
            this.sound = "collide";

            this.reset();
        }

        // PRIVATE METHODS .........................
        private checkBounds(): void {

            // check if enemyBoat has left screen
            if (this.x < 0) {
                this.reset();
            }
        }




        // PUBLIC METHODS .....................

        public reset(): void {
            this.y = 60 + Math.floor(Math.random() * 50); // start enemyBoat at random location
            this.x = 580; // start enemyBoat off stage
            this.dx = Math.floor(Math.random() * 5) + 6.5;
            this.dy = Math.floor(Math.random() * 4);
        }


        public update(): void {
            this.x -= this.dx; // move enemyBoat across the stage
            this.checkBounds();
        }
    }
}    