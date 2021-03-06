﻿/// <reference path="../managers/assets.ts" />

module objects {
    // Ocean Class ......................
    export class Ocean extends createjs.Bitmap {
        // PUBLIC PROPERTIES ..........................
        width: number;
        height: number;
        dx: number = 5;

        // CONSTRUCTOR .....................
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.reset();
        }

        // PRIVATE METHODS ....................
        private checkBounds(): void {

            // check if ocean has left screen
            if (this.x == -1280) {
                this.reset();
            }
        }


        private reset(): void {
            this.x = 0;
            this.y = 0; // reset ocean off screen
        }


        // PUBLIC METHODS .........................
        public update(): void {

            this.x -= this.dx; // moves Ocean across the stage
            this.checkBounds();
        }
    }
}  