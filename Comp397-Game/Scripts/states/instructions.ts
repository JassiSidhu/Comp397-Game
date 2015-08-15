/// <reference path="../managers/assets.ts" />

module states {
    //INSTRUCTIONS CLASS..............
    export class Instructions {
        //CONSTRUCTOR..............
        constructor() {
            //add ocean object to stage
            ocean = new objects.Ocean(assets.loader.getResult("ocean"));
            stage.addChild(ocean);

            //Add objects of instruction page
            instructionsPage = new createjs.Bitmap(assets.loader.getResult("instructionsPage"));
            stage.addChild(instructionsPage);

           
            backButton = new objects.Button(assets.loader.getResult("back"),60, 65, false);
            stage.addChild(backButton);
            backButton.on("click", backClicked);
        }
        
        //PUBLIC METHODS.......
        public update() {
            ocean.update();
        }
    }
}  