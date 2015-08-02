/// <reference path="../managers/assets.ts" />
module states
{
    //PLAY CLASS...........
    export class Play
    {
        //CONSTRUCTOR.......
        constructor()
        {
            //add ocean object to stage
            ocean = new objects.Ocean(assets.loader.getResult("ocean"));
            stage.addChild(ocean);

            //add shell object to stage
            shell = new objects.Shell(assets.loader.getResult("shell"));
            stage.addChild(shell);

            // add boat object to stage
            boat = new objects.Boat(assets.loader.getResult("boat"));
            stage.addChild(boat);

            /* add 3 shark objects to stage
            for (var shark = 0; shark < 3; shark++) {
                sharks[shark] = new objects.Shark(assets.loader.getResult("shark"));
                stage.addChild(sharks[shark]);
            }*/

            //add islands to the stage
            for (var island = 0; island < 3; island++) {
                islands[island] = new objects.Island(assets.loader.getResult("island"));
                stage.addChild(islands[island]);
            }


            //add scoreboard
            scoreboard = new objects.ScoreBoard();

            //add collision manager
            collision = new managers.Collision();
        }

        //  PUBLIC METHODS........
        //update function for play state
        public update()
        {
            ocean.update();
            boat.update();
            shell.update();
            /*
            for (var shark = 0; shark < 3; shark++) {
                sharks[shark].update();
                collision.check(sharks[shark]);
            }*/
            for (var island = 0; island < 3; island++) {
                islands[island].update();
                collision.check(islands[island]);
            }

            collision.check(shell);

            scoreboard.update();

        }


    }
} 