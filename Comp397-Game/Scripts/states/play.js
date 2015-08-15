/// <reference path="../managers/assets.ts" />
var states;
(function (states) {
    //PLAY CLASS...........
    var Play = (function () {
        //CONSTRUCTOR.......
        function Play() {
            //add ocean object to stage
            ocean = new objects.Ocean(assets.loader.getResult("ocean"));
            stage.addChild(ocean);
            //add shell object to stage
            diamond = new objects.Diamond(assets.loader.getResult("diamond"));
            stage.addChild(diamond);
            // add boat object to stage
            boat = new objects.Boat(assets.loader.getResult("boat"));
            stage.addChild(boat);
            //add islands to the stage
            island1 = new objects.Island(assets.loader.getResult("island1"));
            stage.addChild(island1);
            island2 = new objects.Island2(assets.loader.getResult("island2"));
            stage.addChild(island2);
            //add scoreboard
            scoreboard = new objects.ScoreBoard();
            //add collision manager
            collision = new managers.Collision();
        }
        //  PUBLIC METHODS........
        //update function for play state
        Play.prototype.update = function () {
            ocean.update();
            boat.update();
            diamond.update();
            island1.update();
            island2.update();
            collision.check(island1);
            collision.check(island2);
            collision.check(diamond);
            scoreboard.update();
        };
        return Play;
    })();
    states.Play = Play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map