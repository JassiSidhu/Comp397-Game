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
            this.sound = "breath";
            this.x = 100;
            createjs.Sound.play(this.sound, { "loop": -1 });
        }
        // PUBLIC METHODS .......................
        Boat.prototype.update = function () {
            this.y = stage.mouseY; // position boat under mouse
        };
        return Boat;
    })(objects.GameObject);
    objects.Boat = Boat;
})(objects || (objects = {}));
//# sourceMappingURL=boat.js.map