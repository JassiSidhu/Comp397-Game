/// <reference path="../managers/assets.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Diamond Class .......................
    var Diamond = (function (_super) {
        __extends(Diamond, _super);
        // CONSTRUCTOR.........................
        function Diamond(imageString) {
            _super.call(this, imageString);
            this.name = "diamond";
            this.sound = "power";
            this.reset();
        }
        // PRIVATE METHODS .....................
        Diamond.prototype.checkBounds = function () {
            // check if diamond has left screen
            if (this.x < 0) {
                this.reset();
            }
        };
        Diamond.prototype.reset = function () {
            this.y = 100 + Math.floor(Math.random() * 350); // start diamond at random location
            this.x = 640; // start diamond off stage
        };
        // PUBLIC METHODS .......................
        Diamond.prototype.update = function () {
            this.x -= 3; // moves diamond across the stage
            this.checkBounds();
        };
        return Diamond;
    })(objects.GameObject);
    objects.Diamond = Diamond;
})(objects || (objects = {}));
//# sourceMappingURL=diamond.js.map