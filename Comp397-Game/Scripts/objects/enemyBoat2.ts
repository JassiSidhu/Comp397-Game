/// <reference path="../managers/assets.ts" />

module objects {
    // enemyBoat2 Class ......................
    export class EnemyBoat2 extends objects.GameObject {

        // CONSTRUCTOR ...........................
        constructor(imageString: string) {
            super(imageString);

            this.name = "enemyBoat2";
            this.sound = "collide";

            this.reset();
        }

        // PRIVATE METHODS .........................
        private checkBounds(): void {

            // check if enemyBoat2 has left screen
            if (this.x < 0) {
                this.reset();
            }
        }


        // PUBLIC METHODS .....................

        public reset(): void {
            this.y = 200 + Math.floor(Math.random() * 50); // start enemyBoat2 at random location
            this.x = 580; // start enemyBoat2 off stage
            this.dx = Math.floor(Math.random() * 5) + 6.5;
            this.dy = Math.floor(Math.random() * 4);
        }


        public update(): void {
            this.x -= this.dx; // move enemyBoat2 across the stage
            this.checkBounds();
        }
    }
}     