/// <reference path="../managers/assets.ts" />
module states {
    // WinLose CLASS...
    export class WinLose {
        //CONSTRUCTOR...
        constructor() {
           
           
            // Add objects of win-lose stage
            gameOver = new createjs.Bitmap(assets.loader.getResult("winLose"));
            stage.addChild(gameOver);

            tryButton = new objects.Button(assets.loader.getResult("tryAgain"), 300, 350, false);
            stage.addChild(tryButton);
            tryButton.on("click", tryButtonClicked);
        }

        //PUBLIC METHODS......
        public update() {
           
        }
    }
}  