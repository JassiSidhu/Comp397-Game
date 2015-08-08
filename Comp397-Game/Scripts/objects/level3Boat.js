/// <reference path="../managers/assets.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Boat Class ..............................
    var Level3Boat = (function (_super) {
        __extends(Level3Boat, _super);
        // CONSTRUCTOR .............................
        function Level3Boat(imageString) {
            _super.call(this, imageString);
            window.onkeydown = this.fire;
            window.onkeyup = this.dontfire;
            //var firing: number = 0;
            this.sound = "breath";
            this.name = "level3Boat";
            this.y = 400;
            createjs.Sound.play(this.sound, { "loop": -1 });
        }
        // PUBLIC METHODS .......................
        Level3Boat.prototype.update = function () {
            this.x = stage.mouseX; // position boat under mouse
        };
        Level3Boat.prototype.fire = function (event) {
            switch (event.keyCode) {
                case config.KEY_SPACE:
                    config.FIRING = true;
                    break;
            }
        };
        Level3Boat.prototype.dontfire = function (event) {
            switch (event.keyCode) {
                case config.KEY_SPACE:
                    config.FIRING = false;
                    break;
            }
        };
        return Level3Boat;
    })(objects.GameObject);
    objects.Level3Boat = Level3Boat;
})(objects || (objects = {}));
//# sourceMappingURL=level3boat.js.map