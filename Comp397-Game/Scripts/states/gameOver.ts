/// <reference path="../managers/assets.ts" />
module states
{
    // GAMEOVER CLASS...
    export class GameOver
    {
        //CONSTRUCTOR...
        constructor()
        {
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


            // Add objects of game over stage
            gameOver = new createjs.Bitmap(assets.loader.getResult("gameOver"));
            stage.addChild(gameOver);

            tryButton = new objects.Button(assets.loader.getResult("tryAgain"), 440, 320, false);
            stage.addChild(tryButton);
            tryButton.on("click", tryButtonClicked);
        }

        //PUBLIC METHODS......
        public update()
        {
            ocean.update();
            shell.update();
            for (var island = 0; island < 3; island++) {
                islands[island].update();
            }

        }
    }
} 