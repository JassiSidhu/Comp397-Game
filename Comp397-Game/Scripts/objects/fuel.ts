/// <reference path="../managers/assets.ts" />

module objects {
    // Fuel Class ......................
    export class Fuel extends objects.GameObject {

        // CONSTRUCTOR ...........................
        constructor(imageString: string,level : number) {
            super(imageString);

            this.name = "fuel";

            //different speed of fuel can in different levels
            if (level == 1)
                this.dx = Math.floor(Math.random() * 5) + 7;
            if (level == 2)
                this.dx = Math.floor(Math.random() * 5) + 5.5;
            if (level == 3)
                this.dx = Math.floor(Math.random() * 5) + 4;

            this.reset();


        }
        //private flag: number = 0;

        // PRIVATE METHODS .........................
        private checkBounds(): void {
           // console.log(this.flag);
            // check if fuel has left screen
            if (this.x < 0 ) {
                this.reset();
            }
            

        }


        private reset(): void {
            this.y = 100 + Math.floor(Math.random() * 400); // start fuel at random location
            this.x = 580; // start fuel off stage

            /*different speed of fuel can in different levels
            if(level == 1)
                this.dx = Math.floor(Math.random() * 5) + 7;
            if (level == 2)
                this.dx = Math.floor(Math.random() * 5) + 5.5;
            if(level  == 3)
                this.dx = Math.floor(Math.random() * 5) + 4;*/

            this.dy = Math.floor(Math.random() * 4);
        }

        //destroy method for fuel
        private _destroyFuel(fuel: objects.Fuel) {
            stage.removeChild(fuel);
        }

        // PUBLIC METHODS .....................
        public update(): void {
            this.x -= this.dx; // move fuel across the stage
            this.checkBounds();
        }
    }
}    