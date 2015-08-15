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
    var Boat = (function (_super) {
        __extends(Boat, _super);
        // CONSTRUCTOR .............................
        function Boat(imageString) {
            _super.call(this, imageString);
            window.onkeydown = this.fire;
            window.onkeyup = this.dontfire;
            var firing = 0;
            this.sound = "breath";
            this.name = "boat";
            this.x = 100;
            this.y = 100;
            createjs.Sound.play(this.sound, { "loop": -1 });
        }
        //Private Methods.......
        Boat.prototype.fire = function (event) {
            switch (event.keyCode) {
                case config.KEY_SPACE:
                    config.FIRING = true;
                    break;
            }
        };
        Boat.prototype.dontfire = function (event) {
            switch (event.keyCode) {
                case config.KEY_SPACE:
                    config.FIRING = false;
                    break;
            }
        };
        // PUBLIC METHODS .......................
        Boat.prototype.update = function () {
            this.y = stage.mouseY; // position boat under mouse
            if (this.y < 80)
                this.y = 80;
        };
        return Boat;
    })(objects.GameObject);
    objects.Boat = Boat;
})(objects || (objects = {}));
//# sourceMappingURL=boat.js.map