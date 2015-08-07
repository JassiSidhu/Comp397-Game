/// <reference path="../managers/assets.ts" />
var states;
(function (states) {
    //LEVEL2 CLASS...........
    var Level2 = (function () {
        //CONSTRUCTOR.......
        function Level2() {
            //add ocean object to stage
            ocean = new objects.Ocean(assets.loader.getResult("ocean"));
            stage.addChild(ocean);
            //add shell object to stage
            shell = new objects.Shell(assets.loader.getResult("diamond"));
            stage.addChild(shell);
            // add boat object to stage
            boat = new objects.Boat(assets.loader.getResult("boat"));
            stage.addChild(boat);
            //add islands to the stage
            islands[0] = new objects.Island(assets.loader.getResult("island"));
            stage.addChild(islands[0]);
            //add enemyBoats to the stage
            for (var enemyboat = 0; enemyboat < 3; enemyboat++) {
                enemyBoats[enemyboat] = new objects.EnemyBoat(assets.loader.getResult("enemyBoat"));
                stage.addChild(enemyBoats[enemyboat]);
            }
            // add fuel object to stage
            fuel = new objects.Fuel(assets.loader.getResult("fuel"), 2);
            stage.addChild(fuel);
            //player have bullets in level2
            bulletManager = new managers.BulletManager();
            //add scoreboard
            scoreboard = new objects.ScoreBoard();
            //add collision manager
            collision = new managers.Collision();
            bulletCollision = new managers.BulletCollision();
        }
        //  PUBLIC METHODS........
        //update function for level2 state
        Level2.prototype.update = function () {
            ocean.update();
            boat.update();
            shell.update();
            bulletManager.update();
            fuel.update();
            islands[0].update();
            collision.check(islands[0]);
            for (var enemyboat = 0; enemyboat < 3; enemyboat++) {
                enemyBoats[enemyboat].update();
                collision.check(enemyBoats[enemyboat]);
            }
            collision.check(shell);
            collision.check(fuel);
            scoreboard.update();
        };
        return Level2;
    })();
    states.Level2 = Level2;
})(states || (states = {}));
//# sourceMappingURL=level2.js.map