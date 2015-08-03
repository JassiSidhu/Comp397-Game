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
            shell = new objects.Shell(assets.loader.getResult("shell"));
            stage.addChild(shell);
            // add boat object to stage
            boat = new objects.Boat(assets.loader.getResult("boat"));
            stage.addChild(boat);
            //add islands to the stage
            islands[0] = new objects.Island(assets.loader.getResult("island"));
            stage.addChild(islands[0]);
            //add enemyBoats to the stage
            for (var enemyboat = 0; enemyboat < 2; enemyboat++) {
                enemyBoats[enemyboat] = new objects.EnemyBoat(assets.loader.getResult("enemyBoat"));
                stage.addChild(enemyBoats[enemyboat]);
            }
            bulletManager = new managers.BulletManager();
            //add scoreboard
            scoreboard = new objects.ScoreBoard();
            //add collision manager
            collision = new managers.Collision();
        }
        //  PUBLIC METHODS........
        //update function for level2 state
        Level2.prototype.update = function () {
            ocean.update();
            boat.update();
            shell.update();
            bulletManager.update();
            islands[0].update();
            collision.check(islands[0]);
            for (var enemyboat = 0; enemyboat < 2; enemyboat++) {
                enemyBoats[enemyboat].update();
                collision.check(enemyBoats[enemyboat]);
            }
            collision.check(shell);
            scoreboard.update();
        };
        return Level2;
    })();
    states.Level2 = Level2;
})(states || (states = {}));
//# sourceMappingURL=level2.js.map