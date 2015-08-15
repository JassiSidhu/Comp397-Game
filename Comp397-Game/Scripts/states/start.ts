/// <reference path="../managers/assets.ts" />

module states {
    //STARTSTATE CLASS
    export class StartState {
        //CONSTRUCTOR.........
        constructor() {
            //add ocean object to stage
            ocean = new objects.Ocean(assets.loader.getResult("ocean"));
            stage.addChild(ocean);

            //Add start objects....
            start = new createjs.Bitmap(assets.loader.getResult("start"));
            stage.addChild(start);

            instructionsButton = new objects.Button(assets.loader.getResult("instructions"), 240, 380, false);
            stage.addChild(instructionsButton);
            instructionsButton.on("click", instructionsClicked);

            playButton = new objects.Button(assets.loader.getResult("play"), 230, 200, false);
            stage.addChild(playButton);
            playButton.on("click", playButtonClicked);

            

        }

        //PUBLIC METHODS........
        public update() {
            ocean.update();
        }
       
    }
} 