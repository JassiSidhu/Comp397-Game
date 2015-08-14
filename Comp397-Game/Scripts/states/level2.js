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
            // add boat object to stage
            boat = new objects.Boat(assets.loader.getResult("boat"));
            stage.addChild(boat);
            //add enemyBoats to the stage
            enemyBoat1 = new objects.EnemyBoat(assets.loader.getResult("enemyBoat"));
            stage.addChild(enemyBoat1);
            enemyBoat2 = new objects.EnemyBoat2(assets.loader.getResult("enemyBoat"));
            stage.addChild(enemyBoat2);
            enemyBoat3 = new objects.EnemyBoat3(assets.loader.getResult("enemyBoat"));
            stage.addChild(enemyBoat3);
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
            enemyBoat1.update();
            enemyBoat2.update();
            enemyBoat3.update();
            collision.check(enemyBoat1);
            collision.check(enemyBoat2);
            collision.check(enemyBoat3);
            scoreboard.update();
        };
        return Level2;
    })();
    states.Level2 = Level2;
})(states || (states = {}));
//# sourceMappingURL=level2.js.map