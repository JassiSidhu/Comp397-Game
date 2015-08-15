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
    var Level3Enemy = (function (_super) {
        __extends(Level3Enemy, _super);
        // CONSTRUCTOR .............................
        function Level3Enemy(imageString) {
            _super.call(this, imageString);
            this.sound = "breath";
            this.name = "level3Enemy";
            this.x = 550;
            this.y = 120;
            createjs.Sound.play(this.sound, { "loop": -1 });
        }
        // PUBLIC METHODS .......................
        Level3Enemy.prototype.update = function () {
            if (config.MOVING) {
                this.y += 3;
                if (this.y > 430) {
                    config.MOVING = false;
                }
            }
            else {
                this.y -= 3;
                if (this.y < 120) {
                    config.MOVING = true;
                }
            }
        };
        return Level3Enemy;
    })(objects.GameObject);
    objects.Level3Enemy = Level3Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=level3enemy.js.map