/// <reference path="../managers/assets.ts" />
module states
{
    // GAMEOVER CLASS...
    export class GameOver
    {
        //CONSTRUCTOR...
        constructor()
        {
           
            // Add objects of game over stage
            gameOver = new createjs.Bitmap(assets.loader.getResult("gameOver"));
            stage.addChild(gameOver);

            tryButton = new objects.Button(assets.loader.getResult("tryAgain"), 300, 350, false);
            stage.addChild(tryButton);
            tryButton.on("click", tryButtonClicked);
        }

        //PUBLIC METHODS......
        public update()
        {
                      
        }
    }
} 