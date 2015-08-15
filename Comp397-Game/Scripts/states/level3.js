/// <reference path="../managers/assets.ts" />
var states;
(function (states) {
    //LEVEL3 CLASS...........
    var Level3 = (function () {
        //CONSTRUCTOR.......
        function Level3() {
            //add ocean object to stage
            ocean = new objects.Ocean(assets.loader.getResult("ocean"));
            stage.addChild(ocean);
            // add boat object to stage
            boat = new objects.Boat(assets.loader.getResult("boat"));
            stage.addChild(boat);
            //add enemyBoat to the stage
            level3Enemy = new objects.Level3Enemy(assets.loader.getResult("enemyLevel3"));
            stage.addChild(level3Enemy);
            //player has bullets in level3
            bulletManager = new managers.BulletManager();
            bombManager = new managers.BombManager();
            //add scoreboard
            level3ScoreBoard = new objects.Level3ScoreBoard();
            //add collision manager
            bulletCollision = new managers.BulletCollision();
        }
        //  PUBLIC METHODS........
        //update function for level3 state
        Level3.prototype.update = function () {
            ocean.update();
            boat.update();
            bulletManager.update();
            bombManager.update();
            level3Enemy.update();
            level3ScoreBoard.update();
        };
        return Level3;
    })();
    states.Level3 = Level3;
})(states || (states = {}));
//# sourceMappingURL=level3.js.map