/// <reference path="../managers/assets.ts" />

module objects {
    // enemyBoat3 Class ......................
    export class EnemyBoat3 extends objects.GameObject {

        // CONSTRUCTOR ...........................
        constructor(imageString: string) {
            super(imageString);

            this.name = "enemyBoat3";
            this.sound = "collide";

            this.reset();
        }

        // PRIVATE METHODS .........................
        private checkBounds(): void {

            // check if enemyBoat3 has left screen
            if (this.x < 0) {
                this.reset();
            }
        }

        // PUBLIC METHODS .....................

        public reset(): void {
            this.y = 350 + Math.floor(Math.random() * 50); // start enemyBoat3 at random location
            this.x = 580; // start enemyBoat3 off stage
            this.dx = Math.floor(Math.random() * 5) + 6.5;
            this.dy = Math.floor(Math.random() * 4);
        }


        public update(): void {
            this.x -= this.dx; // move enemyBoat3 across the stage
            this.checkBounds();
        }
    }
}     