/// <reference path="../managers/assets.ts" />

module states {
    //STARTSTATE CLASS
    export class StartState {
        //CONSTRUCTOR.........
        constructor() {
            //add ocean object to stage
            ocean = new objects.Ocean(assets.loader.getResult("ocean"));
            stage.addChild(ocean);

            //add shell object to stage
            shell = new objects.Shell(assets.loader.getResult("shell"));
            stage.addChild(shell);

            //add islands to the stage
            for (var island = 0; island < 3; island++) {
                islands[island] = new objects.Island(assets.loader.getResult("island"));
                stage.addChild(islands[island]);
            }


            //Add start objects....
            start = new createjs.Bitmap(assets.loader.getResult("start"));
            stage.addChild(start);

            instructionsButton = new objects.Button(assets.loader.getResult("instructions"), 240, 340, false);
            stage.addChild(instructionsButton);
            instructionsButton.on("click", instructionsClicked);

            playButton = new objects.Button(assets.loader.getResult("play"), 240, 200, false);
            stage.addChild(playButton);
            playButton.on("click", playButtonClicked);
        }

        //PUBLIC METHODS........
        public update() {
            ocean.update();
            shell.update();
            for (var island = 0; island < 3; island++) {
                islands[island].update();
            }
        }
       
    }
} 