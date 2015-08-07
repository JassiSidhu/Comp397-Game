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
            shell = new objects.Shell(assets.loader.getResult("diamond"));
            stage.addChild(shell);

            // add boat object to stage
            boat = new objects.Boat(assets.loader.getResult("level3boat"));
            stage.addChild(boat);

            
            //add enemyBoats to the stage
            for (var enemyboat = 0; enemyboat < 3; enemyboat++) {
                enemyBoats[enemyboat] = new objects.EnemyBoat(assets.loader.getResult("enemyLevel3"));
                stage.addChild(enemyBoats[enemyboat]);
            }

            // add fuel object to stage
            fuel = new objects.Fuel(assets.loader.getResult("fuel"),3);
            stage.addChild(fuel);

            //player has bullets in level3
            bulletManager = new managers.BulletManager();

            //add scoreboard
            scoreboard = new objects.ScoreBoard();

            //add collision manager
            collision = new managers.Collision();
        }

        //  PUBLIC METHODS........
        //update function for level3 state
        public update() {
            ocean.update();
            boat.update();
            shell.update();
            bulletManager.update();
            fuel.update();

            for (var enemyboat = 0; enemyboat < 3; enemyboat++) {
                enemyBoats[enemyboat].update();
                collision.check(enemyBoats[enemyboat]);
            }


            collision.check(shell);
            collision.check(fuel);

            scoreboard.update();

        }


    }
}   