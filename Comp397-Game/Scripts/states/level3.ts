/// <reference path="../managers/assets.ts" />

module states {
    //LEVEL3 CLASS...........
    export class Level3 {
        //CONSTRUCTOR.......
        constructor() {
            //add ocean object to stage
            ocean = new objects.Ocean(assets.loader.getResult("ocean"));
            stage.addChild(ocean);

            //add shell object to stage
           // shell = new objects.Shell(assets.loader.getResult("diamond"));
           // stage.addChild(shell);

            // add boat object to stage
            boat = new objects.Boat(assets.loader.getResult("boat"));
            stage.addChild(boat);

            
            //add enemyBoat to the stage
            level3Enemy = new objects.Level3Enemy(assets.loader.getResult("enemyLevel3"));
            stage.addChild(level3Enemy);

            // add fuel object to stage
           // fuel = new objects.Fuel(assets.loader.getResult("fuel"),3);
            //stage.addChild(fuel);

            //player has bullets in level3
            bulletManager = new managers.BulletManager();
            bombManager = new managers.BombManager();

            //add scoreboard
            level3ScoreBoard = new objects.Level3ScoreBoard();

            //add collision manager
            //collision = new managers.Collision();
            bulletCollision = new managers.BulletCollision();
        }

        //  PUBLIC METHODS........
        //update function for level3 state
        public update() {
            ocean.update();
            boat.update();
            //shell.update();
            bulletManager.update();
            bombManager.update();
            //fuel.update();

            level3Enemy.update();

          //  collision.check(shell);
           // collision.check(fuel);

            level3ScoreBoard.update();

        }


    }
}   