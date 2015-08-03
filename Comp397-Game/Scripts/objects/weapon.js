/// <reference path="../managers/assets.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Weapon Class .......................
    var Weapon = (function (_super) {
        __extends(Weapon, _super);
        // CONSTRUCTOR.........................
        function Weapon(imageString, riverType) {
            _super.call(this, imageString);
            this.name = "river";
            this.sound = "power";
            if (riverType == "up") {
                this.x = 330;
                this.y = 50;
            }
            if (riverType == "down") {
                this.x = 330;
                this.y = 430;
            }
            //this.dx = 5;
            //this.reset();
        }
        return Weapon;
    })(objects.GameObject);
    objects.Weapon = Weapon;
})(objects || (objects = {}));
//# sourceMappingURL=weapon.js.map