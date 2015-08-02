/// <reference path="../managers/assets.ts" />

module states {
    //INSTRUCTIONS CLASS..............
    export class Instructions {
        //CONSTRUCTOR..............
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


            //Add objects of instruction page
            instructionsPage = new createjs.Bitmap(assets.loader.getResult("instructionsPage"));
            stage.addChild(instructionsPage);

           
            backButton = new objects.Button(assets.loader.getResult("back"), 440, 340, false);
            stage.addChild(backButton);
            backButton.on("click", backClicked);
        }
        
        //PUBLIC METHODS.......
        public update() {
            ocean.update();
            shell.update();
            for (var island = 0; island < 3; island++) {
                islands[island].update();
            }

        }
    }
}  